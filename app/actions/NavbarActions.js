import alt from '../alt';
import {assign} from 'underscore';

class NavbarActions {
  constructor() {
    this.generateActions(
      'updateOnlineUsers',
      'updateAjaxAnimation',
      'updateSearchQuery',
      'getPlayerCountSuccess',
      'getPlayerCountFail',
      'findPlayerSuccess',
      'findPlayerFail'
    );
  }

  findPlayer(payload) {
    $.ajax({
      url: '/api/players/search',
      data: { name: payload.searchQuery }
    })
      .done((data) => {
        assign(payload, data);
        this.actions.findPlayerSuccess(payload);
      })
      .fail(() => {
        this.actions.findPlayerFail(payload);
      });
  }

  getPlayerCount() {
    $.ajax({ url: '/api/players/count' })
      .done(data => {
        this.actions.getPlayerCountSuccess(data)
      })
      .fail((jqXhr) => {
        this.actions.getPlayerCountFail(jqXhr)
      });
  }
}

export default alt.createActions(NavbarActions);
