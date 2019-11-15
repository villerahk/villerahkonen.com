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
        text1: "Picture Bank is a free web application for helping disabled people with daily tasks and communication with pictures. The application contains thousands of pictures divided into eight picture types. User can either search for pictures or browse through the bank's various categories. The application has broad support for accessibility features and responsiveness.",
        text2: "I worked independently on this project under contract during weekends, alongside my primary work. The project was finished in October 2019 and it lasted for a total of 9 months. The finished application received very positive feedback from the end-users and the client was very pleased with the end result of the project.",
        boxTitle: "Work tasks",
        bulletTitles: ["Starting point to the project: ", "UI development: ", "Integration with API: ", "Accessibility: ", "Project management: "],
        bulletTexts: ["The client had an existing app but it was outdated and integrated in their website. Client wanted this app to get a new fresh look on it's own location (URL). They had some pre-plans for the new User Interface, which were finalized by me in a new prototype made with Adobe XD.",
        "After the client had accepted the UI prototype for both desktop and mobile, I started developing the new front-end with React. This was my first bigger React project and taking that into consideration, the development progressed quickly and smoothly.",
        "When the User Interface was mostly done, I integrated the new front-end with client's existing API to fetch data and populate the UI with thousands of pictures. This also lead to the need of developing search and browse functionalities.",
        "The client had high requirements regarding accessibility because of the app's nature and end-user base. Full support for keyboard-only use, screen readers and of course accessible color and font combinations.",
        "Managing the project evolved through the whole project. In the end we had a really well working project management with the client. Active messaging between me and the client was obvious, but we also actively used a Trello board to keep track of development and quality assurance tests."],
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
        text1: "The website you are currently visiting. The purpose of this project was to create a platform or rather a playground for myself, where I can showcase my new projects and skills. The other objective was also to demonstrate 'a professional-like process' of creating a small-to-mid sized web app and taking it to production. New content and features will be constantly added, and the source code and documentation will always be fully visible on GitHub.",
        text2: "The whole project took about 55-60 hours of work to be published as a 'version 1.0.0' when including all of the designing work and other preparations among development. All in all I'm personally very pleased with the end result of the web app, and will definitely keep adding new features and content in it regularly.",
        boxTitle: "Project's steps briefly",
        bulletTitles: [],
        bulletTexts: ["Set up a Trello board for projects progress management, and split major tasks into smaller ones for more specific management.",
        "Design a prototype using Adobe XD. Create a style guide and a component hierarchy document according to prototype's plans.",
        "Make tech library choices for development. Set up a repository for the project on GitHub. Install the chosen dependencies with npm.",
        "Development work and testing the application.",
        "Acquire and set up the chosen domain for production. Publish the app."],
        screenshot: screenShot2,
        recommendationText: 'F***ing finally.',
        recommendationAuthor: "Ville Rahkonen",
        recommendationTitle: "Creator & owner of this website",
        recommendationOrg: "Reflections on version 1.0.0 finally being published (quote by Kimi Räikkönen)",
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