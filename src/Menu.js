import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

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
        <IconButton onClick={this.toggle} color="inherit" aria-label="Open menu">
          <MenuIcon />
        </IconButton>
        <Drawer open={open} onClose={this.toggle}>
          <List>
            <ListItem>
              <Link to="/talent">Talent</Link>
            </ListItem>
            <ListItem>
              <Link to="/about">About</Link>
            </ListItem>
          </List>
        </Drawer>
      </Fragment>
    )
  }
}

export default Menu
