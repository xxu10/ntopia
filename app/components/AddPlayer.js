import React from 'react';
import AddPlayerStore from '../stores/AddPlayerStore';
import AddPlayerActions from '../actions/AddPlayerActions';

class AddPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = AddPlayerStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    AddPlayerStore.listen(this.onChange);
  }

  componentWillUnmount() {
    AddPlayerStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();

    var name = this.state.name.trim();
    var pos = this.state.pos.trim();

    if (!name) {
      AddPlayerActions.invalidName();
      this.refs.nameTextField.getDOMNode().focus();
    }
    if (!team) {
      AddPlayerActions.invalidPos();
      this.refs.posTextField.getDOMNode().focus();
    }
    if (name && pos) {
      AddPlayerActions.addPlayer(name,pos);
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='row flipInX animated'>
          <div className='col-sm-8'>
            <div className='panel panel-default'>
              <div className='panel-heading'>Add Character</div>
              <div className='panel-body'>
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <div className={'form-group ' + this.state.nameValidationState}>
                    <label className='control-label'>Player Name</label>
                    <input type='text' className='form-control' ref='nameTextField' value={this.state.name}
                           onChange={AddPlayerActions.updateName} autoFocus/>
                    <span className='help-block'>{this.state.helpBlock}</span>
                  </div>
                  <div className={'form-group ' + this.state.posValidationState}>
                      <label className='control-label'>Player Position</label>
                      <input type='text' className='form-control' ref='posTextField' value={this.state.pos}
                             onChange={AddPlayerActions.updatePos} autoFocus/>
                      <span className='help-block'>{this.state.helpBlock}</span>
                  </div>
                  <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddPlayer;
