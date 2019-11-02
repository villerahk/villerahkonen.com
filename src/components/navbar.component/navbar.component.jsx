import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Toolbar, IconButton, Typography, Icon, Tabs, Tab } from '@material-ui/core';

import logo from '../../images/ville-logo.png';
import './navbar.component.scss';

class NavBar extends Component {

    constructor(props){
        super(props)

        this.state = {
          selectedPage: 'Home',
          selectedTab: 0,
          menuClosed: true
        }

  }

  componentDidUpdate(){
    if (!this.state.menuClosed && this.props.clickHappened) {
      this.setState({
        menuClosed: true
      })
    }
    if (this.state.menuClosed && this.props.clickHappened) {
      this.props.resetClick()
    }
  }

menuButtonClick(){
  this.setState({
    menuClosed: !this.state.menuClosed
  })
}

selectedPage(x){
  let y = 0
  if (x === 'Home') {y = 0}
  else if (x === 'Projects') {y = 1}
  else {y = 2}
  this.setState({
    selectedPage: x,
    selectedTab: y,
    menuClosed: true
  })
}

render(){

  const {selectedPage, selectedTab, menuClosed} = this.state

  if (window.innerWidth < 1366) {

    return(

    <AppBar id="NavBar" position="fixed">
      <Toolbar id="NavBar">
    
        <img id="NavBar" src={logo} alt="logo" className="NavLogo" />
        <Typography id="NavBar" variant="h3" align="center">{selectedPage}</Typography>
        <IconButton id="NavBar" edge="end" className="" color="inherit" aria-label="menu" onClick={() => this.menuButtonClick()}>
        <Icon id="NavBar" style={{ color: menuClosed? '#FFF' : '#A89F85' }}>menu</Icon></IconButton>

      </Toolbar>

        <div id="NavBar" className="NavMenu" style={{ display: menuClosed? 'none' : 'flex' }}>
        <Link to="/" style={{ display: selectedPage === 'Home'? 'none' : 'block' }} onClick={() => this.selectedPage('Home')}>Home</Link>
        <Link to="/projects/" style={{ display: selectedPage === 'Projects'? 'none' : 'block' }} onClick={() => this.selectedPage('Projects')}>Projects</Link>
        <Link to="/contact/" style={{ display: selectedPage === 'Contact'? 'none' : 'block' }} onClick={() => this.selectedPage('Contact')}>Contact</Link>
        </div>
        
    </AppBar>

    )} else {return (
      <Fragment>
      <div className="NavBarDesktop">

        <div className="ColumnLogo">
          <img id="NavBar" src={logo} alt="logo" className="NavLogo" />
        </div>

        <div className="ColumnNavigation">
          <Tabs variant="fullWidth" value={selectedTab} indicatorColor="primary" textColor="primary" centered>  
            <Tab label="Home" component={Link} to={"/"} onClick={() => this.selectedPage('Home')}></Tab>
            <Tab label="Projects" component={Link} to={"/projects/"} onClick={() => this.selectedPage('Projects')}></Tab>
            <Tab label="Contact" component={Link} to={"/contact/"} onClick={() => this.selectedPage('Contact')}></Tab>
          </Tabs>
        </div>

      </div>
      <div className="ColumnImage" />
    </Fragment>
    )}
}
}

export default NavBar;