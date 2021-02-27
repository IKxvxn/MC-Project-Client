import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import HomeLayout from './components/home/homeLayout'
import LoginLayout from './components/login/loginLayout'

class App extends Component {
  render() {
    return (
      <div className="App" style={{ minWidth:"15rem"}}>
        <Switch>
          <Route exact path='/' render={() => <LoginLayout />} />
          <Route path='/inicio' render={() => <HomeLayout />} />
          <Redirect from='*' to='/' />
        </Switch>
      </div>
    );
  }
}

export default App;
