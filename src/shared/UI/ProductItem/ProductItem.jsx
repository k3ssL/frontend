import React from 'react';
import classes from './ProductItem.module.scss'

const ProductItem = ({img, name, price}) => {
    return (
        <div className={classes.container}>
            <img src={img}/>
            <h4>{name}</h4>
            <p>{price}</p>
        </div>
    );
};

export default ProductItem;