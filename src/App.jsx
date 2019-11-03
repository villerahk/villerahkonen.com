import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom";

import LinearProgress from '@material-ui/core/LinearProgress';

import HomePage from './pages/home.page/home.page.jsx';
import ContactPage from './pages/contact.page/contact.page.jsx';

import logo from './images/ville-logo.png';

import './App.scss';

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
  setInterval(() => this.countTo100(this.state.loadingValue), 275)
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
    }),1200)
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
          <div className="SplashScreen">
            <div className="LogoFrame">
              <img src={logo} alt="Logo" className="Logo" />
              <LinearProgress variant="determinate" value={loadingValue} />
            </div>
          </div>
        </div>
        )}

    else {
      return (
        <div className="App" onClick={(e) => this.clickCheck(e)}>

            <Switch>
              <Route exact path="/" render={(route) => <HomePage match={route.match} clickHappened={this.state.clickHappened} resetClick={this.resetClick} />} />
              <Route exact path="/contact/" render={(route) => <ContactPage match={route.match} clickHappened={this.state.clickHappened} resetClick={this.resetClick} />} />
            </Switch>

        </div>
        )}
  }
}

export default App;