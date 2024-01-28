import React from 'react';
import classes from './GetInTouch.module.scss'

const GetInTouch = () => {
    return (
        <div className={classes.container}>
            <div className={classes.container_heading}>
                <h4>From a studio in London to a global brand with
                    over 400 outlets</h4>
                <p>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.<br/> <br/>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                <button>Get in touch</button>
            </div>
            <img src={'/img/decor.jpg'}/>
        </div>
    );
};

export default GetInTouch;