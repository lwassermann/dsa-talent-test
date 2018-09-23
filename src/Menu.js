import React, { Component, Fragment } from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const PATHS = [
  { label: 'Home', path: '/' },
  { label: 'Talent challenge', path: '/talent' },
  { label: 'Adjust attributes', path: '/character/attributes' }
]

class Menu extends Component {
  constructor() {
    super()

    this.state = {
      open: false
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const { open } = this.state
    return (
      <Fragment>
        <IconButton
          onClick={this.toggle}
          color="inherit"
          aria-label="Open menu"
        >
          <MenuIcon />
        </IconButton>
        <Drawer open={open} onClose={this.toggle}>
          <List component="nav">
            {PATHS.map(({ path, label }) => (
              <ListItem key={path} component="a" href={path} button>
                <ListItemText inset primary={label} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Fragment>
    )
  }
}

export default Menu
