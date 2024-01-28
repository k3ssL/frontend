import React from 'react';
import classes from "./Form.module.scss";

const Form = ({ className }) => {
    return (
        <form className={`${classes.container} ${className}`}>
            <input placeholder={'your@email.com'}/>
            <button>Sign Up</button>
        </form>
    );
};

export default Form;