import React, { Fragment } from 'react';

import NavBar from '../../components/navbar.component/navbar.component';

import villeSm from '../../images/ville-bnw-small.png';

import './selected.project.page.scss';

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
                    <p>Testing selected project page!</p>
                </div>
        </Fragment>
    )}
}