(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddPlayerActions = function () {
  function AddPlayerActions() {
    _classCallCheck(this, AddPlayerActions);

    this.generateActions('addPlayerSuccess', 'addPlayerFail', 'updateName', 'updatePos', 'invalidName', 'invalidPos');
  }

  _createClass(AddPlayerActions, [{
    key: 'addPlayer',
    value: function addPlayer(name, pos) {
      var _this = this;

      $.ajax({
        type: 'POST',
        url: '/api/players',
        data: { name: name, pos: pos }
      }).done(function (data) {
        _this.actions.addPlayerSuccess(data.message);
      }).fail(function (jqXhr) {
        _this.actions.addPlayerFail(jqXhr.responseJSON.message);
      });
    }
  }]);

  return AddPlayerActions;
}();

exports.default = _alt2.default.createActions(AddPlayerActions);

},{"../alt":8}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FooterActions = function () {
  function FooterActions() {
    _classCallCheck(this, FooterActions);

    this.generateActions('getTopPlayersSuccess', 'getTopPlayersFail');
  }

  _createClass(FooterActions, [{
    key: 'getTopPlayers',
    value: function getTopPlayers() {
      var _this = this;

      $.ajax({ url: '/api/players/top' }).done(function (data) {
        _this.actions.getTopPlayersSuccess(data);
      }).fail(function (jqXhr) {
        _this.actions.getTopPlayersFail(jqXhr);
      });
    }
  }]);

  return FooterActions;
}();

exports.default = _alt2.default.createActions(FooterActions);

},{"../alt":8}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomeActions = function () {
    function HomeActions() {
        _classCallCheck(this, HomeActions);

        this.generateActions('getTwoPlayersSuccess', 'getTwoPlayersFail', 'voteFail');
    }

    _createClass(HomeActions, [{
        key: 'getTwoPlayers',
        value: function getTwoPlayers() {
            var _this = this;

            $.ajax({ url: '/api/players' }).done(function (data) {
                _this.actions.getTwoPlayersSuccess(data);
            }).fail(function (jqXhr) {
                _this.actions.getTwoPlayersFail(jqXhr.responseJSON.message);
            });
        }
    }, {
        key: 'vote',
        value: function vote(winner, loser) {
            var _this2 = this;

            $.ajax({
                type: 'PUT',
                url: '/api/players',
                data: { winner: winner, loser: loser }
            }).done(function () {
                _this2.actions.getTwoPlayers();
            }).fail(function (jqXhr) {
                _this2.actions.voteFail(jqXhr.responseJSON.message);
            });
        }
    }]);

    return HomeActions;
}();

exports.default = _alt2.default.createActions(HomeActions);

},{"../alt":8}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarActions = function () {
  function NavbarActions() {
    _classCallCheck(this, NavbarActions);

    this.generateActions('updateOnlineUsers', 'updateAjaxAnimation', 'updateSearchQuery', 'getPlayerCountSuccess', 'getPlayerCountFail', 'findPlayerSuccess', 'findPlayerFail');
  }

  _createClass(NavbarActions, [{
    key: 'findPlayer',
    value: function findPlayer(payload) {
      var _this = this;

      $.ajax({
        url: '/api/players/search',
        data: { name: payload.searchQuery }
      }).done(function (data) {
        (0, _underscore.assign)(payload, data);
        _this.actions.findPlayerSuccess(payload);
      }).fail(function () {
        _this.actions.findPlayerFail(payload);
      });
    }
  }, {
    key: 'getPlayerCount',
    value: function getPlayerCount() {
      var _this2 = this;

      $.ajax({ url: '/api/players/count' }).done(function (data) {
        _this2.actions.getPlayerCountSuccess(data);
      }).fail(function (jqXhr) {
        _this2.actions.getPlayerCountFail(jqXhr);
      });
    }
  }]);

  return NavbarActions;
}();

exports.default = _alt2.default.createActions(NavbarActions);

},{"../alt":8,"underscore":"underscore"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PlayerActions = function () {
    function PlayerActions() {
        _classCallCheck(this, PlayerActions);

        this.generateActions('reportSuccess', 'reportFail', 'getPlayerSuccess', 'getPlayerFail');
    }

    _createClass(PlayerActions, [{
        key: 'getPlayer',
        value: function getPlayer(personId) {
            var _this = this;

            $.ajax({ url: '/api/players/' + personId }).done(function (data) {
                _this.actions.getPlayerSuccess(data);
            }).fail(function (jqXhr) {
                _this.actions.getPlayerFail(jqXhr);
            });
        }
    }, {
        key: 'report',
        value: function report(personId) {
            var _this2 = this;

            $.ajax({
                type: 'POST',
                url: '/api/report',
                data: { personId: personId }
            }).done(function () {
                _this2.actions.reportSuccess();
            }).fail(function (jqXhr) {
                _this2.actions.reportFail(jqXhr);
            });
        }
    }]);

    return PlayerActions;
}();

exports.default = _alt2.default.createActions(PlayerActions);

},{"../alt":8}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PlayerListActions = function () {
    function PlayerListActions() {
        _classCallCheck(this, PlayerListActions);

        this.generateActions('getPlayersSuccess', 'getPlayersFail');
    }

    _createClass(PlayerListActions, [{
        key: 'getPlayers',
        value: function getPlayers(payload) {
            var _this = this;

            var url = '/api/players/top';
            var params = {
                pos: payload.pos
            };

            if (payload.category === 'USA') {
                params.country = 'USA';
            } else if (payload.category === 'nUSA') {
                params.country = 'Canada';
            } else if (payload.category === '23') {
                params.jersey = '23';
            } else if (payload.category === '3') {
                params.jersey = '3';
            } else if (payload.category === '0') {
                params.jersey = '0';
            }

            if (payload.category === 'shame') {
                url = '/api/players/shame';
            }

            $.ajax({ url: url, data: params }).done(function (data) {
                _this.actions.getPlayersSuccess(data);
            }).fail(function (jqXhr) {
                _this.actions.getPlayersFail(jqXhr);
            });
        }
    }]);

    return PlayerListActions;
}();

exports.default = _alt2.default.createActions(PlayerListActions);

},{"../alt":8}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StatsActions = function () {
    function StatsActions() {
        _classCallCheck(this, StatsActions);

        this.generateActions('getStatsSuccess', 'getStatsFail');
    }

    _createClass(StatsActions, [{
        key: 'getStats',
        value: function getStats() {
            var _this = this;

            $.ajax({ url: '/api/stats' }).done(function (data) {
                _this.actions.getStatsSuccess(data);
            }).fail(function (jqXhr) {
                _this.actions.getStatsFail(jqXhr);
            });
        }
    }]);

    return StatsActions;
}();

