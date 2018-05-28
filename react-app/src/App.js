import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Board from './Containers/board/board'
import Login from './Containers/login/login'
import Scores from './Containers/scores/scores'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch> //only one route displayed 
          <Route path="/login" component={Login}/>
          <Route path="/" component={Board}/>
          <Route path="/scores" component={Scores}/>
        </Switch>
      </div>
    );
  }
}

export default App;
