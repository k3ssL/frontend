import React from 'react';
import classes from './BrandDifferentItem.module.scss'

const BrandDifferentItem = ({img, title, text}) => {
    return (
        <div className={classes.container}>
            <img src={img}/>
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    );
};

export default BrandDifferentItem;