import React from 'react';

import Rotas from './rotas'
import Dashboard from '../components/dashboard'


class App extends React.Component {

  render() {
    return (
      <>
        <Dashboard />
        <div className="container">
          <Rotas />
        </div>
      </>
    )
  }
}

export default App