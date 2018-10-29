import React from 'react';
import {Link} from 'react-router';
import HomeStore from '../stores/HomeStore'
import HomeActions from '../actions/HomeActions';
import {first, without, findWhere} from 'underscore';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = HomeStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    HomeStore.listen(this.onChange);
    HomeActions.getTwoPlayers();
  }

  componentWillUnmount() {
    HomeStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleClick(player) {
    var winner = player.personId;
    var loser = first(without(this.state.players, findWhere(this.state.players, { personId: winner }))).personId;
    HomeActions.vote(winner, loser);
  }

  render() {
    var playerNodes = this.state.players.map((player, index) => {
      return (
        <div key={player.personId} className={index === 0 ? 'col-xs-6 col-sm-6 col-md-5 col-md-offset-1' : 'col-xs-6 col-sm-6 col-md-5'}>
          <div className='thumbnail fadeInUp animated'>
            <img onClick={this.handleClick.bind(this, player)} src={'https://nba-players.herokuapp.com/players/' + player.lastName + '/'+player.firstName}/>
            <div className='caption text-center'>
              <ul className='list-inline'>
                <li><strong>Team:</strong> {player.teamId}</li>
                <li><strong>Position:</strong> {player.pos}</li>
                  <li><strong>Country:</strong> {player.country}</li>
              </ul>
              <h4>
                  <Link to={'/players/' + player.personId}><strong>{player.firstName}</strong><strong>  </strong><strong>{player.lastName}</strong></Link>
              </h4>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className='container'>
        <h3 className='text-center'>Click on the portrait. Select your favorite.</h3>
        <div className='row'>
          {playerNodes}
        </div>
      </div>
    );
  }
}

export default Home;
