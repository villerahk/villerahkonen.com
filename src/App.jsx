import React, {Component} from 'react';

import LinearProgress from '@material-ui/core/LinearProgress';

import logo from './images/ville-logo.png';
import './App.scss';

class App extends Component {

constructor(){
  super()

  this.state = {
    loadingDone: false,
    loadingValue: 0
  }
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
    }),1500)
  }
}

render(){

  const {loadingDone, loadingValue} = this.state

    if (!loadingDone) {
      return (
        <div className="App">
        <div className="SplashScreen">
        <div className="LogoFrame">
        <img src={logo} alt="Logo" className="Logo"></img>
        <LinearProgress variant="determinate" value={loadingValue} />
        </div>
        </div></div>)}

    else {
      return (
        <div className="App">

        <p>Hey,  and  welcome  to  my  website!  My  name  is  Ville  Rahkonen,  I’m  26  years  old  Software  Engineer  from  Hämeenlinna,  Finland. 
          On  this  website  you  can  find  my  latest  projects  and  contact  information.  If  you  want  to  know  more  about  my  work  experience  and  education,  please  visit  my  LinkedIn  profile. 
          I’m  currently  looking  for  work  anywhere  in  the  world  and  I’m  available  to  relocate  and  start  in  February  2020.  Please  don’t  hesitate  in  contacting  me, I  would  love  to  hear  about  your  company.
        </p>

        </div>)}

  }
}

export default App;