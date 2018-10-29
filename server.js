require('babel-register');
var swig  = require('swig');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var routes = require('./app/routes');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var config = require('./config');
var async = require('async');
var request = require('request');
var xml2js = require('xml2js');
var _ = require('underscore');

var app = express();

var mongoose = require('mongoose');
var Player = require('./models/player');
mongoose.connect(config.database,{useMongoClient:true});
mongoose.connection.on('error', function() {
    console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/players', function(req, res, next) {
    var choices = ['C', 'G', 'F'];
    var randomPosition = _.sample(choices);
    Player.find({ random: { $near: [Math.random(), 0] } })
        .where('voted', false)
        .where('pos', randomPosition)
        .limit(2)
        .exec(function(err, players) {
            if (err) return next(err);

            if (players.length === 2) {
                return res.send(players);
            }

            var oppositePosition = _.first(_.without(choices, randomPosition));

            Player
                .find({ random: { $near: [Math.random(), 0] } })
                .where('voted', false)
                .where('pos', oppositePosition)
                .limit(2)
                .exec(function(err, players) {
                    if (err) return next(err);

                    if (players.length === 2) {
                        return res.send(players);
                    }

                    Player.update({}, { $set: { voted: false } }, { multi: true }, function(err) {
                        if (err) return next(err);
                        res.send([]);
                    });
                });
        });
});

app.put('/api/players', function(req, res, next) {
    var winner = req.body.winner;
    var loser = req.body.loser;

    if (!winner || !loser) {
        return res.status(400).send({ message: 'Voting requires two players.' });
    }

    if (winner === loser) {
        return res.status(400).send({ message: 'Cannot vote for and against the same player.' });
    }

    async.parallel([
            function(callback) {
                Player.findOne({ personId: winner }, function(err, winner) {
                    callback(err, winner);
                });
            },
            function(callback) {
                Player.findOne({ personId: loser }, function(err, loser) {
                    callback(err, loser);
                });
            }
        ],
        function(err, results) {
            if (err) return next(err);

            var winner = results[0];
            var loser = results[1];

            if (!winner || !loser) {
                return res.status(404).send({ message: 'One of the players no longer exists.' });
            }

            if (winner.voted || loser.voted) {
                return res.status(200).end();
            }

            async.parallel([
                function(callback) {
                    winner.wins++;
                    winner.voted = true;
                    winner.random = [Math.random(), 0];
                    winner.save(function(err) {
                        callback(err);
                    });
                },
                function(callback) {
                    loser.losses++;
                    loser.voted = true;
                    loser.random = [Math.random(), 0];
                    loser.save(function(err) {
                        callback(err);
                    });
                }
            ], function(err) {
                if (err) return next(err);
                res.status(200).end();
            });
        });
});

app.get('/api/players/count', function(req, res, next) {
    Player.count({}, function(err, count) {
        if (err) return next(err);
        res.send({ count: count });
    });
});

app.get('/api/players/search', function(req, res, next) {
    var playerName = new RegExp(req.query.name, 'i');
    var name = playerName.split(" ");

    Player.findOne({ firstName: name[0], lastName : name[1]}, function(err, player) {
        if (err) return next(err);

        if (!player) {
            return res.status(404).send({ message: 'Player not found.' });
        }

        res.send(player);
    });
});

app.get('/api/players/top', function(req, res, next) {
    var params = req.query;
    var conditions = {};

    _.each(params, function(value, key) {
        conditions[key] = new RegExp('^' + value + '$', 'i');
    });
    Player
        .find(conditions)
        .sort('-wins') // Sort in descending order (highest wins on top)
        .limit(100)
        .exec(function(err, players) {
            if (err) return next(err);

            // Sort by winning percentage
            players.sort(function(a, b) {
                if (a.wins / (a.wins + a.losses) < b.wins / (b.wins + b.losses)) { return 1; }
                if (a.wins / (a.wins + a.losses) > b.wins / (b.wins + b.losses)) { return -1; }
                return 0;
            });

            res.send(players);
        });
});

