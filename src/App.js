import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Home'
import Talent from './Talent'

import './init-globals'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/talent" component={Talent} />
        </Switch>
      </Router>
    )
    // <Route path="/about" component={About} />
  }
}

export default App
