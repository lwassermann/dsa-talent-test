import React from 'react'
import * as R from 'ramda'

import Typography from '@material-ui/core/Typography'

import { attributes as ATTRIBUTES } from '../constants'

export default function({ attributes, result }) {
  const { character } = global
  const attrNames = attributes
    .map(attr => ATTRIBUTES.find(ATTR => ATTR.abbreviation === attr))
    .map(ATTR => ATTR.name)

  const charValues = attrNames.map(name => character.attributes[name])

  const values = R.zip(result, charValues)
  console.log(values)
  const total = values.reduce(
    (acc, [rolled, charVal]) => acc + Math.min(0, charVal - rolled),
    0
  )

  return (
    <Typography paragraph>
      {values.map(([rolled, charVal], idx) => (
        <span key={idx}>
          {rolled} {rolled > charVal ? `(${charVal - rolled}) ` : ''}
        </span>
      ))}
      <emph>{total}</emph>
    </Typography>
  )
}
