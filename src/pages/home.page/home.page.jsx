import React, { Fragment } from 'react';

import design from '../../images/design1.png';
import villeSm from '../../images/ville-bnw-small.png';

import './home.page.scss';

export default function HomePage() {

    if (window.innerWidth < 1366) {

    return(
        <Fragment>
            <div className="Content">
            <div className="WelcomeText">

                <img src={design} alt="Design" className="Design" />
                    <p>Hey, and welcome to my website! My name is Ville Rahkonen, I’m 26 years old Software Engineer from Hämeenlinna, Finland.</p>
                    <p>On this website you can find my latest projects and contact information. If you want to know more about my work experience and education, please visit my LinkedIn profile.</p>
                    <p>I’m currently looking for work anywhere in the world and I’m available to relocate and start in February 2020. Please don’t hesitate in contacting me, I would love to hear about your company.</p>
                <img src={design} alt="Design" className="Design" />
            </div>
            </div>

            <img src={villeSm} alt="Ville" className="Ville" />
        </Fragment>

    )} else {

    return(
        <Fragment>
            <div className="Content">
            <div className="WelcomeText">

                <img src={design} alt="Design" className="Design" />
                    <p>Hey, and welcome to my website! My name is Ville Rahkonen, I’m 26 years old Software Engineer from Hämeenlinna, Finland.</p>
                    <p>On this website you can find my latest projects and contact information. If you want to know more about my work experience and education, please visit my LinkedIn profile.</p>
                    <p>I’m currently looking for work anywhere in the world and I’m available to relocate and start in February 2020. Please don’t hesitate in contacting me, I would love to hear about your company.</p>
                <img src={design} alt="Design" className="Design" />
            </div>
            </div>

        </Fragment>
    )}
} 