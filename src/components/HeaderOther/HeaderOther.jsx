import React from 'react';
import classes from './HeaderOther.module.scss'

const HeaderOther = () => {
    return (
        <header className={classes.container}>
            <div className={classes.container_delivery}>
                <img src={'/img/truck.png'}/>
                <p>Free delivery on all orders over £50 with code easter checkout</p>
                <img src={'/img/close.png'}/>
            </div>
            <div className={classes}></div>
        </header>
    );
};

export default HeaderOther;