exports.default = _alt2.default.createActions(StatsActions);

},{"../alt":8}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _alt2.default();

},{"alt":"alt"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AddPlayerStore = require('../stores/AddPlayerStore');

var _AddPlayerStore2 = _interopRequireDefault(_AddPlayerStore);

var _AddPlayerActions = require('../actions/AddPlayerActions');

var _AddPlayerActions2 = _interopRequireDefault(_AddPlayerActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddPlayer = function (_React$Component) {
  _inherits(AddPlayer, _React$Component);

  function AddPlayer(props) {
    _classCallCheck(this, AddPlayer);

    var _this = _possibleConstructorReturn(this, (AddPlayer.__proto__ || Object.getPrototypeOf(AddPlayer)).call(this, props));

    _this.state = _AddPlayerStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(AddPlayer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _AddPlayerStore2.default.listen(this.onChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _AddPlayerStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();

      var name = this.state.name.trim();
      var pos = this.state.pos.trim();

      if (!name) {
        _AddPlayerActions2.default.invalidName();
        this.refs.nameTextField.getDOMNode().focus();
      }
      if (!team) {
        _AddPlayerActions2.default.invalidPos();
        this.refs.posTextField.getDOMNode().focus();
      }
      if (name && pos) {
        _AddPlayerActions2.default.addPlayer(name, pos);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'row flipInX animated' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-8' },
            _react2.default.createElement(
              'div',
              { className: 'panel panel-default' },
              _react2.default.createElement(
                'div',
                { className: 'panel-heading' },
                'Add Character'
              ),
              _react2.default.createElement(
                'div',
                { className: 'panel-body' },
                _react2.default.createElement(
                  'form',
                  { onSubmit: this.handleSubmit.bind(this) },
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group ' + this.state.nameValidationState },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Player Name'
                    ),
                    _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.name,
                      onChange: _AddPlayerActions2.default.updateName, autoFocus: true }),
                    _react2.default.createElement(
                      'span',
                      { className: 'help-block' },
                      this.state.helpBlock
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group ' + this.state.posValidationState },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Player Position'
                    ),
                    _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'posTextField', value: this.state.pos,
                      onChange: _AddPlayerActions2.default.updatePos, autoFocus: true }),
                    _react2.default.createElement(
                      'span',
                      { className: 'help-block' },
                      this.state.helpBlock
                    )
                  ),
                  _react2.default.createElement(
                    'button',
                    { type: 'submit', className: 'btn btn-primary' },
                    'Submit'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return AddPlayer;
}(_react2.default.Component);

exports.default = AddPlayer;

},{"../actions/AddPlayerActions":1,"../stores/AddPlayerStore":19,"react":"react"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Navbar2.default, { history: this.props.history }),
        this.props.children,
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

},{"./Footer":11,"./Navbar":13,"react":"react"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _FooterStore = require('../stores/FooterStore');

var _FooterStore2 = _interopRequireDefault(_FooterStore);

var _FooterActions = require('../actions/FooterActions');

var _FooterActions2 = _interopRequireDefault(_FooterActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer(props) {
    _classCallCheck(this, Footer);

    var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));

    _this.state = _FooterStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Footer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _FooterStore2.default.listen(this.onChange);
      _FooterActions2.default.getTopPlayers();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _FooterStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'render',
    value: function render() {
      var leaderboardplayers = this.state.players.map(function (player) {
        return _react2.default.createElement(
          'li',
          { key: player.personId },
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/players/' + player.personId },
            _react2.default.createElement('img', { className: 'thumb-md', src: 'https://nba-players.herokuapp.com/players/' + player.lastName + '/' + player.firstName })
          )
        );
      });

      return _react2.default.createElement(
        'footer',
        null,
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-sm-5' },
              _react2.default.createElement(
                'h3',
                { className: 'lead' },
                _react2.default.createElement(
                  'strong',
                  null,
                  'Information'
                ),
                ' and ',
                _react2.default.createElement(
                  'strong',
                  null,
                  'Copyright'
                )
              ),
              _react2.default.createElement(
                'p',
                null,
                'Powered by ',
                _react2.default.createElement(
                  'strong',
                  null,
                  'Node.js'
                ),
                ', ',
                _react2.default.createElement(
                  'strong',
                  null,
                  'MongoDB'
                ),
                ' and ',
                _react2.default.createElement(
                  'strong',
                  null,
                  'React'
                ),
                ' with Flux architecture and server-side rendering.'
              ),
              _react2.default.createElement(
                'p',
                null,
                'You may view the ',
                _react2.default.createElement(
                  'a',
                  { href: 'https://github.com/xxu10/ntopia' },
                  'Source Code'
                ),
                ' behind this project on GitHub.'
              ),
              _react2.default.createElement(
                'p',
                null,
                '\xA9 2018 Sheen '
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-sm-7 hidden-xs' },
              _react2.default.createElement(
                'h3',
                { className: 'lead' },
                _react2.default.createElement(
                  'strong',
                  null,
                  'Leaderboard'
                ),
                ' Top 5 Players'
              ),
              _react2.default.createElement(
                'ul',
                { className: 'list-inline' },
                leaderboardplayers
              )
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(_react2.default.Component);

exports.default = Footer;

},{"../actions/FooterActions":2,"../stores/FooterStore":20,"react":"react","react-router":"react-router"}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _HomeStore = require('../stores/HomeStore');

var _HomeStore2 = _interopRequireDefault(_HomeStore);

var _HomeActions = require('../actions/HomeActions');

var _HomeActions2 = _interopRequireDefault(_HomeActions);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this.state = _HomeStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _HomeStore2.default.listen(this.onChange);
      _HomeActions2.default.getTwoPlayers();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _HomeStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'handleClick',
    value: function handleClick(player) {
      var winner = player.personId;
      var loser = (0, _underscore.first)((0, _underscore.without)(this.state.players, (0, _underscore.findWhere)(this.state.players, { personId: winner }))).personId;
      _HomeActions2.default.vote(winner, loser);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var playerNodes = this.state.players.map(function (player, index) {
        return _react2.default.createElement(
          'div',
          { key: player.personId, className: index === 0 ? 'col-xs-6 col-sm-6 col-md-5 col-md-offset-1' : 'col-xs-6 col-sm-6 col-md-5' },
          _react2.default.createElement(
            'div',
            { className: 'thumbnail fadeInUp animated' },
            _react2.default.createElement('img', { onClick: _this2.handleClick.bind(_this2, player), src: 'https://nba-players.herokuapp.com/players/' + player.lastName + '/' + player.firstName }),
            _react2.default.createElement(
              'div',
              { className: 'caption text-center' },
              _react2.default.createElement(
                'ul',
                { className: 'list-inline' },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'strong',
                    null,
                    'Team:'
                  ),
                  ' ',
                  player.teamId
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'strong',
                    null,
                    'Position:'
                  ),
                  ' ',
                  player.pos
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'strong',
                    null,
                    'Country:'
                  ),
                  ' ',
                  player.country
                )
              ),
              _react2.default.createElement(
                'h4',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/players/' + player.personId },
                  _react2.default.createElement(
                    'strong',
                    null,
                    player.firstName
                  ),
                  _react2.default.createElement(
                    'strong',
                    null,
                    '  '
                  ),
                  _react2.default.createElement(
                    'strong',
                    null,
                    player.lastName
                  )
                )
              )
            )
          )
        );
      });

      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'h3',
          { className: 'text-center' },
          'Click on the portrait. Select your favorite.'
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          playerNodes
        )
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.default = Home;

},{"../actions/HomeActions":3,"../stores/HomeStore":21,"react":"react","react-router":"react-router","underscore":"underscore"}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _NavbarStore = require('../stores/NavbarStore');

