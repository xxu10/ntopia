import {assign} from 'underscore';
import alt from '../alt';
import StatsActions from '../actions/StatsActions';

class StatsStore {
    constructor() {
        this.bindActions(StatsActions);
        this.leadingPosition= { pos: 'Unknown', count: 0 };
        this.forwardCount = 0;
        this.guardCount = 0;
        this.centerCount = 0;
        this.totalVotes = 0;
        this.usaCount = 0;
        this.nusaCount = 0;
        this.totalCount = 0;
    }

    onGetStatsSuccess(data) {
        assign(this, data);
    }

    onGetStatsFail(jqXhr) {
        toastr.error(jqXhr.responseJSON.message);
    }
}

export default alt.createStore(StatsStore);