import alt from '../alt';

class AddPlayerActions {
  constructor() {
    this.generateActions(
      'addPlayerSuccess',
      'addPlayerFail',
      'updateName',
      'updatePos',
      'invalidName',
      'invalidPos'
    );
  }

  addPlayer(name, pos) {
    $.ajax({
      type: 'POST',
      url: '/api/players',
      data: { name: name, pos: pos }
    })
      .done((data) => {
        this.actions.addPlayerSuccess(data.message);
      })
      .fail((jqXhr) => {
        this.actions.addPlayerFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(AddPlayerActions);
