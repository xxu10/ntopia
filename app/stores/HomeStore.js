import alt from '../alt';
import HomeActions from '../actions/HomeActions';

class HomeStore {
    constructor() {
        this.bindActions(HomeActions);
        this.players = [];
    }

    onGetTwoPlayersSuccess(data) {
        console.log(data);
        this.players = data;
    }

    onGetTwoPlayersFail(errorMessage) {
        toastr.error(errorMessage);
    }

    onVoteFail(errorMessage) {
        toastr.error(errorMessage);
    }
}

export default alt.createStore(HomeStore);