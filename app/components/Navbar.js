import React from 'react';
import {Link} from 'react-router';
import NavbarStore from '../stores/NavbarStore';
import NavbarActions from '../actions/NavbarActions';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = NavbarStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    NavbarStore.listen(this.onChange);
    NavbarActions.getPlayerCount();

    let socket = io.connect();

    socket.on('onlineUsers', (data) => {
      NavbarActions.updateOnlineUsers(data);
    });

    $(document).ajaxStart(() => {
      NavbarActions.updateAjaxAnimation('fadeIn');
    });

    $(document).ajaxComplete(() => {
      setTimeout(() => {
        NavbarActions.updateAjaxAnimation('fadeOut');
      }, 750);
    });
  }

  componentWillUnmount() {
    NavbarStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();

    let searchQuery = this.state.searchQuery.trim();

    if (searchQuery) {
      NavbarActions.findPlayer({
        searchQuery: searchQuery,
        searchForm: this.refs.searchForm,
        history: this.props.history
      });
    }
  }

  render() {
    return (
      <nav className='navbar navbar-default navbar-static-top'>
        <div className='navbar-header'>
          <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar'>
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
          <Link to='/' className='navbar-brand'>
            <span ref='triangles' className={'triangles animated ' + this.state.ajaxAnimationClass}>
              <div className='tri invert'></div>
              <div className='tri invert'></div>
              <div className='tri'></div>
              <div className='tri invert'></div>
              <div className='tri invert'></div>
              <div className='tri'></div>
              <div className='tri invert'></div>
              <div className='tri'></div>
              <div className='tri invert'></div>
            </span>
            NTP
            <span className='badge badge-up badge-danger'>{this.state.onlineUsers}</span>
          </Link>
        </div>
        <div id='navbar' className='navbar-collapse collapse'>
          <form ref='searchForm' className='navbar-form navbar-left animated' onSubmit={this.handleSubmit.bind(this)}>
            <div className='input-group'>
              <input type='text' className='form-control' placeholder={this.state.totalPlayers + ' players'} value={this.state.searchQuery} onChange={NavbarActions.updateSearchQuery} />
              <span className='input-group-btn'>
                <button className='btn btn-default' onClick={this.handleSubmit.bind(this)}><span className='glyphicon glyphicon-search'></span></button>
              </span>
            </div>
          </form>
          <ul className='nav navbar-nav'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/stats'>Stats</Link></li>
            <li className='dropdown'>
              <a href='#' className='dropdown-toggle' data-toggle='dropdown'>Top 100 <span className='caret'></span></a>
              <ul className='dropdown-menu'>
                <li><Link to='/top'>Top Overall</Link></li>
                <li className='dropdown-submenu'>
                  <Link to='/top/F'>Position</Link>
                  <ul className='dropdown-menu'>
                    <li><Link to='/top/F'>Forward</Link></li>
                    <li><Link to='/top/G'>Guard</Link></li>
                    <li><Link to='/top/C'>Center</Link></li>
                  </ul>
                </li>
                <li className='dropdown-submenu'>
                  <Link to='/23'>Jersey number</Link>
                  <ul className='dropdown-menu'>
                    <li><Link to='/23'>23</Link></li>
                    <li><Link to='/3'>3</Link></li>
                    <li><Link to='/0'>0</Link></li>
                  </ul>
                </li>
                <li className='divider'></li>
                <li><Link to='/shame'>Hall of Shame</Link></li>
              </ul>
            </li>
            <li className='dropdown'>
              <a href='#' className='dropdown-toggle' data-toggle='dropdown'>Native Players<span className='caret'></span></a>
              <ul className='dropdown-menu'>
                <li><Link to='/USA'>All</Link></li>
                <li className='dropdown-submenu'>
                  <Link to='/USA'>Positions</Link>
                  <ul className='dropdown-menu'>
                    <li><Link to='/USA/F'>Forward</Link></li>
                    <li><Link to='/USA/G'>Guard</Link></li>
                    <li><Link to='/USA/C'>Center</Link></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className='dropdown'>
              <a href='#' className='dropdown-toggle' data-toggle='dropdown'>Foreign players<span className='caret'></span></a>
              <ul className='dropdown-menu'>
                <li><Link to='/nUSA'>All</Link></li>
                <li className='dropdown-submenu'>
                  <Link to='/nUSA'>Positions</Link>
                  <ul className='dropdown-menu'>
                    <li><Link to='/nUSA/F'>Center</Link></li>
                    <li><Link to='/nUSA/G'>Guard</Link></li>
                    <li><Link to='/nUSA/C'>Center</Link></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><Link to='/add'>Add</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
