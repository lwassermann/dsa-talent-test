import React, { Fragment, Component } from 'react'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import Header from './Header'
import Main from './Main'

import TalentChallengeResult from './TalentChallenge/Result'

function d20() {
  return Math.floor(Math.random() * 20) + 1
}

class ChooseTalent extends Component {
  constructor() {
    super()

    this.state = {
      result: null
    }
    this.roll = this.roll.bind(this)
  }

  roll() {
    this.setState({
      result: [d20(), d20(), d20()]
    })
  }

  render() {
    const { match } = this.props
    const { attr, attr2, attr3 } = match.params
    const selectedAttrs = [attr, attr2, attr3]

    const { result } = this.state

    return (
      <Fragment>
        <Header title="Talent challenge" />

        <Main>
          <Typography paragraph>Test: {selectedAttrs.join('·')}</Typography>

          {result && (
            <TalentChallengeResult attributes={selectedAttrs} result={result} />
          )}

          <Button
            variant="extendedFab"
            aria-label="roll"
            color="primary"
            onClick={this.roll}
          >
            Roll
          </Button>
        </Main>
      </Fragment>
    )
  }
}

export default ChooseTalent
