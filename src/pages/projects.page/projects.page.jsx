import React, { Fragment } from 'react';

import NavBar from '../../components/navbar.component/navbar.component';
import ProjectItem from '../../components/project.item.component/project.item.component';

import villeSm from '../../images/profile-ville-bnw2.png';

export default function ProjectsPage(props) {

    const item1 = {
        title: 'Picture Bank',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        button1: 'Read More',
        button2: 'Live App',
        link1: '/projects/0',
        link2: 'https://kuvapankki.papunet.net',
        gitHubButton: false
    }

    const item2 = {
        title: 'VilleRahkonen.com',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        button1: 'Read More',
        button2: 'Source Code',
        link1: '/projects/1',
        link2: 'https://github.com/villerahk/villerahkonen.com',
        gitHubButton: false
    }

    const item3 = {
        title: 'Open Source & More',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        button1: 'Read More',
        button2: 'My GitHub',
        link1: '/projects/2',
        link2: 'https://github.com/villerahk',
        gitHubButton: true
    }

    if (window.innerWidth < 1366) {

    return(
        <Fragment>
            <NavBar match={props.match} clickHappened={props.clickHappened} resetClick={props.resetClick}/>
                <div className="Content">
                    <ProjectItem item={item1} />
                    <ProjectItem item={item2} />
                    <ProjectItem item={item3} />
                </div>
            <img src={villeSm} alt="Ville" className="Ville" />
        </Fragment>

    )} else {

    return(
        <Fragment>
            <NavBar match={props.match} clickHappened={props.clickHappened} resetClick={props.resetClick}/>
                <div className="Content">
                    <ProjectItem item={item1} />
                    <ProjectItem item={item2} />
                    <ProjectItem item={item3} />
                </div>
        </Fragment>
    )}
}