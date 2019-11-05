import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

import './project.item.component.scss';

export default function ProjectItem(props) {

const item = props.item

return(

    <div className="ProjectItem">
    <h3>{item.title}</h3>
        <p>{item.text}</p>
    <Link to={item.link1}><Button variant="contained" color="primary">{item.button1}</Button></Link>
    <Link to={item.link2}><Button variant="contained" color="secondary" className={item.gitHubButton ? "GitHubButton" : ""}>{item.button2}</Button></Link>
    </div>

)}