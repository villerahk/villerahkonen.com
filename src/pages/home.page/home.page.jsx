import React, { Component, Fragment } from 'react';

import NavBar from '../../components/navbar.component/navbar.component';

import design from '../../images/design1.png';
import villeSm from '../../images/profile-ville-bnw2.png';

import './home.page.scss';

class HomePage extends Component {

    render(){

    const p1 = "Hey and welcome to my website!"
    const p2 = "I'm Ville Rahkonen (26), Software Engineer from Hämeenlinna, Finland."
    const p3 = "On this website you can find all kinds of things about me and my latest development projects."
    const p4 = "For those who don't know me yet - here's me in five traits:"
    const p5 = ["Team player", "Hardworking", "Positive attitude", "Humorous & easy-going", "Considerate towards others"]
    const p6 = "And by the way... I’m currently looking for work anywhere in Europe or North America. I’m available to relocate long-term and start working in February 2020, so don’t hesitate to contact me!"

    if (window.innerWidth < 1366) {

    return(
        <Fragment>
            <NavBar match={this.props.match} clickHappened={this.props.clickHappened} resetClick={this.props.resetClick} color="secondary"/>
            <div className="Content">
                <div className="WelcomeText">
                    <p>{p1}</p>
                    <p>{p2}</p>
                    <p>{p3}</p>
                    <img src={design} alt="Design" className="Design" />
                    <p>{p4}</p>
                    <p><ul>
                        <li>{p5[0]}</li>
                        <li>{p5[1]}</li>
                        <li>{p5[2]}</li>
                        <li>{p5[3]}</li>
                        <li>{p5[4]}</li>
                    </ul></p>
                    <img src={design} alt="Design" className="Design" />
                    <p>{p6}</p>
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
                    <p>{p1}</p>
                    <p>{p2}</p>
                    <p>{p3}</p>
                    <img src={design} alt="Design" className="Design" />
                    <p>{p4}</p>
                    <p><ul>
                        <li>{p5[0]}</li>
                        <li>{p5[1]}</li>
                        <li>{p5[2]}</li>
                        <li>{p5[3]}</li>
                        <li>{p5[4]}</li>
                    </ul></p>
                    <img src={design} alt="Design" className="Design" />
                    <p>{p6}</p>    
                </div>
            </div>
        </Fragment>
    )}
} 
}
export default HomePage;