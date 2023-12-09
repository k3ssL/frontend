import React from 'react';
import classes from './OrderProject.module.css'
import Form from "./UI/Form/Form";

const OrderProject = () => {
    return (
        <div className={classes.container}>
            <img src={'/img/13.png'} alt={''}/>
            <h2>Хотите заказать проект?</h2>
            <p>Оставьте заявку, и мы вам перезвоним</p>
            <Form/>
            <img src={'/img/apps.png'} alt={''}/>
        </div>
    );
};

export default OrderProject;