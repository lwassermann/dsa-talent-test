import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Home'
import ChooseTalent from './ChooseTalent'
import TalentChallenge from './TalentChallenge'
import AdjustAttributes from './Character/AdjustAttributes'

import './init-globals'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/talent" component={ChooseTalent} />
          <Route exact path="/talent/:attr" component={ChooseTalent} />
          <Route exact path="/talent/:attr/:attr2" component={ChooseTalent} />
          <Route
            path="/talent/:attr/:attr2/:attr3"
            component={TalentChallenge}
          />
          <Route path="/character/attributes" component={AdjustAttributes} />
        </Switch>
      </Router>
    )
    // <Route path="/about" component={About} />
  }
}

export default App
