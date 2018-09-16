import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'

import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import Header from './Header'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: theme.spacing.unit * 4
  }
})

function Home({ classes }) {
  return (
    <Fragment>
      <Header title="Home" />

      <Paper component="section" className={classes.root} elevation={1}>
        <Typography variant="headline">Lorem ipsum…</Typography>
        <Typography paragraph>…dolor sit amet…</Typography>
        <Typography component="p">
          <Link to="/talent">Start</Link>
        </Typography>
      </Paper>
    </Fragment>
  )
}

export default withStyles(styles)(Home)
