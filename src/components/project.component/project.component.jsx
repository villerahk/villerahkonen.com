import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

import design from '../../images/design1.png';

import './project.component.scss';

export default function Project(props) {

const project = props.project

return(

<Fragment>
    <div className="ProjectInfo">
        <h3>{project.title}</h3>
            <p>{project.text1}</p>
            <p>{project.text2}</p>
    </div>

    <div className="ProjectMaterial">
        <div className="ColumnOne">
            <img src={project.screenshot} alt="screenshot" className="Screenshot" />       
        </div>

        <div className="ColumnTwo">
            <p style={{ maxHeight: '18px', padding: '0 0 8px 0', margin: '0' }}><strong>Tech's used:</strong></p>
                <div className="LogoPair">
                    <Tooltip title={project.techLogos[0].id} placement="left">
                        <img src={project.techLogos[0].logo} id={project.techLogos[0].id} alt={project.techLogos[0].id} width="40" height="40" />
                    </Tooltip>

                    <Tooltip title={project.techLogos[1].id} placement="right">
                        <img src={project.techLogos[1].logo} id={project.techLogos[1].id} alt={project.techLogos[1].id} width="40" height="40" />
                    </Tooltip>
                </div>

                <div className="LogoPair">
                    <Tooltip title={project.techLogos[2].id} placement="left">
                        <img src={project.techLogos[2].logo} id={project.techLogos[2].id} alt={project.techLogos[2].id} width="40" height="40" />
                    </Tooltip>

                    <Tooltip title={project.techLogos[3].id} placement="right">
                        <img src={project.techLogos[3].logo} id={project.techLogos[3].id} alt={project.techLogos[3].id} width="40" height="40" />
                    </Tooltip>
                </div>


                <div className="LogoPair">
                    <Tooltip title={project.techLogos[4].id} placement="left">
                        <img src={project.techLogos[4].logo} id={project.techLogos[4].id} alt={project.techLogos[4].id} width="40" height="40" />
                    </Tooltip>

                    <Tooltip title={project.techLogos[5].id} placement="right">
                        <img src={project.techLogos[5].logo} id={project.techLogos[5].id} alt={project.techLogos[5].id} width="40" height="40" />
                    </Tooltip>
                </div>

                <div className="LogoPair">
                    <Tooltip title={project.techLogos[6].id} placement="left">
                        <img src={project.techLogos[6].logo} id={project.techLogos[6].id} alt={project.techLogos[6].id} width="40" height="40" />
                    </Tooltip>

                    <Tooltip title={project.techLogos[7].id} placement="right">
                        <img src={project.techLogos[7].logo} id={project.techLogos[7].id} alt={project.techLogos[7].id} width="40" height="40" />
                    </Tooltip>
                </div>                  
        </div>
    </div>

    <div className="ProjectMaterial">
        <div className="ColumnOne">
            <img src={design} alt="Design" className="Design" />
                <p>"{project.recommendationText}"</p>
                    <p><span>{project.recommendationAuthor}</span>
                        <span>{project.recommendationTitle}</span>
                            <span>{project.recommendationOrg}</span></p>
            <img src={design} alt="Design" className="Design" />
        </div>

        <div className="ColumnTwo">  
            <a href={project.buttonLink} target="_blank" rel="noopener noreferrer"><Button variant="contained" color="secondary">{project.buttonText}</Button></a>
            <Link to="/projects/"><Button variant="contained" color="primary">Go Back</Button></Link>
        </div>

    </div>
    </Fragment>

)}