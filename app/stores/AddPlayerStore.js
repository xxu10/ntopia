import alt from '../alt';
import AddPlayerActions from '../actions/AddPlayerActions';

class AddPlayerStore {
  constructor() {
    this.bindActions(AddPlayerActions);
    this.name = '';
    this.pos = '';
    this.helpBlock = '';
    this.nameValidationState = '';
    this.posValidationState = '';
  }

  onAddPlayerSuccess(successMessage) {
    this.nameValidationState = 'has-success';
    this.helpBlock = successMessage;
  }

  onAddPlayerFail(errorMessage) {
    this.nameValidationState = 'has-error';
    this.helpBlock = errorMessage;
  }

  onUpdateName(event) {
    this.name = event.target.value;
    this.nameValidationState = '';
    this.helpBlock = '';
  }

  onUpdateTeam(event) {
    this.pos= event.target.value;
    this.posValidationState = '';
  }

  onInvalidName() {
    this.nameValidationState = 'has-error';
    this.helpBlock = 'Please enter a player name.';
  }

  onInvalidTeam() {
    this.posValidationState = 'has-error';
  }
}

export default alt.createStore(AddPlayerStore);
