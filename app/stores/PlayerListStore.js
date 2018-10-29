import alt from '../alt';
import PlayerListActions from '../actions/PlayerListActions';

class PlayerListStore {
    constructor() {
        this.bindActions(PlayerListActions);
        this.players = [];
    }

    onGetPlayersSuccess(data) {
        this.players = data;
    }

    onGetPlayersFail(jqXhr) {
        toastr.error(jqXhr.responseJSON.message);
    }
}

export default alt.createStore(PlayerListStore);