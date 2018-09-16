import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import Menu from './Menu'

export default function({ title = 'Roll a test' }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Menu />
        <Typography variant="title" color="inherit">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
