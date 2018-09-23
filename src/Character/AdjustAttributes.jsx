import React, { Component, Fragment } from 'react'
import TextField from '@material-ui/core/TextField'

import Header from '../Header'
import Main from '../Main'

import { attributes as ATTRIBUTES } from '../constants'

class AdjustAttributes extends Component {
  constructor() {
    super()

    this.state = global.character.attributes
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const { attribute } = event.target.dataset
    const value = parseInt(event.target.value, 10)

    this.setState({ [attribute]: value })
    localStorage.setItem(attribute, value)
    global.character.attributes[attribute] = value
  }

  render() {
    return (
      <Fragment>
        <Header title="Character Attributes" />

        <Main>
          {ATTRIBUTES.map(({ name, label, abbreviation }) => (
            <TextField
              key={name}
              id={`standard-${name}`}
              label={label}
              value={this.state[name]}
              onChange={this.handleChange}
              type="number"
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{
                'data-attribute': name
              }}
              margin="normal"
            />
          ))}
        </Main>
      </Fragment>
    )
  }
}

export default AdjustAttributes
