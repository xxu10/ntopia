import {assign, contains} from 'underscore';
import alt from '../alt';
import PlayerActions from '../actions/PlayerActions';

class PlayerStore {
    constructor() {
        this.bindActions(PlayerActions);
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

    onGetPlayerSuccess(data) {
        assign(this, data);
        $(document.body).attr('class', 'profile ' + 'player');
        let localData = localStorage.getItem('NTP') ? JSON.parse(localStorage.getItem('NTP')) : {};
        let reports = localData.reports || [];
        this.isReported = contains(reports, this.personId);
        // If is NaN (from division by zero) then set it to "0"
        this.winLossRatio = ((this.wins / (this.wins + this.losses) * 100) || 0).toFixed(1);
    }

    onGetPlayerFail(jqXhr) {
        toastr.error(jqXhr.responseJSON.message);
    }

    onReportSuccess() {
        this.isReported = true;
        let localData = localStorage.getItem('NTP') ? JSON.parse(localStorage.getItem('NTP')) : {};
        localData.reports = localData.reports || [];
        localData.reports.push(this.personId);
        localStorage.setItem('NTP', JSON.stringify(localData));
        toastr.warning('Player has been reported.');
    }

    onReportFail(jqXhr) {
        toastr.error(jqXhr.responseJSON.message);
    }
}

export default alt.createStore(PlayerStore);