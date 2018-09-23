import React from 'react'
import * as R from 'ramda'

import { withStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'
import Typography from '@material-ui/core/Typography'

import { attributes as ATTRIBUTES } from '../constants'

const styles = theme => ({
  root: { textAlign: 'center' },
  attributes: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    listStyleType: 'none',
    margin: 0,
    padding: 0
  },
  attribute: {
    margin: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    borderRadius: theme.spacing.unit * 4,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.grey[300]
  },
  diff: {
    color: theme.palette.error.main
  },
  total: {}
})

function Result({ attributes, result, classes }) {
  const { character } = global
  const attrNames = attributes
    .map(attr => ATTRIBUTES.find(ATTR => ATTR.abbreviation === attr))
    .map(ATTR => ATTR.name)

  const charValues = attrNames.map(name => character.attributes[name])

  const values = R.zip(result, charValues)
  const total = values.reduce(
    (acc, [rolled, charVal]) => acc + Math.min(0, charVal - rolled),
    0
  )

  return (
    <Typography paragraph className={classes.root}>
      <ul className={classes.attributes}>
        {values.map(([rolled, charVal], idx) => (
          <li key={idx} className={classes.attribute}>
            <span>{rolled}</span>
            {rolled > charVal && (
              <span className={classes.diff}>{charVal - rolled}</span>
            )}
          </li>
        ))}
      </ul>
      <Chip label={total} className={classes.total} color="secondary" />
    </Typography>
  )
}

export default withStyles(styles)(Result)