app.get('/api/players/shame', function(req, res, next) {
    Player
        .find()
        .sort('-losses')
        .limit(100)
        .exec(function(err, players) {
            if (err) return next(err);
            players.sort(function(a, b) {
                if (a.wins / (a.wins + a.losses) < b.wins / (b.wins + b.losses)) { return -1; }
                if (a.wins / (a.wins + a.losses) > b.wins / (b.wins + b.losses)) { return 1; }
                return 0;
            });
            res.send(players);
        });
});

app.get('/api/players/:id', function(req, res, next) {
    var id = req.params.id;

    Player.findOne({ personId: id }, function(err, player) {
        if (err) return next(err);

        if (!player) {
            return res.status(404).send({ message: 'Player not found.' });
        }

        res.send(player);
    });
});

app.post('/api/report', function(req, res, next) {
    var personId = req.body.personId;

    Player.findOne({ personId: personId }, function(err, player) {
        if (err) return next(err);

        if (!player) {
            return res.status(404).send({ message: 'Player not found.' });
        }

        player.reports++;

        if (player.reports > 4) {
            player.remove();
            return res.send({ message: player.firstName + ' ' + player.lastName + ' has been deleted.' });
        }

        player.save(function(err) {
            if (err) return next(err);
            res.send({ message: player.firstName + ' ' + player.lastName + ' has been reported.' });
        });
    });
});

app.get('/api/stats', function(req, res, next) {
    async.parallel([
            function(callback) {
                Player.count({}, function(err, count) {
                    callback(err, count);
                });
            },
            function(callback) {
                Player.count({ pos: 'F' }, function(err, forwardCount) {
                    callback(err, forwardCount);
                });
            },
            function(callback) {
                Player.count({ pos: 'G' }, function(err, guardCount) {
                    callback(err, guardCount);
                });
            },
            function(callback) {
                Player.count({ pos: 'C' }, function(err, centerCount) {
                    callback(err, centerCount);
                });
            },
            function(callback) {
                Player.count({ country: 'USA' }, function(err, usaCount) {
                    callback(err, usaCount);
                });
            },
            function(callback) {
                Player.count({ country: { $ne:'USA'} }, function(err, nusaCount) {
                    callback(err, nusaCount);
                });
            },
            function(callback) {
                Player.aggregate({ $group: { _id: null, total: { $sum: '$wins' } } }, function(err, totalVotes) {
                        var total = totalVotes.length ? totalVotes[0].total : 0;
                        callback(err, total);
                    }
                );
            },
            function(callback) {
                Player
                    .find()
                    .sort('-wins')
                    .limit(100)
                    .select('pos')
                    .exec(function(err, players) {
                        if (err) return next(err);

                        var posCount = _.countBy(players, function(player) { return player.pos; });
                        var max = _.max(posCount, function(pos) { return pos });
                        var inverted = _.invert(posCount);
                        var topPos = inverted[max];
                        var topCount = posCount[topPos];

                        callback(err, { pos: topPos, count: topCount });
                    });
            },
        ],
        function(err, results) {
            if (err) return next(err);

            res.send({
                totalCount: results[0],
                forwardCount: results[1],
                guardCount: results[2],
                centerCount: results[3],
                usaCount: results[4],
                nusaCount: results[5],
                totalVotes: results[6],
                leadingPosition: results[7]
            });
        });
});

app.get('/api/players/foreign', function(req, res, next) {
    console.log("gettttttt");
    Player
        .find()
        .sort('-wins')
        .limit(100)
        .exec(function(err, players) {
            if (err) return next(err);
            players.sort(function(a, b) {
                if (a.wins / (a.wins + a.losses) < b.wins / (b.wins + b.losses)) { return 1; }
                if (a.wins / (a.wins + a.losses) > b.wins / (b.wins + b.losses)) { return -1; }
                return 0;
            });
            res.send(players);
        });
});

app.use(function(req, res) {
  Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
      var page = swig.renderFile('views/index.html', { html: html });
      res.status(200).send(page);
    } else {
      res.status(404).send('Page Not Found')
    }
  });
});

var server = require('http').createServer(app);
var io = require('socket.io')(server);
var onlineUsers = 0;


io.sockets.on('connection', function(socket) {
  onlineUsers++;
  console.log(onlineUsers);

  io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });

  socket.on('disconnect', function() {
    onlineUsers--;
    io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });
  });
});



server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