var _NavbarStore2 = _interopRequireDefault(_NavbarStore);

var _NavbarActions = require('../actions/NavbarActions');

var _NavbarActions2 = _interopRequireDefault(_NavbarActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));

    _this.state = _NavbarStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Navbar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _NavbarStore2.default.listen(this.onChange);
      _NavbarActions2.default.getPlayerCount();

      var socket = io.connect();

      socket.on('onlineUsers', function (data) {
        _NavbarActions2.default.updateOnlineUsers(data);
      });

      $(document).ajaxStart(function () {
        _NavbarActions2.default.updateAjaxAnimation('fadeIn');
      });

      $(document).ajaxComplete(function () {
        setTimeout(function () {
          _NavbarActions2.default.updateAjaxAnimation('fadeOut');
        }, 750);
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _NavbarStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();

      var searchQuery = this.state.searchQuery.trim();

      if (searchQuery) {
        _NavbarActions2.default.findPlayer({
          searchQuery: searchQuery,
          searchForm: this.refs.searchForm,
          history: this.props.history
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'nav',
        { className: 'navbar navbar-default navbar-static-top' },
        _react2.default.createElement(
          'div',
          { className: 'navbar-header' },
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#navbar' },
            _react2.default.createElement(
              'span',
              { className: 'sr-only' },
              'Toggle navigation'
            ),
            _react2.default.createElement('span', { className: 'icon-bar' }),
            _react2.default.createElement('span', { className: 'icon-bar' }),
            _react2.default.createElement('span', { className: 'icon-bar' })
          ),
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/', className: 'navbar-brand' },
            _react2.default.createElement(
              'span',
              { ref: 'triangles', className: 'triangles animated ' + this.state.ajaxAnimationClass },
              _react2.default.createElement('div', { className: 'tri invert' }),
              _react2.default.createElement('div', { className: 'tri invert' }),
              _react2.default.createElement('div', { className: 'tri' }),
              _react2.default.createElement('div', { className: 'tri invert' }),
              _react2.default.createElement('div', { className: 'tri invert' }),
              _react2.default.createElement('div', { className: 'tri' }),
              _react2.default.createElement('div', { className: 'tri invert' }),
              _react2.default.createElement('div', { className: 'tri' }),
              _react2.default.createElement('div', { className: 'tri invert' })
            ),
            'NTP',
            _react2.default.createElement(
              'span',
              { className: 'badge badge-up badge-danger' },
              this.state.onlineUsers
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { id: 'navbar', className: 'navbar-collapse collapse' },
          _react2.default.createElement(
            'form',
            { ref: 'searchForm', className: 'navbar-form navbar-left animated', onSubmit: this.handleSubmit.bind(this) },
            _react2.default.createElement(
              'div',
              { className: 'input-group' },
              _react2.default.createElement('input', { type: 'text', className: 'form-control', placeholder: this.state.totalPlayers + ' players', value: this.state.searchQuery, onChange: _NavbarActions2.default.updateSearchQuery }),
              _react2.default.createElement(
                'span',
                { className: 'input-group-btn' },
                _react2.default.createElement(
                  'button',
                  { className: 'btn btn-default', onClick: this.handleSubmit.bind(this) },
                  _react2.default.createElement('span', { className: 'glyphicon glyphicon-search' })
                )
              )
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'nav navbar-nav' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/' },
                'Home'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/stats' },
                'Stats'
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'dropdown' },
              _react2.default.createElement(
                'a',
                { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                'Top 100 ',
                _react2.default.createElement('span', { className: 'caret' })
              ),
              _react2.default.createElement(
                'ul',
                { className: 'dropdown-menu' },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/top' },
                    'Top Overall'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'dropdown-submenu' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/top/F' },
                    'Position'
                  ),
                  _react2.default.createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/top/F' },
                        'Forward'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/top/G' },
                        'Guard'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/top/C' },
                        'Center'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'dropdown-submenu' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/23' },
                    'Jersey number'
                  ),
                  _react2.default.createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/23' },
                        '23'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/3' },
                        '3'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/0' },
                        '0'
                      )
                    )
                  )
                ),
                _react2.default.createElement('li', { className: 'divider' }),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/shame' },
                    'Hall of Shame'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'dropdown' },
              _react2.default.createElement(
                'a',
                { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                'Native Players',
                _react2.default.createElement('span', { className: 'caret' })
              ),
              _react2.default.createElement(
                'ul',
                { className: 'dropdown-menu' },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/USA' },
                    'All'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'dropdown-submenu' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/USA' },
                    'Positions'
                  ),
                  _react2.default.createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/USA/F' },
                        'Forward'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/USA/G' },
                        'Guard'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/USA/C' },
                        'Center'
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'dropdown' },
              _react2.default.createElement(
                'a',
                { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                'Foreign players',
                _react2.default.createElement('span', { className: 'caret' })
              ),
              _react2.default.createElement(
                'ul',
                { className: 'dropdown-menu' },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/nUSA' },
                    'All'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'dropdown-submenu' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/nUSA' },
                    'Positions'
                  ),
                  _react2.default.createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/nUSA/F' },
                        'Center'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/nUSA/G' },
                        'Guard'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/nUSA/C' },
                        'Center'
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/add' },
                'Add'
              )
            )
          )
        )
      );
    }
  }]);

  return Navbar;
}(_react2.default.Component);

exports.default = Navbar;

},{"../actions/NavbarActions":4,"../stores/NavbarStore":22,"react":"react","react-router":"react-router"}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PlayerStore = require('../stores/PlayerStore');

var _PlayerStore2 = _interopRequireDefault(_PlayerStore);

var _PlayerActions = require('../actions/PlayerActions');

