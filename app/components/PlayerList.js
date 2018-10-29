import React from 'react';
import {Link} from 'react-router';
import {isEqual} from 'underscore';
import PlayerListStore from '../stores/PlayerListStore';
import PlayerListActions from '../actions/PlayerListActions';

class PlayerList extends React.Component {
    constructor(props) {
        super(props);
        this.state = PlayerListStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        PlayerListStore.listen(this.onChange);
        PlayerListActions.getPlayers(this.props.params);
    }

    componentWillUnmount() {
        PlayerListStore.unlisten(this.onChange);
    }

    componentDidUpdate(prevProps) {
        if (!isEqual(prevProps.params, this.props.params)) {
            PlayerListActions.getPlayers(this.props.params);
        }
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let playersList = this.state.players.map((player, index) => {
            return (
                <div key={player.personId} className='list-group-item animated fadeIn'>
                    <div className='media'>
                        <span className='position pull-left'>{index + 1}</span>
                        <div className='pull-left thumb-lg'>
                            <Link to={'/players/' + player.personId}>
                                <img className='media-object' src={'https://nba-players.herokuapp.com/players/' + player.lastName + '/'+player.firstName} />
                            </Link>
                        </div>
                        <div className='media-body'>
                            <h4 className='media-heading'>
                                <Link to={'/players/' + player.personId}>{player.firstName} {player.lastName}</Link>
                            </h4>
                            <small>Position: <strong>{player.pos}</strong></small>
                            <br />
                            <small>Country: <strong>{player.country}</strong></small>
                            <br />
                            <small>Wins: <strong>{player.wins}</strong> Losses: <strong>{player.losses}</strong></small>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div className='container'>
                <div className='list-group'>
                    {playersList}
                </div>
            </div>
        );
    }
}

export default PlayerList;