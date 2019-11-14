import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';

import NavBar from '../../components/navbar.component/navbar.component';
import Project from '../../components/project.component/project.component';

import screenShot from '../../images/screenshot-mockups.png';
import screenShot2 from '../../images/screenshot-mockups2.png';
import villeSm from '../../images/profile-ville-bnw2.png';

import CRA from '../../images/tech.logos/CRA.png';
import reactLogo from '../../images/tech.logos/react.png';
import CSS from '../../images/tech.logos/css.png';
import HTML5 from '../../images/tech.logos/html5.png';
import JS from '../../images/tech.logos/js.png';
import JSONLogo from '../../images/tech.logos/json.png';
import Trello from '../../images/tech.logos/trello.png';
import XD from '../../images/tech.logos/XD.png';
import sass from '../../images/tech.logos/sass-logo.png'
import firebaseLogo from '../../images/tech.logos/firebase-logo.png';

const projectObjects = [
    {
        title: "Picture Bank",
        text1: "I worked independently on this project during weekends under contract. Project finished in October 2019 and it lasted for 9 months. The finished application received very positive feedback from the end-users and the client was very pleased with the end result of the project.",
        text2: "I worked independently on this project during weekends under contract. Project finished in October 2019 and it lasted for 9 months. The finished application received very positive feedback from the end-users and the client was very pleased with the end result of the project.",
        screenshot: screenShot,
        recommendationText: "Ville's work has been efficient and precise while maintaining a proper schedule. He has also been considerate of our wishes during development. We consider the result of the work to be of high quality.",
        recommendationAuthor: "Sami Älli",
        recommendationTitle: "Director, Accessibility Unit",
        recommendationOrg: "The Finnish Association on Intellectual and Developmental Disabilities",
        buttonText: "Live App",
        buttonLink: "https://kuvapankki.papunet.net/",
        techLogos: {0:{id: "React", logo: reactLogo},
        1:{id: "Create React App", logo: CRA},
        2:{id: "JavaScript (ES6)", logo: JS},
        3:{id: "JSON API", logo: JSONLogo},
        4:{id: "HTML5", logo: HTML5},
        5:{id: "CSS3", logo: CSS},
        6:{id: "Trello", logo: Trello},
        7:{id: "Adobe XD", logo: XD}},
        hiddenImages: false,
        gitHubButton: false
    },
    {
        title: "VilleRahkonen.com",
        text1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        text2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        screenshot: screenShot2,
        recommendationText: "Ville's work has been efficient and precise while maintaining a proper schedule. He has also been considerate of our wishes during development. We consider the result of the work to be of high quality.",
        recommendationAuthor: "Sami Älli",
        recommendationTitle: "Director, Accessibility Unit",
        recommendationOrg: "The Finnish Association on Intellectual and Developmental Disabilities",
        buttonText: "Source Code",
        buttonLink: "https://github.com/villerahk/villerahkonen.com",
        techLogos: {0:{id: "React", logo: reactLogo},
        1:{id: "Create React App", logo: CRA},
        2:{id: "JavaScript (ES6)", logo: JS},
        3:{id: "Firebase", logo: firebaseLogo},
        4:{id: "HTML5", logo: HTML5},
        5:{id: "Sass", logo: sass},
        6:{id: "Trello", logo: Trello},
        7:{id: "Adobe XD", logo: XD}},
        hiddenImages: false,
        gitHubButton: false
    },
    {
        title: "Open Source & More",
        text1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        text2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        screenshot: screenShot2,
        recommendationText: "Ville's work has been efficient and precise while maintaining a proper schedule. He has also been considerate of our wishes during development. We consider the result of the work to be of high quality.",
        recommendationAuthor: "Sami Älli",
        recommendationTitle: "Director, Accessibility Unit",
        recommendationOrg: "The Finnish Association on Intellectual and Developmental Disabilities",
        buttonText: "My GitHub",
        buttonLink: "https://github.com/villerahk",
        techLogos: {0:{id: "React", logo: reactLogo},
        1:{id: "Create React App", logo: CRA},
        2:{id: "JavaScript (ES6)", logo: JS},
        3:{id: "Firebase", logo: firebaseLogo},
        4:{id: "HTML5", logo: HTML5},
        5:{id: "Sass", logo: sass},
        6:{id: "Trello", logo: Trello},
        7:{id: "Adobe XD", logo: XD}},
        hideImages: true,
        gitHubButton: true
    }
]

export default function SelectedProjectPage(props) {

    const id = props.match.params.id

    if (!projectObjects[id]) {
        return(<Redirect to="/" />)
    }

    if (window.innerWidth < 1366) {

    return(
        <Fragment>
            <NavBar match={props.match} clickHappened={props.clickHappened} resetClick={props.resetClick}/>
                <div className="Content">
                    <Project project={projectObjects[id]} />
                </div>
            <img src={villeSm} alt="Ville" className="Ville" />
        </Fragment>

    )} else {

    return(
        <Fragment>
            <NavBar match={props.match} clickHappened={props.clickHappened} resetClick={props.resetClick}/>
                <div className="Content">
                   <Project project={projectObjects[id]} />
                </div>     
        </Fragment>
    )}
}