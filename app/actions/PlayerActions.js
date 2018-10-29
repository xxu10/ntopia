import alt from '../alt';

class PlayerActions {
    constructor() {
        this.generateActions(
            'reportSuccess',
            'reportFail',
            'getPlayerSuccess',
            'getPlayerFail'
        );
    }

    getPlayer(personId) {
        $.ajax({ url: '/api/players/' + personId })
            .done((data) => {
                this.actions.getPlayerSuccess(data);
            })
            .fail((jqXhr) => {
                this.actions.getPlayerFail(jqXhr);
            });
    }

    report(personId) {
        $.ajax({
            type: 'POST',
            url: '/api/report',
            data: { personId: personId }
        })
            .done(() => {
                this.actions.reportSuccess();
            })
            .fail((jqXhr) => {
                this.actions.reportFail(jqXhr);
            });
    }
}

export default alt.createActions(PlayerActions);