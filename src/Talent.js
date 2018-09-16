import React, { Fragment } from 'react'

import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'

import { attributes } from './constants'
import Header from './Header'
import Main from './Main'

export default function Talent({ matches }) {
  console.log(matches)
  return (
    <Fragment>
      <Header title="Talent challenge" />

      <Main>Check</Main>
    </Fragment>
  )
}