var _PlayerActions2 = _interopRequireDefault(_PlayerActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = function (_React$Component) {
    _inherits(Player, _React$Component);

    function Player(props) {
        _classCallCheck(this, Player);

        var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, props));

        _this.state = _PlayerStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(Player, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _PlayerStore2.default.listen(this.onChange);
            _PlayerActions2.default.getPlayer(this.props.params.id);

            $('.magnific-popup').magnificPopup({
                type: 'image',
                mainClass: 'mfp-zoom-in',
                closeOnContentClick: true,
                midClick: true,
                zoom: {
                    enabled: true,
                    duration: 300
                }
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _PlayerStore2.default.unlisten(this.onChange);
            $(document.body).removeClass();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            // Fetch new charachter data when URL path changes
            if (prevProps.params.id !== this.props.params.id) {
                _PlayerActions2.default.getPlayer(this.props.params.id);
            }
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'profile-img' },
                    _react2.default.createElement(
                        'a',
                        { className: 'magnific-popup', href: 'https://nba-players.herokuapp.com/players/' + this.state.lastName + '/' + this.state.firstName },
                        _react2.default.createElement('img', { src: 'https://nba-players.herokuapp.com/players/' + this.state.lastName + '/' + this.state.firstName })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'profile-info clearfix' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        _react2.default.createElement(
                            'strong',
                            null,
                            this.state.firstName,
                            '  ',
                            this.state.lastName
                        )
                    ),
                    _react2.default.createElement(
                        'h4',
                        { className: 'lead' },
                        'Team: ',
                        _react2.default.createElement(
                            'strong',
                            null,
                            this.state.teamId
                        )
                    ),
                    _react2.default.createElement(
                        'h4',
                        { className: 'lead' },
                        'Position: ',
                        _react2.default.createElement(
                            'strong',
                            null,
                            this.state.pos
                        )
                    ),
                    _react2.default.createElement(
                        'h4',
                        { className: 'lead' },
                        'Country: ',
                        _react2.default.createElement(
                            'strong',
                            null,
                            this.state.country
                        )
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'btn btn-transparent',
                            onClick: _PlayerActions2.default.report.bind(this, this.state.personId),
                            disabled: this.state.isReported },
                        this.state.isReported ? 'Reported' : 'Report Player'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'profile-stats clearfix' },
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'span',
                                { className: 'stats-number' },
                                this.state.winLossRatio
                            ),
                            'Winning Percentage'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'span',
                                { className: 'stats-number' },
                                this.state.wins
                            ),
                            ' Wins'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'span',
                                { className: 'stats-number' },
                                this.state.losses
                            ),
                            ' Losses'
                        )
                    )
                )
            );
        }
    }]);

    return Player;
}(_react2.default.Component);

exports.default = Player;

},{"../actions/PlayerActions":5,"../stores/PlayerStore":24,"react":"react"}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _underscore = require('underscore');

var _PlayerListStore = require('../stores/PlayerListStore');

var _PlayerListStore2 = _interopRequireDefault(_PlayerListStore);

var _PlayerListActions = require('../actions/PlayerListActions');

var _PlayerListActions2 = _interopRequireDefault(_PlayerListActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlayerList = function (_React$Component) {
    _inherits(PlayerList, _React$Component);

    function PlayerList(props) {
        _classCallCheck(this, PlayerList);

        var _this = _possibleConstructorReturn(this, (PlayerList.__proto__ || Object.getPrototypeOf(PlayerList)).call(this, props));

        _this.state = _PlayerListStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(PlayerList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _PlayerListStore2.default.listen(this.onChange);
            _PlayerListActions2.default.getPlayers(this.props.params);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _PlayerListStore2.default.unlisten(this.onChange);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (!(0, _underscore.isEqual)(prevProps.params, this.props.params)) {
                _PlayerListActions2.default.getPlayers(this.props.params);
            }
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'render',
        value: function render() {
            var playersList = this.state.players.map(function (player, index) {
                return _react2.default.createElement(
                    'div',
                    { key: player.personId, className: 'list-group-item animated fadeIn' },
                    _react2.default.createElement(
                        'div',
                        { className: 'media' },
                        _react2.default.createElement(
                            'span',
                            { className: 'position pull-left' },
                            index + 1
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'pull-left thumb-lg' },
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: '/players/' + player.personId },
                                _react2.default.createElement('img', { className: 'media-object', src: 'https://nba-players.herokuapp.com/players/' + player.lastName + '/' + player.firstName })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'media-body' },
                            _react2.default.createElement(
                                'h4',
                                { className: 'media-heading' },
                                _react2.default.createElement(
                                    _reactRouter.Link,
                                    { to: '/players/' + player.personId },
                                    player.firstName,
                                    ' ',
                                    player.lastName
                                )
                            ),
                            _react2.default.createElement(
                                'small',
                                null,
                                'Position: ',
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    player.pos
                                )
                            ),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'small',
                                null,
                                'Country: ',
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    player.country
                                )
                            ),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'small',
                                null,
                                'Wins: ',
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    player.wins
                                ),
                                ' Losses: ',
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    player.losses
                                )
                            )
                        )
                    )
                );
            });

            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'list-group' },
                    playersList
                )
            );
        }
    }]);

    return PlayerList;
}(_react2.default.Component);

exports.default = PlayerList;

},{"../actions/PlayerListActions":6,"../stores/PlayerListStore":23,"react":"react","react-router":"react-router","underscore":"underscore"}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _StatsStore = require('../stores/StatsStore');

var _StatsStore2 = _interopRequireDefault(_StatsStore);

var _StatsActions = require('../actions/StatsActions');

var _StatsActions2 = _interopRequireDefault(_StatsActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stats = function (_React$Component) {
    _inherits(Stats, _React$Component);

    function Stats(props) {
        _classCallCheck(this, Stats);

        var _this = _possibleConstructorReturn(this, (Stats.__proto__ || Object.getPrototypeOf(Stats)).call(this, props));

        _this.state = _StatsStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(Stats, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _StatsStore2.default.listen(this.onChange);
            _StatsActions2.default.getStats();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _StatsStore2.default.unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'panel panel-default' },
                    _react2.default.createElement(
                        'table',
                        { className: 'table table-striped' },
                        _react2.default.createElement(
                            'thead',
                            null,
                            _react2.default.createElement(
                                'tr',
                                null,
                                _react2.default.createElement(
                                    'th',
                                    { colSpan: '2' },
                                    'Stats'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'tbody',
                            null,
                            _react2.default.createElement(
                                'tr',
                                null,
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    'Leading position in Top 100'
                                ),
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    this.state.leadingPosition.pos,
                                    ' with ',
                                    this.state.leadingPosition.count,
                                    ' players'
                                )
                            ),
                            _react2.default.createElement(
                                'tr',
                                null,
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    'Forward'
                                ),
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    this.state.forwardCount
                                )
                            ),
                            _react2.default.createElement(
                                'tr',
                                null,
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    'Guard'
                                ),
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    this.state.guardCount
                                )
                            ),
                            _react2.default.createElement(
                                'tr',
                                null,
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    'Center'
                                ),
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    this.state.centerCount
                                )
                            ),
                            _react2.default.createElement(
                                'tr',
                                null,
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    'Total votes cast'
                                ),
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    this.state.totalVotes
                                )
                            ),
                            _react2.default.createElement(
                                'tr',
                                null,
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    'American players'
                                ),
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    this.state.usaCount
                                )
                            ),
                            _react2.default.createElement(
                                'tr',
                                null,
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    'Non-American players'
                                ),
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    this.state.nusaCount
                                )
                            ),
                            _react2.default.createElement(
                                'tr',
                                null,
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    'Total number of characters'
                                ),
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    this.state.totalCount
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Stats;
}(_react2.default.Component);

