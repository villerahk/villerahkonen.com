import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Toolbar, IconButton, Typography, Icon } from '@material-ui/core';

import logo from '../../images/ville-logo.png';
import './navbar.component.scss';

class NavBar extends Component {

    constructor(){
        super()

        this.state = {
          selectedPage: 'Home',
          menuClosed: true
        }

  }

menuButtonClick(){
  this.setState({
    menuClosed: !this.state.menuClosed
  })
}

selectedPage(x){
  this.setState({
    selectedPage: x,
    menuClosed: true
  })
}

render(){

  const {selectedPage, menuClosed} = this.state

  if (window.innerWidth < 1366) {

    return(

    <AppBar position="fixed">
      <Toolbar>
    
        <img src={logo} alt="logo" className="NavLogo" />
        <Typography variant="h3" align="center">{selectedPage}</Typography>
        <IconButton edge="end" className="" color="inherit" aria-label="menu" onClick={() => this.menuButtonClick()}>
        <Icon style={{ color: menuClosed? '#FFF' : '#A89F85' }}>menu</Icon></IconButton>

      </Toolbar>

        <div className="NavMenu" style={{ display: menuClosed? 'none' : 'flex' }}>
        <Link to="/" style={{ display: selectedPage === 'Home'? 'none' : 'block' }} onClick={() => this.selectedPage('Home')}>Home</Link>
        <Link to="/projects/" style={{ display: selectedPage === 'Projects'? 'none' : 'block' }} onClick={() => this.selectedPage('Projects')}>Projects</Link>
        <Link to="/contact/" style={{ display: selectedPage === 'Contact'? 'none' : 'block' }} onClick={() => this.selectedPage('Contact')}>Contact</Link>
        </div>
        
    </AppBar>

    )} else {return null}
}
}

export default NavBar;