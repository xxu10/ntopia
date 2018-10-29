import React from 'react';
import PlayerStore from '../stores/PlayerStore';
import PlayerActions from '../actions/PlayerActions'

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = PlayerStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        PlayerStore.listen(this.onChange);
        PlayerActions.getPlayer(this.props.params.id);

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

    componentWillUnmount() {
        PlayerStore.unlisten(this.onChange);
        $(document.body).removeClass();
    }

    componentDidUpdate(prevProps) {
        // Fetch new charachter data when URL path changes
        if (prevProps.params.id !== this.props.params.id) {
            PlayerActions.getPlayer(this.props.params.id);
        }
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        return (
            <div className='container'>
                <div className='profile-img'>
                    <a className='magnific-popup' href={'https://nba-players.herokuapp.com/players/' + this.state.lastName + '/'+this.state.firstName}>
                        <img src={'https://nba-players.herokuapp.com/players/' + this.state.lastName + '/'+this.state.firstName} />
                    </a>
                </div>
                <div className='profile-info clearfix'>
                    <h2><strong>{this.state.firstName}  {this.state.lastName}</strong></h2>
                    <h4 className='lead'>Team: <strong>{this.state.teamId}</strong></h4>
                    <h4 className='lead'>Position: <strong>{this.state.pos}</strong></h4>
                    <h4 className='lead'>Country: <strong>{this.state.country}</strong></h4>
                    <button className='btn btn-transparent'
                            onClick={PlayerActions.report.bind(this, this.state.personId)}
                            disabled={this.state.isReported}>
                        {this.state.isReported ? 'Reported' : 'Report Player'}
                    </button>
                </div>
                <div className='profile-stats clearfix'>
                    <ul>
                        <li><span className='stats-number'>{this.state.winLossRatio}</span>Winning Percentage</li>
                        <li><span className='stats-number'>{this.state.wins}</span> Wins</li>
                        <li><span className='stats-number'>{this.state.losses}</span> Losses</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Player;