exports.default = Stats;

},{"../actions/StatsActions":7,"../stores/StatsStore":25,"react":"react"}],17:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _createBrowserHistory = require('history/lib/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _createBrowserHistory2.default)();

_reactDom2.default.render(_react2.default.createElement(
  _reactRouter2.default,
  { history: history },
  _routes2.default
), document.getElementById('app'));

},{"./routes":18,"history/lib/createBrowserHistory":34,"react":"react","react-dom":"react-dom","react-router":"react-router"}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _Home = require('./components/Home');

var _Home2 = _interopRequireDefault(_Home);

var _AddPlayer = require('./components/AddPlayer');

var _AddPlayer2 = _interopRequireDefault(_AddPlayer);

var _Player = require('./components/Player');

var _Player2 = _interopRequireDefault(_Player);

var _PlayerList = require('./components/PlayerList');

var _PlayerList2 = _interopRequireDefault(_PlayerList);

var _Stats = require('./components/Stats');

var _Stats2 = _interopRequireDefault(_Stats);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { component: _App2.default },
  _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Home2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/add', component: _AddPlayer2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/players/:id', component: _Player2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/shame', component: _PlayerList2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/stats', component: _Stats2.default }),
  _react2.default.createElement(
    _reactRouter.Route,
    { path: ':category', component: _PlayerList2.default },
    _react2.default.createElement(_reactRouter.Route, { path: ':pos', component: _PlayerList2.default })
  )
);

},{"./components/AddPlayer":9,"./components/App":10,"./components/Home":12,"./components/Player":14,"./components/PlayerList":15,"./components/Stats":16,"react":"react","react-router":"react-router"}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _AddPlayerActions = require('../actions/AddPlayerActions');

var _AddPlayerActions2 = _interopRequireDefault(_AddPlayerActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddPlayerStore = function () {
  function AddPlayerStore() {
    _classCallCheck(this, AddPlayerStore);

    this.bindActions(_AddPlayerActions2.default);
    this.name = '';
    this.pos = '';
    this.helpBlock = '';
    this.nameValidationState = '';
    this.posValidationState = '';
  }

  _createClass(AddPlayerStore, [{
    key: 'onAddPlayerSuccess',
    value: function onAddPlayerSuccess(successMessage) {
      this.nameValidationState = 'has-success';
      this.helpBlock = successMessage;
    }
  }, {
    key: 'onAddPlayerFail',
    value: function onAddPlayerFail(errorMessage) {
      this.nameValidationState = 'has-error';
      this.helpBlock = errorMessage;
    }
  }, {
    key: 'onUpdateName',
    value: function onUpdateName(event) {
      this.name = event.target.value;
      this.nameValidationState = '';
      this.helpBlock = '';
    }
  }, {
    key: 'onUpdateTeam',
    value: function onUpdateTeam(event) {
      this.pos = event.target.value;
      this.posValidationState = '';
    }
  }, {
    key: 'onInvalidName',
    value: function onInvalidName() {
      this.nameValidationState = 'has-error';
      this.helpBlock = 'Please enter a player name.';
    }
  }, {
    key: 'onInvalidTeam',
    value: function onInvalidTeam() {
      this.posValidationState = 'has-error';
    }
  }]);

  return AddPlayerStore;
}();

exports.default = _alt2.default.createStore(AddPlayerStore);

},{"../actions/AddPlayerActions":1,"../alt":8}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _FooterActions = require('../actions/FooterActions');

var _FooterActions2 = _interopRequireDefault(_FooterActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FooterStore = function () {
  function FooterStore() {
    _classCallCheck(this, FooterStore);

    this.bindActions(_FooterActions2.default);
    this.players = [];
  }

  _createClass(FooterStore, [{
    key: 'onGetTopPlayersSuccess',
    value: function onGetTopPlayersSuccess(data) {
      this.players = data.slice(0, 5);
    }
  }, {
    key: 'onGetTopPlayersFail',
    value: function onGetTopPlayersFail(jqXhr) {
      // Handle multiple response formats, fallback to HTTP status code number.
      toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
    }
  }]);

  return FooterStore;
}();

exports.default = _alt2.default.createStore(FooterStore);

},{"../actions/FooterActions":2,"../alt":8}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _HomeActions = require('../actions/HomeActions');

var _HomeActions2 = _interopRequireDefault(_HomeActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomeStore = function () {
    function HomeStore() {
        _classCallCheck(this, HomeStore);

        this.bindActions(_HomeActions2.default);
        this.players = [];
    }

    _createClass(HomeStore, [{
        key: 'onGetTwoPlayersSuccess',
        value: function onGetTwoPlayersSuccess(data) {
            console.log(data);
            this.players = data;
        }
    }, {
        key: 'onGetTwoPlayersFail',
        value: function onGetTwoPlayersFail(errorMessage) {
            toastr.error(errorMessage);
        }
    }, {
        key: 'onVoteFail',
        value: function onVoteFail(errorMessage) {
            toastr.error(errorMessage);
        }
    }]);

    return HomeStore;
}();

exports.default = _alt2.default.createStore(HomeStore);

},{"../actions/HomeActions":3,"../alt":8}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _NavbarActions = require('../actions/NavbarActions');

