import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../../components/navbar.component/navbar.component';
import { Button } from '@material-ui/core';

import villeSm from '../../images/ville-bnw-small.png';

import './projects.page.scss';

class ProjectsPage extends Component {

    render(){

    if (window.innerWidth < 1366) {

    return(
        <Fragment>
            <NavBar match={this.props.match} clickHappened={this.props.clickHappened} resetClick={this.props.resetClick}/>
            <div className="Content">
            
                <div className="ProjectItem">
                    <h3>Picture Bank (Kuvapankki)</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <Link to="#"><Button>Read More</Button></Link>
                    <Link to="#"><Button>Live App</Button></Link>
                </div>

                <div className="ProjectItem">
                    <h3>VilleRahkonen.com</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <Link to="#"><Button>Read More</Button></Link>
                    <Link to="#"><Button>Live App</Button></Link>
                </div>

                <div className="ProjectItem">
                    <h3>Open Source & More</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <Link to="#"><Button>Read More</Button></Link>
                    <Link to="#"><Button>My GitHub</Button></Link>
                </div>

            </div>

            <img src={villeSm} alt="Ville" className="Ville" />
        </Fragment>

    )} else {

    return(
        <Fragment>
            <NavBar match={this.props.match} clickHappened={this.props.clickHappened} resetClick={this.props.resetClick}/>
            <div className="Content">

                <div className="ProjectItem">
                    <h3>Picture Bank (Kuvapankki)</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <Link to="#"><Button>Read More</Button></Link>
                    <Link to="#"><Button>Live App</Button></Link>
                </div>

                <div className="ProjectItem">
                    <h3>VilleRahkonen.com</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <Link to="#"><Button>Read More</Button></Link>
                    <Link to="#"><Button>Live App</Button></Link>
                </div>

                <div className="ProjectItem">
                    <h3>Open Source & More</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <Link to="#"><Button>Read More</Button></Link>
                    <Link to="#"><Button>My GitHub</Button></Link>
                </div>

            </div>

        </Fragment>
    )}
} 
}
export default ProjectsPage;