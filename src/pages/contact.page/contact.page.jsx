import React, { Component, Fragment } from 'react';

import NavBar from '../../components/navbar.component/navbar.component';

import design from '../../images/design1.png';
import villeSm from '../../images/ville-bnw-small.png';

import './contact.page.scss';

class ContactPage extends Component {

    render(){

    if (window.innerWidth < 1366) {

    return(
        <Fragment>
            <NavBar match={this.props.match} clickHappened={this.props.clickHappened} resetClick={this.props.resetClick}/>
            <div className="Content">
            <div className="WelcomeText">

                <img src={design} alt="Design" className="Design" />
                <p>I’m currently looking for work anywhere in the world and I’m available to relocate and start in February 2020. Please don’t hesitate in contacting me, I would love to hear about your company.</p>
                <img src={design} alt="Design" className="Design" />
            </div>
            </div>

            <img src={villeSm} alt="Ville" className="Ville" />
        </Fragment>

    )} else {

    return(
        <Fragment>
            <NavBar match={this.props.match} clickHappened={this.props.clickHappened} resetClick={this.props.resetClick}/>
            <div className="Content">
            <div className="WelcomeText">

                <img src={design} alt="Design" className="Design" />
                    <p>I’m currently looking for work anywhere in the world and I’m available to relocate and start in February 2020. Please don’t hesitate in contacting me, I would love to hear about your company.</p>
                <img src={design} alt="Design" className="Design" />
            </div>
            </div>

        </Fragment>
    )}
} 
}
export default ContactPage;