var _NavbarActions2 = _interopRequireDefault(_NavbarActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarStore = function () {
  function NavbarStore() {
    _classCallCheck(this, NavbarStore);

    this.bindActions(_NavbarActions2.default);
    this.totalPlayers = 0;
    this.onlineUsers = 0;
    this.searchQuery = '';
    this.ajaxAnimationClass = '';
  }

  _createClass(NavbarStore, [{
    key: 'onFindPlayerSuccess',
    value: function onFindPlayerSuccess(payload) {
      payload.history.pushState(null, '/players/' + payload.personId);
    }
  }, {
    key: 'onFindPlayerFail',
    value: function onFindPlayerFail(payload) {
      payload.searchForm.classList.add('shake');
      setTimeout(function () {
        payload.searchForm.classList.remove('shake');
      }, 1000);
    }
  }, {
    key: 'onUpdateOnlineUsers',
    value: function onUpdateOnlineUsers(data) {
      this.onlineUsers = data.onlineUsers;
    }
  }, {
    key: 'onUpdateAjaxAnimation',
    value: function onUpdateAjaxAnimation(className) {
      this.ajaxAnimationClass = className; //fadein or fadeout
    }
  }, {
    key: 'onUpdateSearchQuery',
    value: function onUpdateSearchQuery(event) {
      this.searchQuery = event.target.value;
    }
  }, {
    key: 'onGetPlayerCountSuccess',
    value: function onGetPlayerCountSuccess(data) {
      this.totalPlayers = data.count;
    }
  }, {
    key: 'onGetPlayerCountFail',
    value: function onGetPlayerCountFail(jqXhr) {
      toastr.error(jqXhr.responseJSON.message);
    }
  }]);

  return NavbarStore;
}();

exports.default = _alt2.default.createStore(NavbarStore);

},{"../actions/NavbarActions":4,"../alt":8}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _PlayerListActions = require('../actions/PlayerListActions');

var _PlayerListActions2 = _interopRequireDefault(_PlayerListActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PlayerListStore = function () {
    function PlayerListStore() {
        _classCallCheck(this, PlayerListStore);

        this.bindActions(_PlayerListActions2.default);
        this.players = [];
    }

    _createClass(PlayerListStore, [{
        key: 'onGetPlayersSuccess',
        value: function onGetPlayersSuccess(data) {
            this.players = data;
        }
    }, {
        key: 'onGetPlayersFail',
        value: function onGetPlayersFail(jqXhr) {
            toastr.error(jqXhr.responseJSON.message);
        }
    }]);

    return PlayerListStore;
}();

exports.default = _alt2.default.createStore(PlayerListStore);

},{"../actions/PlayerListActions":6,"../alt":8}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _underscore = require('underscore');

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _PlayerActions = require('../actions/PlayerActions');

var _PlayerActions2 = _interopRequireDefault(_PlayerActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PlayerStore = function () {
    function PlayerStore() {
        _classCallCheck(this, PlayerStore);

        this.bindActions(_PlayerActions2.default);
        this.personId = 0;
        this.firstName = 'TBD';
        this.lastName = 'TBD';
        this.pos = 'TBD';
        this.jersey = 'TBD';
        this.country = 'TBD';
        this.wins = 0;
        this.losses = 0;
        this.winLossRatio = 0;
        this.isReported = false;
    }

    _createClass(PlayerStore, [{
        key: 'onGetPlayerSuccess',
        value: function onGetPlayerSuccess(data) {
            (0, _underscore.assign)(this, data);
            $(document.body).attr('class', 'profile ' + 'player');
            var localData = localStorage.getItem('NTP') ? JSON.parse(localStorage.getItem('NTP')) : {};
            var reports = localData.reports || [];
            this.isReported = (0, _underscore.contains)(reports, this.personId);
            // If is NaN (from division by zero) then set it to "0"
            this.winLossRatio = (this.wins / (this.wins + this.losses) * 100 || 0).toFixed(1);
        }
    }, {
        key: 'onGetPlayerFail',
        value: function onGetPlayerFail(jqXhr) {
            toastr.error(jqXhr.responseJSON.message);
        }
    }, {
        key: 'onReportSuccess',
        value: function onReportSuccess() {
            this.isReported = true;
            var localData = localStorage.getItem('NTP') ? JSON.parse(localStorage.getItem('NTP')) : {};
            localData.reports = localData.reports || [];
            localData.reports.push(this.personId);
            localStorage.setItem('NTP', JSON.stringify(localData));
            toastr.warning('Player has been reported.');
        }
    }, {
        key: 'onReportFail',
        value: function onReportFail(jqXhr) {
            toastr.error(jqXhr.responseJSON.message);
        }
    }]);

    return PlayerStore;
}();

exports.default = _alt2.default.createStore(PlayerStore);

},{"../actions/PlayerActions":5,"../alt":8,"underscore":"underscore"}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _underscore = require('underscore');

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _StatsActions = require('../actions/StatsActions');

var _StatsActions2 = _interopRequireDefault(_StatsActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StatsStore = function () {
    function StatsStore() {
        _classCallCheck(this, StatsStore);

        this.bindActions(_StatsActions2.default);
        this.leadingPosition = { pos: 'Unknown', count: 0 };
        this.forwardCount = 0;
        this.guardCount = 0;
        this.centerCount = 0;
        this.totalVotes = 0;
        this.usaCount = 0;
        this.nusaCount = 0;
        this.totalCount = 0;
    }

    _createClass(StatsStore, [{
        key: 'onGetStatsSuccess',
        value: function onGetStatsSuccess(data) {
            (0, _underscore.assign)(this, data);
        }
    }, {
        key: 'onGetStatsFail',
        value: function onGetStatsFail(jqXhr) {
            toastr.error(jqXhr.responseJSON.message);
        }
    }]);

    return StatsStore;
}();

exports.default = _alt2.default.createStore(StatsStore);

},{"../actions/StatsActions":7,"../alt":8,"underscore":"underscore"}],26:[function(require,module,exports){
var pSlice = Array.prototype.slice;
var objectKeys = require('./lib/keys.js');
var isArguments = require('./lib/is_arguments.js');

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}

},{"./lib/is_arguments.js":27,"./lib/keys.js":28}],27:[function(require,module,exports){
var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};

},{}],28:[function(require,module,exports){
exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}

},{}],29:[function(require,module,exports){
/**
 * Indicates that navigation was caused by a call to history.push.
 */
'use strict';

exports.__esModule = true;
var PUSH = 'PUSH';

exports.PUSH = PUSH;
/**
 * Indicates that navigation was caused by a call to history.replace.
 */
var REPLACE = 'REPLACE';

exports.REPLACE = REPLACE;
/**
 * Indicates that navigation was caused by some other action such
 * as using a browser's back/forward buttons and/or manually manipulating
 * the URL in a browser's location bar. This is the default.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
 * for more information.
 */
var POP = 'POP';

exports.POP = POP;
exports['default'] = {
  PUSH: PUSH,
  REPLACE: REPLACE,
  POP: POP
};
},{}],30:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.loopAsync = loopAsync;

