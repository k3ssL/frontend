import React from 'react';
import classes from './Banner.module.scss'

const Banner = () => {
    return (
        <section className={classes.container}>
            <div className={classes.container_heading}>
                <h2>The furniture brand for the future, with timeless designs</h2>
                <button>View collection</button>
            </div>
            <p>A new era in eco friendly furniture with Avelon, the French luxury retail brand
                with nice fonts, tasteful colors and a beautiful way to display things digitally
                using modern web technologies.</p>
            <img src={'/img/chair.jpg'}/>

        </section>
    );
};

export default Banner;