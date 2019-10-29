import React, {Component} from 'react';

import { AppBar, Toolbar, IconButton, Typography, Icon } from '@material-ui/core';

import logo from '../../images/ville-logo.png';
import './nav.bar.scss';

class NavBar extends Component {

    constructor(){
        super()

        this.state = {
          selectedPage: 'Home'
        }
    }

render(){

  const {selectedPage} = this.state

    return(

<AppBar position="static">
  <Toolbar>
    
    <img src={logo} alt="logo" className="NavLogo" />

    <Typography variant="h3" align="center">{selectedPage}</Typography>

    <IconButton edge="end" className="" color="inherit" aria-label="menu">
    <Icon>menu</Icon></IconButton>

  </Toolbar>
</AppBar>

    )}
}

export default NavBar;