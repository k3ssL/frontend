import React from 'react';
import classes from './Stepitem.module.css'
const Stepitem = ({stepTitle, stepText}) => {
    return (
        <div className={classes.container}>
            <h1>{stepTitle}</h1>
            <p>{stepText}</p>
            <hr/>
        </div>
    );
};

export default Stepitem;