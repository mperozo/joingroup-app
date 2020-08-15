import React from 'react';

import Dashboard from '../components/dashboard'

import Login from '../views/usuario/login'
import Register from '../views/usuario/register'

import { Route, Switch, HashRouter, Redirect } from 'react-router-dom'

import AuthService from './services/authService'

class App extends React.Component {

  state = {
    currentUser: undefined
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();
    if (user) {
      this.setState({ currentUser: user });
    }
  }

  render() {
    const { currentUser } = this.state;

    return (
      <>
        <HashRouter>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </HashRouter>

        {currentUser ? (
          <Dashboard />
        ) : (
            <Redirect to="#/login" />
          )}
      </>
    )
  }
}

export default App