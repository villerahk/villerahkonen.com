import React, { Component, Fragment } from 'react';

import NavBar from '../../components/navbar.component/navbar.component';

import Button from '@material-ui/core/Button';

import design from '../../images/design1.png';
import villeSm from '../../images/profile-ville-bnw2.png';
import linkedIn from '../../images/linkdin.png';
import email from '../../images/email-icon.png';
import gitHub from '../../images/github.png';

import './contact.page.scss';

class ContactPage extends Component {

copyEmail(){
    const emailAddress = document.getElementById("myInput");
    emailAddress.select()
    emailAddress.setSelectionRange(0,26)
    document.execCommand("copy")
    alert("Copied the email address to your clipboard: " + emailAddress.value)
}

    render(){

    const p1 = "You made it this far on my website, so why don't you send me an email or a LinkedIn connection request?"
    const p2 = "I’m currently looking for work in Europe or North America. I’m willing to relocate long-term and available to start working in January 2020."
    const p3 = "You can copy my email address, visit my LinkedIn or GitHub profile from below."

    if (window.innerWidth < 1366) {

    return(
        <Fragment>
            <NavBar match={this.props.match} clickHappened={this.props.clickHappened} resetClick={this.props.resetClick}/>
            <div className="Content">
                <div className="ContactText">
                    <p>{p1}</p>
                    <p>{p2}</p>
                    <img src={design} alt="Design" className="Design" />
                    <p>{p3}</p>
                    <div className="ContactButtons">
                        <Button onClick={() => this.copyEmail()} variant="contained" color="primary">Email<img src={email} alt="Email" className="Email" /></Button>
                        <a href="https://www.linkedin.com/in/ville-rahkonen-685117137/" target="_blank" rel="noopener noreferrer"><Button variant="contained" color="secondary"><img src={linkedIn} alt="LinkedIn" className="LinkedIn" /></Button></a>
                        <a href="https://github.com/villerahk" target="_blank" rel="noopener noreferrer"><Button variant="contained" color="secondary" className="GitHubButton"><img src={gitHub} alt="GitHub" className="GitHub" /></Button></a>
                    </div>      
                    <input type="text" value="ville.rahkonen10@gmail.com" id="myInput" />
                </div>
            </div>
            <img src={villeSm} alt="Ville" className="Ville" />
        </Fragment>

    )} else {

    return(
        <Fragment>
            <NavBar match={this.props.match} clickHappened={this.props.clickHappened} resetClick={this.props.resetClick}/>
            <div className="Content">
                <div className="ContactText">
                    <p>{p1}</p>
                    <p>{p2}</p>
                    <img src={design} alt="Design" className="Design" />
                    <p>{p3}</p>
                    <div className="ContactButtons">
                        <Button onClick={() => this.copyEmail()} variant="contained" color="primary">Email<img src={email} alt="Email" className="Email" /></Button>
                        <a href="https://www.linkedin.com/in/ville-rahkonen-685117137/" target="_blank" rel="noopener noreferrer"><Button variant="contained" color="secondary"><img src={linkedIn} alt="LinkedIn" className="LinkedIn" /></Button></a>
                        <a href="https://github.com/villerahk" target="_blank" rel="noopener noreferrer"><Button variant="contained" color="secondary" className="GitHubButton"><img src={gitHub} alt="GitHub" className="GitHub" /></Button></a>
                    </div>      
                    <input type="text" value="ville.rahkonen10@gmail.com" id="myInput" />
                </div>
            </div>
        </Fragment>
    )}
} 
}
export default ContactPage;