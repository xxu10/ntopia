import React from 'react';
import StatsStore from '../stores/StatsStore'
import StatsActions from '../actions/StatsActions';

class Stats extends React.Component {
    constructor(props) {
        super(props);
        this.state = StatsStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        StatsStore.listen(this.onChange);
        StatsActions.getStats();
    }

    componentWillUnmount() {
        StatsStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        return (
            <div className='container'>
                <div className='panel panel-default'>
                    <table className='table table-striped'>
                        <thead>
                        <tr>
                            <th colSpan='2'>Stats</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Leading position in Top 100</td>
                            <td>{this.state.leadingPosition.pos} with {this.state.leadingPosition.count} players</td>
                        </tr>
                        <tr>
                            <td>Forward</td>
                            <td>{this.state.forwardCount}</td>
                        </tr>
                        <tr>
                            <td>Guard</td>
                            <td>{this.state.guardCount}</td>
                        </tr>
                        <tr>
                            <td>Center</td>
                            <td>{this.state.centerCount}</td>
                        </tr>
                        <tr>
                            <td>Total votes cast</td>
                            <td>{this.state.totalVotes}</td>
                        </tr>
                        <tr>
                            <td>American players</td>
                            <td>{this.state.usaCount}</td>
                        </tr>
                        <tr>
                            <td>Non-American players</td>
                            <td>{this.state.nusaCount}</td>
                        </tr>
                        <tr>
                            <td>Total number of characters</td>
                            <td>{this.state.totalCount}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Stats;