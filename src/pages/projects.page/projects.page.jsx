import React, { Fragment } from 'react';

import NavBar from '../../components/navbar.component/navbar.component';
import ProjectItem from '../../components/project.item.component/project.item.component';

import villeSm from '../../images/profile-ville-bnw2.png';

export default function ProjectsPage(props) {

    const item1 = {
        title: 'Picture Bank',
        text: "Picture Bank is a free web application for helping disabled people with daily tasks and communication with pictures. The application contains thousands of pictures divided into eight picture types. User can either search for pictures or browse through the bank's various categories.",
        button1: 'Read More',
        button2: 'Live App',
        link1: '/projects/0',
        link2: 'https://kuvapankki.papunet.net',
        hideButton: false
    }

    const item2 = {
        title: 'VilleRahkonen.com',
        text: "The website you are currently visiting. The purpose of this project was to create a platform or rather a playground for myself, where I can showcase my new projects and skills. The other objective was also to demonstrate 'a professional-like process' of creating a small-to-mid sized web app and taking it to production. New content and features will be constantly added, and the source code and documentation will always be fully visible on GitHub.",
        button1: 'Read More',
        button2: 'Source Code',
        link1: '/projects/1',
        link2: 'https://github.com/villerahk/villerahkonen.com',
        hideButton: false
    }

    const item3 = {
        title: 'More to come...',
        text: "There's not that many projects yet to showcase publicly, but I already have some ideas in my mind for the next ones. If you're interested in my work experience or education, you should check out my LinkedIn profile from the Contact page. I have also linked my GitHub profile there.",
        button1: '',
        button2: '',
        link1: '',
        link2: '',
        hideButton: true
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