import React from 'react';
import {Link} from 'react-router';
import FooterStore from '../stores/FooterStore'
import FooterActions from '../actions/FooterActions';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = FooterStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    FooterStore.listen(this.onChange);
    FooterActions.getTopPlayers();
  }

  componentWillUnmount() {
    FooterStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    let leaderboardplayers = this.state.players.map((player) => {
      return (
        <li key={player.personId}>
          <Link to={'/players/' + player.personId}>
            <img className='thumb-md' src={'https://nba-players.herokuapp.com/players/' + player.lastName + '/'+player.firstName} />
          </Link>
        </li>
      )
    });

    return (
      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-5'>
              <h3 className='lead'><strong>Information</strong> and <strong>Copyright</strong></h3>
              <p>Powered by <strong>Node.js</strong>, <strong>MongoDB</strong> and <strong>React</strong> with Flux architecture and server-side rendering.</p>
              <p>You may view the <a href='https://github.com/xxu10/ntopia'>Source Code</a> behind this project on GitHub.</p>
              <p>© 2018 Sheen </p>
            </div>
            <div className='col-sm-7 hidden-xs'>
              <h3 className='lead'><strong>Leaderboard</strong> Top 5 Players</h3>
              <ul className='list-inline'>
                {leaderboardplayers}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
