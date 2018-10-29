import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import AddPlayer from './components/AddPlayer';
import Player from './components/Player';
import PlayerList from './components/PlayerList';
import Stats from './components/Stats';

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/add' component={AddPlayer}/>
      <Route path='/players/:id' component={Player} />
      <Route path='/shame' component={PlayerList} />
      <Route path='/stats' component={Stats} />
      <Route path=':category' component={PlayerList}>
          <Route path=':pos' component={PlayerList} />
      </Route>
  </Route>
);
