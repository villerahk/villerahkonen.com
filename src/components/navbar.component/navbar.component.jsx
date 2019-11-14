import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Toolbar, IconButton, Typography, Icon, Tabs, Tab } from '@material-ui/core';

import logo from '../../images/ville-logo.png';
import './navbar.component.scss';

class NavBar extends Component {

    constructor(props){
        super(props)

        this.state = {
          selectedPage: undefined,
          selectedTab: undefined,
          justifyContent: 'matrix(0.33333, 0, 0, 1, -266.67, 0)',
          menuClosed: true
        }

  }

  componentDidMount(){

    const { path } = this.props.match

      if (path === '/'){
        this.selectedPage('Home')

        } else if (path === '/projects/') {
          this.selectedPage('Projects')

          } else if (path === '/contact/') {
            this.selectedPage('Contact')

            } else if (path === '/projects/:id') {
              this.selectedPage('Projects')

      } else {console.log('Something went wrong with navbar.component.jsx.')}
    
  }

  componentDidUpdate(){
    const { menuClosed } = this.state
    const { clickHappened } = this.props

    if (!menuClosed && clickHappened) {
      this.setState({
        menuClosed: true
      })
    }
    if (menuClosed && clickHappened) {
      this.props.resetClick()
    }
  }

menuButtonClick(){
  this.setState({
    menuClosed: !this.state.menuClosed
  })
}

selectedPage(newValue){
  let y = 0
  let z = ''
  if (newValue === 'Home') {y = 0; z = 'matrix(0.33333, 0, 0, 1, -266.67, 0)'}
  else if (newValue === 'Projects') {y = 1; z = 'matrix(0.33333, 0, 0, 1, 0, 0)'}
  else {y = 2; z = 'matrix(0.33333, 0, 0, 1, 266.67, 0)'}
  this.setState({
    selectedPage: newValue,
    selectedTab: y,
    menuClosed: true,
    justifyContent: z
  })
}

render(){

  const {selectedPage, selectedTab, menuClosed, justifyContent} = this.state

  if (window.innerWidth < 1366) {

    return(

    <AppBar id="NavBar" position="fixed" color="inherit">
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
          <Tabs value={selectedTab} variant="fullWidth" indicatorColor="primary" textColor="primary" centered>  
            <Tab label="Home" component={Link} to={"/"} color="primary" onClick={() => this.selectedPage('Home')}></Tab>
            <Tab label="Projects" component={Link} to={"/projects/"} onClick={() => this.selectedPage('Projects')}></Tab>
            <Tab label="Contact" component={Link} to={"/contact/"} onClick={() => this.selectedPage('Contact')}></Tab>
          </Tabs>
          <div className="IndicatorContainer">
            <div className="TabIndicator" style={{ transform: justifyContent }}/>
          </div>
        </div>

      </div>
      <div className="ColumnImage" />
    </Fragment>
    )}
}
}

export default NavBar;