function loopAsync(turns, work, callback) {
  var currentTurn = 0;
  var isDone = false;

  function done() {
    isDone = true;
    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) return;

    if (currentTurn < turns) {
      work.call(this, currentTurn++, next, done);
    } else {
      done.apply(this, arguments);
    }
  }

  next();
}
},{}],31:[function(require,module,exports){
(function (process){
/*eslint-disable no-empty */
'use strict';

exports.__esModule = true;
exports.saveState = saveState;
exports.readState = readState;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var KeyPrefix = '@@History/';
var QuotaExceededError = 'QuotaExceededError';
var SecurityError = 'SecurityError';

function createKey(key) {
  return KeyPrefix + key;
}

function saveState(key, state) {
  try {
    window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

      return;
    }

    if (error.name === QuotaExceededError && window.sessionStorage.length === 0) {
      // Safari "private mode" throws QuotaExceededError.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

      return;
    }

    throw error;
  }
}

function readState(key) {
  var json = undefined;
  try {
    json = window.sessionStorage.getItem(createKey(key));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

      return null;
    }
  }

  if (json) {
    try {
      return JSON.parse(json);
    } catch (error) {
      // Ignore invalid JSON.
    }
  }

  return null;
}
}).call(this,require('_process'))

},{"_process":43,"warning":44}],32:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.getHashPath = getHashPath;
exports.replaceHashPath = replaceHashPath;
exports.getWindowPath = getWindowPath;
exports.go = go;
exports.getUserConfirmation = getUserConfirmation;
exports.supportsHistory = supportsHistory;
exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

function addEventListener(node, event, listener) {
  if (node.addEventListener) {
    node.addEventListener(event, listener, false);
  } else {
    node.attachEvent('on' + event, listener);
  }
}

function removeEventListener(node, event, listener) {
  if (node.removeEventListener) {
    node.removeEventListener(event, listener, false);
  } else {
    node.detachEvent('on' + event, listener);
  }
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  return window.location.href.split('#')[1] || '';
}

function replaceHashPath(path) {
  window.location.replace(window.location.pathname + window.location.search + '#' + path);
}

function getWindowPath() {
  return window.location.pathname + window.location.search + window.location.hash;
}

function go(n) {
  if (n) window.history.go(n);
}

function getUserConfirmation(message, callback) {
  callback(window.confirm(message));
}

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
 */

function supportsHistory() {
  var ua = navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  // FIXME: Work around our browser history not working correctly on Chrome
  // iOS: https://github.com/rackt/react-router/issues/2565
  if (ua.indexOf('CriOS') !== -1) {
    return false;
  }
  return window.history && 'pushState' in window.history;
}

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  var ua = navigator.userAgent;
  return ua.indexOf('Firefox') === -1;
}
},{}],33:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;
},{}],34:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _Actions = require('./Actions');

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _DOMStateStorage = require('./DOMStateStorage');

var _createDOMHistory = require('./createDOMHistory');

var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

/**
 * Creates and returns a history object that uses HTML5's history API
 * (pushState, replaceState, and the popstate event) to manage history.
 * This is the recommended method of managing history in browsers because
 * it provides the cleanest URLs.
 *
 * Note: In browsers that do not support the HTML5 history API full
 * page reloads will be used to preserve URLs.
 */
function createBrowserHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

  var forceRefresh = options.forceRefresh;

  var isSupported = _DOMUtils.supportsHistory();
  var useRefresh = !isSupported || forceRefresh;

  function getCurrentLocation(historyState) {
    historyState = historyState || window.history.state || {};

    var path = _DOMUtils.getWindowPath();
    var _historyState = historyState;
    var key = _historyState.key;

    var state = undefined;
    if (key) {
      state = _DOMStateStorage.readState(key);
    } else {
      state = null;
      key = history.createKey();

      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null, path);
    }

    var location = _parsePath2['default'](path);

    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
  }

  function startPopStateListener(_ref) {
    var transitionTo = _ref.transitionTo;

    function popStateListener(event) {
      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

      transitionTo(getCurrentLocation(event.state));
    }

    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

    return function () {
      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
    };
  }

  function finishTransition(location) {
    var basename = location.basename;
    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;
    var state = location.state;
    var action = location.action;
    var key = location.key;

    if (action === _Actions.POP) return; // Nothing to do.

    _DOMStateStorage.saveState(key, state);

    var path = (basename || '') + pathname + search + hash;
    var historyState = {
      key: key
    };

    if (action === _Actions.PUSH) {
      if (useRefresh) {
        window.location.href = path;
        return false; // Prevent location update.
      } else {
          window.history.pushState(historyState, null, path);
        }
    } else {
      // REPLACE
      if (useRefresh) {
        window.location.replace(path);
        return false; // Prevent location update.
      } else {
          window.history.replaceState(historyState, null, path);
        }
    }
  }

  var history = _createDOMHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: _DOMStateStorage.saveState
  }));

  var listenerCount = 0,
      stopPopStateListener = undefined;

  function listenBefore(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listenBefore(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  function listen(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    history.registerTransitionHook(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    history.unregisterTransitionHook(hook);

    if (--listenerCount === 0) stopPopStateListener();
  }

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen,
    registerTransitionHook: registerTransitionHook,
    unregisterTransitionHook: unregisterTransitionHook
  });
}

exports['default'] = createBrowserHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./Actions":29,"./DOMStateStorage":31,"./DOMUtils":32,"./ExecutionEnvironment":33,"./createDOMHistory":35,"./parsePath":40,"_process":43,"invariant":42}],35:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _createHistory = require('./createHistory');

var _createHistory2 = _interopRequireDefault(_createHistory);

function createDOMHistory(options) {
  var history = _createHistory2['default'](_extends({
    getUserConfirmation: _DOMUtils.getUserConfirmation
  }, options, {
    go: _DOMUtils.go
  }));

  function listen(listener) {
    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

    return history.listen(listener);
  }

  return _extends({}, history, {
    listen: listen
  });
}

exports['default'] = createDOMHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./DOMUtils":32,"./ExecutionEnvironment":33,"./createHistory":36,"_process":43,"invariant":42}],36:[function(require,module,exports){
//import warning from 'warning'
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _AsyncUtils = require('./AsyncUtils');

var _Actions = require('./Actions');

var _createLocation2 = require('./createLocation');

var _createLocation3 = _interopRequireDefault(_createLocation2);

var _runTransitionHook = require('./runTransitionHook');

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

var _deprecate = require('./deprecate');

var _deprecate2 = _interopRequireDefault(_deprecate);

function createRandomKey(length) {
  return Math.random().toString(36).substr(2, length);
}

function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search &&
  //a.action === b.action && // Different action !== location change.
  a.key === b.key && _deepEqual2['default'](a.state, b.state);
}

var DefaultKeyLength = 6;

function createHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var getCurrentLocation = options.getCurrentLocation;
  var finishTransition = options.finishTransition;
  var saveState = options.saveState;
  var go = options.go;
  var keyLength = options.keyLength;
  var getUserConfirmation = options.getUserConfirmation;

  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

  var transitionHooks = [];

  function listenBefore(hook) {
    transitionHooks.push(hook);

    return function () {
      transitionHooks = transitionHooks.filter(function (item) {
        return item !== hook;
      });
    };
  }

  var allKeys = [];
  var changeListeners = [];
  var location = undefined;

  function getCurrent() {
    if (pendingLocation && pendingLocation.action === _Actions.POP) {
      return allKeys.indexOf(pendingLocation.key);
    } else if (location) {
      return allKeys.indexOf(location.key);
    } else {
      return -1;
    }
  }

  function updateLocation(newLocation) {
    var current = getCurrent();

    location = newLocation;

    if (location.action === _Actions.PUSH) {
      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
    } else if (location.action === _Actions.REPLACE) {
      allKeys[current] = location.key;
    }

    changeListeners.forEach(function (listener) {
      listener(location);
    });
  }

  function listen(listener) {
    changeListeners.push(listener);

    if (location) {
      listener(location);
    } else {
      var _location = getCurrentLocation();
      allKeys = [_location.key];
      updateLocation(_location);
    }

    return function () {
      changeListeners = changeListeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function confirmTransitionTo(location, callback) {
    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
        if (result != null) {
          done(result);
        } else {
          next();
        }
      });
    }, function (message) {
      if (getUserConfirmation && typeof message === 'string') {
        getUserConfirmation(message, function (ok) {
          callback(ok !== false);
        });
      } else {
        callback(message !== false);
      }
    });
  }

  var pendingLocation = undefined;

  function transitionTo(nextLocation) {
    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

    pendingLocation = nextLocation;

    confirmTransitionTo(nextLocation, function (ok) {
      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

      if (ok) {
        // treat PUSH to current path like REPLACE to be consistent with browsers
        if (nextLocation.action === _Actions.PUSH) {
          var prevPath = createPath(location);
          var nextPath = createPath(nextLocation);

          if (nextPath === prevPath) nextLocation.action = _Actions.REPLACE;
        }

        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
      } else if (location && nextLocation.action === _Actions.POP) {
        var prevIndex = allKeys.indexOf(location.key);
        var nextIndex = allKeys.indexOf(nextLocation.key);

        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
      }
    });
  }

  function push(location) {
    transitionTo(createLocation(location, _Actions.PUSH, createKey()));
  }

  function replace(location) {
    transitionTo(createLocation(location, _Actions.REPLACE, createKey()));
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function createKey() {
    return createRandomKey(keyLength);
  }

  function createPath(location) {
    if (location == null || typeof location === 'string') return location;

    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;

    var result = pathname;

    if (search) result += search;

    if (hash) result += hash;

    return result;
  }

  function createHref(location) {
    return createPath(location);
  }

  function createLocation(location, action) {
    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];

    if (typeof action === 'object') {
      //warning(
      //  false,
      //  'The state (2nd) argument to history.createLocation is deprecated; use a ' +
      //  'location descriptor instead'
      //)

      if (typeof location === 'string') location = _parsePath2['default'](location);

      location = _extends({}, location, { state: action });

      action = key;
      key = arguments[3] || createKey();
    }

    return _createLocation3['default'](location, action, key);
  }

  // deprecated
  function setState(state) {
    if (location) {
      updateLocationState(location, state);
      updateLocation(location);
    } else {
      updateLocationState(getCurrentLocation(), state);
    }
  }

  function updateLocationState(location, state) {
    location.state = _extends({}, location.state, state);
    saveState(location.key, location.state);
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    transitionHooks = transitionHooks.filter(function (item) {
      return item !== hook;
    });
  }

  // deprecated
  function pushState(state, path) {
    if (typeof path === 'string') path = _parsePath2['default'](path);

    push(_extends({ state: state }, path));
  }

  // deprecated
  function replaceState(state, path) {
    if (typeof path === 'string') path = _parsePath2['default'](path);

    replace(_extends({ state: state }, path));
  }

  return {
    listenBefore: listenBefore,
    listen: listen,
    transitionTo: transitionTo,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    createKey: createKey,
    createPath: createPath,
    createHref: createHref,
    createLocation: createLocation,

    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
    pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
    replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
  };
}

exports['default'] = createHistory;
module.exports = exports['default'];
},{"./Actions":29,"./AsyncUtils":30,"./createLocation":37,"./deprecate":38,"./parsePath":40,"./runTransitionHook":41,"deep-equal":26}],37:[function(require,module,exports){
//import warning from 'warning'
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Actions = require('./Actions');

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

function createLocation() {
  var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

  var _fourthArg = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

  if (typeof location === 'string') location = _parsePath2['default'](location);

  if (typeof action === 'object') {
    //warning(
    //  false,
    //  'The state (2nd) argument to createLocation is deprecated; use a ' +
    //  'location descriptor instead'
    //)

    location = _extends({}, location, { state: action });

    action = key || _Actions.POP;
    key = _fourthArg;
  }

  var pathname = location.pathname || '/';
  var search = location.search || '';
  var hash = location.hash || '';
  var state = location.state || null;

  return {
    pathname: pathname,
    search: search,
    hash: hash,
    state: state,
    action: action,
    key: key
  };
}

exports['default'] = createLocation;
module.exports = exports['default'];
},{"./Actions":29,"./parsePath":40}],38:[function(require,module,exports){
//import warning from 'warning'

"use strict";

exports.__esModule = true;
function deprecate(fn) {
  return fn;
  //return function () {
  //  warning(false, '[history] ' + message)
  //  return fn.apply(this, arguments)
  //}
}

exports["default"] = deprecate;
module.exports = exports["default"];
},{}],39:[function(require,module,exports){
"use strict";

exports.__esModule = true;
function extractPath(string) {
  var match = string.match(/^https?:\/\/[^\/]*/);

  if (match == null) return string;

  return string.substring(match[0].length);
}

exports["default"] = extractPath;
module.exports = exports["default"];
},{}],40:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _extractPath = require('./extractPath');

var _extractPath2 = _interopRequireDefault(_extractPath);

function parsePath(path) {
  var pathname = _extractPath2['default'](path);
  var search = '';
  var hash = '';

  process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substring(hashIndex);
    pathname = pathname.substring(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substring(searchIndex);
    pathname = pathname.substring(0, searchIndex);
  }

  if (pathname === '') pathname = '/';

  return {
    pathname: pathname,
    search: search,
    hash: hash
  };
}

exports['default'] = parsePath;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./extractPath":39,"_process":43,"warning":44}],41:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function runTransitionHook(hook, location, callback) {
  var result = hook(location, callback);

  if (hook.length < 2) {
    // Assume the hook runs synchronously and automatically
    // call the callback with the return value.
    callback(result);
  } else {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
  }
}

exports['default'] = runTransitionHook;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"_process":43,"warning":44}],42:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

}).call(this,require('_process'))

},{"_process":43}],43:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],44:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))

},{"_process":43}]},{},[17])

//# sourceMappingURL=bundle.js.map
