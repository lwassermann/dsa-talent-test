import React, { Fragment } from 'react'

import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'

import Header from './Header'
import Main from './Main'

export default function Home() {
  return (
    <Fragment>
      <Header title="Home" />
      <Main>
        <Typography variant="headline">Lorem ipsum…</Typography>
        <Typography paragraph>…dolor sit amet…</Typography>
        <Typography component="p">
          <Link to="/talent">Start</Link>
        </Typography>
      </Main>
    </Fragment>
  )
}

