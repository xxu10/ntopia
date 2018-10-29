import alt from '../alt';

class FooterActions {
  constructor() {
    this.generateActions(
      'getTopPlayersSuccess',
      'getTopPlayersFail'
    );
  }

  getTopPlayers() {
    $.ajax({ url: '/api/players/top' })
      .done((data) => {
        this.actions.getTopPlayersSuccess(data)
      })
      .fail((jqXhr) => {
        this.actions.getTopPlayersFail(jqXhr)
      });
  }
}

export default alt.createActions(FooterActions);
