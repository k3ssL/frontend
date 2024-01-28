import React from 'react';
import classes from './PropularProducts.module.scss'
import ProductItem from "../../shared/UI/ProductItem/ProductItem";
import Button from "../../shared/UI/Button/Button";

const PopularProducts = () => {
    return (
        <section className={classes.container}>
            <h3>Our popular products</h3>
            <div className={classes.container_items}>
                <ProductItem img={'/img/Large.png'} name={'The Dandy chair'} price={'£250'}/>
                <ProductItem img={'/img/chair.jpg'} name={'Rustic Vase Set'} price={'£155'}/>
                <ProductItem img={'/img/chair2.jpg'} name={'The Silky Vase'} price={'£125'}/>
            </div>
            <Button/>
        </section>
    );
};

export default PopularProducts;