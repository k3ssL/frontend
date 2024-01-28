import React from 'react';
import classes from './Ceramics.module.scss'
import ProductItem from "../../shared/UI/ProductItem/ProductItem";
import Button from "../../shared/UI/Button/Button";

const Ceramics = () => {
    return (
        <section className={classes.container}>
            <h3>New ceramics</h3>
           <div className={classes.container_items}>
                <ProductItem img={'/img/chair.jpg'} name={'The Dandy chair'} price={'£250'}/>
                <ProductItem img={'/img/vase.jpg'} name={'Rustic Vase Set'} price={'£155'}/>
                <ProductItem img={'/img/vase2.jpg'} name={'The Silky Vase'} price={'£125'}/>
                <ProductItem img={'/img/lamp.jpg'} name={'The Lucy Lamp'} price={'£399'}/>
           </div>
            <Button/>
        </section>
    );
};

export default Ceramics;