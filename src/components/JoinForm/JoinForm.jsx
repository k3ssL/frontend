import React from 'react';
import classes from './JoinForm.module.scss'
import Form from "../../shared/UI/Form/Form";

const JoinForm = () => {
    return (
        <section className={classes.container}>
            <div className={classes.container_content}>
                <h1>Join the club and get the benefits</h1>
                <p>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
                <Form/>
            </div>
        </section>
    );
};

export default JoinForm;