import React, { Fragment } from 'react';

import NavBar from '../../components/navbar.component/navbar.component';
import ProjectItem from '../../components/project.item.component/project.item.component';

import villeSm from '../../images/profile-ville-bnw2.png';

export default function ProjectsPage(props) {

    const item1 = {
        title: 'Picture Bank',
        text: "Picture Bank is a free web application for helping disabled people with daily tasks and communication via pictures. It contains thousands of pictures and eight different picture types. The user can either search for pictures or browse through the bank's various categories.",
        button1: 'Read More',
        button2: 'Live App',
        link1: '/projects/0',
        link2: 'https://kuvapankki.papunet.net',
        gitHubButton: false
    }

    const item2 = {
        title: 'VilleRahkonen.com',
        text: "The website you are currently visiting. The purpose of this project was to create a platform from scratch for myself, where I can showcase my new projects and skills. New content and features will be constantly added, and the source code will always be fully visible on GitHub.",
        button1: 'Read More',
        button2: 'Source Code',
        link1: '/projects/1',
        link2: 'https://github.com/villerahk/villerahkonen.com',
        gitHubButton: false
    }

    const item3 = {
        title: 'Experience, Open Source & More',
        text: "Even tho my actual IT work experience is relatively small timewise, I have done lots of different kind of work already. I'm also looking to start contributing to some Open Source projects soon. You can read more of all this in this section.",
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