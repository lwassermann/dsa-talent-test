import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import Menu from './Menu'

export default function() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Menu />
        <Typography variant="title">Roll a test</Typography>
      </Toolbar>
    </AppBar>
  )
}
// <Link to="/talent">Talent</Link> <Link to="/about">About</Link>
