import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home'

global.character = {
  attributes: {
    bravery: 10,
    intelligence: 10,
    intuition: 10,
    charisma: 10,
    dexterity: 10,
    agility: 10,
    konstitution: 10,
    strength: 10
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    )
    // <Route path="/about" component={About} />
    // <Route path="/talent" component={Talent} />
  }
}

export default App
