import React, { Fragment } from 'react'

import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import { attributes } from './constants'
import Header from './Header'
import Main from './Main'

function Selected({ attributes }) {
  return (
    <div>
      <Typography paragraph>
        Test ({attributes.join('·')}
        ·?)
      </Typography>
    </div>
  )
}

export default function ChooseTalent({ match }) {
  const prefix = `${match.url}/`

  return (
    <Fragment>
      <Header title="Talent challenge" />

      <Main>
        {match.params.attr && (
          <Selected attributes={Object.values(match.params)} />
        )}
        <Typography>Select the next attribute</Typography>
        <List>
          {attributes.map(({ label, abbreviation }) => (
            <ListItem
              key={abbreviation}
              button
              component="a"
              href={prefix + abbreviation}
            >
              <ListItemText inset>{label}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Main>
    </Fragment>
  )
}
