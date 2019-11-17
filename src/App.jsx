import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import * as firebase from "firebase/app";
import firebaseConfig from './firebase.js'

import LinearProgress from '@material-ui/core/LinearProgress';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import palette from './theme.json';

import HomePage from './pages/home.page/home.page.jsx';
import ContactPage from './pages/contact.page/contact.page.jsx';
import ProjectsPage from './pages/projects.page/projects.page.jsx';
import SelectedProjectPage from './pages/selected.project.page/selected.project.page.jsx';

import logo from './images/ville-logo.png';

import './App.scss';

firebase.initializeApp(firebaseConfig);

const theme = createMuiTheme(palette)

class App extends Component {

constructor(){
  super()

  this.state = {
    loadingDone: false,
    loadingValue: 0,
    clickHappened: false
  }

  this.resetClick = this.resetClick.bind(this);
}

componentDidMount() {
  setInterval(() => this.countTo100(this.state.loadingValue), 325)
  }

countTo100(n){
  if (n < 100) {
    const x = n+10
    this.setState({
      loadingValue: x
    })
    }
  else {
    clearInterval()
    setTimeout(() => this.setState({
      loadingDone: true
    }),1300)
  }
}

clickCheck(e) {
  if (e.target.id !== "NavBar") {
    this.setState({
      clickHappened: true
    })
  }
}

resetClick(){
  this.setState({
    clickHappened: false
  })
}

render(){

  const {loadingDone, loadingValue} = this.state

    if (!loadingDone) {
      return (
        <div className="App">
        <ThemeProvider theme={theme}>
          <div className="SplashScreen">
            <div className="LogoFrame">
              <img src={logo} alt="Logo" className="Logo" />
              <LinearProgress variant="determinate" value={loadingValue} color="primary" />
            </div>
          </div>
          </ThemeProvider>
        </div>
        )}

    else {
      return (
        <ThemeProvider theme={theme}>
        <div className="App" onClick={(e) => this.clickCheck(e)}>

            <Switch>
              <Route exact path="/" render={(route) => <HomePage match={route.match} clickHappened={this.state.clickHappened} resetClick={this.resetClick} />} />   
              <Route exact path="/projects/" render={(route) => <ProjectsPage match={route.match} clickHappened={this.state.clickHappened} resetClick={this.resetClick} />} />
              <Route exact path="/projects/:id" render={(route) => <SelectedProjectPage match={route.match} clickHappened={this.state.clickHappened} resetClick={this.resetClick}/>}/>
              <Route exact path="/contact/" render={(route) => <ContactPage match={route.match} theme={theme} clickHappened={this.state.clickHappened} resetClick={this.resetClick} />} />
              <Route render={() => <Redirect to="/" />} />
            </Switch>
            
        </div></ThemeProvider>
        )}
  }
}

export default App;