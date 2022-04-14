import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import Home from '../pages/home';

export default class Navigation extends Component {
  render() {
    return (
      <div style={{ paddingBottom: '120px' }}>
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    );
  }
}
