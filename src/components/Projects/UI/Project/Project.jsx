import React from 'react';
import classes from './Project.module.css'

const Project = ({projectImg, projectText}) => {
    return (
        <div className={classes.container}>
            <img src={projectImg} alt={''}/>
            <div>
                <p>{projectText}</p>
                <img src={'/img/3.png'} alt={''}/>
            </div>
        </div>
    );
};

export default Project;