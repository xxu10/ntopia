import alt from '../alt';

class PlayerListActions {
    constructor() {
        this.generateActions(
            'getPlayersSuccess',
            'getPlayersFail'
        );
    }

    getPlayers(payload) {
        let url = '/api/players/top';
        let params = {
            pos: payload.pos
        };

        if (payload.category === 'USA') {
            params.country = 'USA';
        } else if (payload.category === 'nUSA') {
            params.country = 'Canada';
        } else if (payload.category === '23') {
            params.jersey = '23';
        } else if (payload.category === '3') {
            params.jersey = '3';
        } else if (payload.category === '0') {
            params.jersey = '0';
        }

        if (payload.category === 'shame') {
            url = '/api/players/shame';
        }

        $.ajax({ url: url, data: params })
            .done((data) => {
                this.actions.getPlayersSuccess(data);
            })
            .fail((jqXhr) => {
                this.actions.getPlayersFail(jqXhr);
            });
    }
}

export default alt.createActions(PlayerListActions);