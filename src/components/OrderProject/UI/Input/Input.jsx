import React from 'react';
import classes from './Input.module.css'

const Input = ({placeholder}) => {
    return (
        <input placeholder={placeholder}/>
    );
};

export default Input;