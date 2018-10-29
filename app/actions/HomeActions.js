import alt from '../alt';

class HomeActions {
    constructor() {
        this.generateActions(
            'getTwoPlayersSuccess',
            'getTwoPlayersFail',
            'voteFail'
        );
    }

    getTwoPlayers() {
        $.ajax({ url: '/api/players' })
            .done(data => {
                this.actions.getTwoPlayersSuccess(data);
            })
            .fail(jqXhr => {
                this.actions.getTwoPlayersFail(jqXhr.responseJSON.message);
            });
    }

    vote(winner, loser) {
        $.ajax({
            type: 'PUT',
            url: '/api/players' ,
            data: { winner: winner, loser: loser }
        })
            .done(() => {
                this.actions.getTwoPlayers();
            })
            .fail(jqXhr => {
                this.actions.voteFail(jqXhr.responseJSON.message);
            });
    }
}

export default alt.createActions(HomeActions);