import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: `${4 * theme.spacing.unit}px auto`,
    maxWidth: '250px'
  }
})

function Main({ classes, children }) {
  return (
    <Paper component="section" className={classes.root} elevation={1}>
      {children}
    </Paper>
  )
}

export default withStyles(styles)(Main)
