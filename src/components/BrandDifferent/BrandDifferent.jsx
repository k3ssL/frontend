import React from 'react';
import classes from './BrandDifferent.module.scss'
import BrandDifferentItem from "./UI/BrandDifferentItem/BrandDifferentItem";

const BrandDifferent = () => {
    return (
        <section className={classes.container}>
            <h3>What makes our brand different</h3>
            <div className={classes.container_differents}>
                <BrandDifferentItem
                    img={'/img/delivery.png'}
                    title={'Next day as standard'}
                    text={'Order before 3pm and get your orderthe next day as standard'} />
                <BrandDifferentItem
                    img={'/img/check.png'}
                    title={'Made by true artisans'}
                    text={'Handmade crafted goods made with real passion and craftmanship'}
                />
                <BrandDifferentItem
                    img={'/img/card.png'}
                    title={'Unbeatable prices'}
                    text={'For our materials and quality you won’t find better prices anywhere'}
                />
                <BrandDifferentItem
                    img={'/img/eco.png'}
                    title={'Recycled packaging'}
                    text={'We use 100% recycled packaging to ensure our footprint is manageable'}
                />
            </div>
        </section>
    );
};

export default BrandDifferent;