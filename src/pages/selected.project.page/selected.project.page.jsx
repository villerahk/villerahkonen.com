import React, { Fragment } from 'react';

import NavBar from '../../components/navbar.component/navbar.component';

import screenShot from '../../images/picture-bank-screenshot.png';
import villeSm from '../../images/ville-bnw-small.png';
import design from '../../images/design1.png';
import CRA from '../../images/tech.logos/CRA.png';
import reactLogo from '../../images/tech.logos/react.png';
import CSS from '../../images/tech.logos/css.png';
import HTML5 from '../../images/tech.logos/html5.png';
import JS from '../../images/tech.logos/js.png';
import JSONLogo from '../../images/tech.logos/json.png';
import Trello from '../../images/tech.logos/trello.png';
import XD from '../../images/tech.logos/XD.png';

import './selected.project.page.scss';

const logoCollection = [reactLogo, CRA, JS, JSONLogo, HTML5, CSS, Trello, XD]

export default function ProjectsPage(props) {

    if (window.innerWidth < 1366) {

    return(
        <Fragment>
            <NavBar match={props.match} clickHappened={props.clickHappened} resetClick={props.resetClick}/>
                <div className="Content">
                    <p>Testing selected project page!</p>
                </div>
            <img src={villeSm} alt="Ville" className="Ville" />
        </Fragment>

    )} else {

    return(
        <Fragment>
            <NavBar match={props.match} clickHappened={props.clickHappened} resetClick={props.resetClick}/>
                <div className="Content">
                    <div className="ProjectInfo">
                        <h3>Picture Bank</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>

                    <div className="ProjectMaterial">
                        <div className="ColumnOne">
                            <img src={screenShot} alt="screenshot" className="Screenshot" />
                            <img src={design} alt="Design" className="Design" />
                            <p>"Ville's work has been efficient and precise while maintaining a proper schedule. He has also been considerate of our wishes during development. We consider the result of the work to be of high quality."</p>
                            <p><span>Sami Älli</span>
                            <span>Director, Accessibility Unit</span>
                            <span>The Finnish Association on Intellectual and Developmental Disabilities</span></p>
                            <img src={design} alt="Design" className="Design" />
                        </div>

                        <div className="ColumnTwo">
                        <p><strong>Tech's used:</strong></p>
                        <div className="LogoPair">
                        <img src={logoCollection[0]} alt={logoCollection[0]} width="40" height="40" /><img src={logoCollection[1]} alt={logoCollection[1]} width="40" height="40" />
                        </div>
                        <div className="LogoPair">
                        <img src={logoCollection[2]} alt={logoCollection[2]} width="40" height="40" /><img src={logoCollection[3]} alt={logoCollection[3]} width="40" height="40" />
                        </div>
                        <div className="LogoPair">
                        <img src={logoCollection[4]} alt={logoCollection[4]} width="40" height="40" /><img src={logoCollection[5]} alt={logoCollection[5]} width="40" height="40" />
                        </div>
                        <div className="LogoPair">
                        <img src={logoCollection[6]} alt={logoCollection[6]} width="40" height="40" /><img src={logoCollection[7]} alt={logoCollection[7]} width="40" height="40" />
                        </div>
                        
                        {/* <Link to={}><Button variant="contained" color="primary">{}</Button></Link>
                        <a href={} target="_blank" rel="noopener noreferrer"><Button variant="contained" color="secondary" className={}>{}</Button></a> */}
                        </div>
                    </div>

                </div>
        </Fragment>
    )}
}