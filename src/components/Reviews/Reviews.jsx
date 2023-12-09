import React from 'react';
import classes from './Reviews.module.css'
import ReviewCard from "./UI/ReviewCard/ReviewCard";

const Reviews = () => {
    return (
        <div className={classes.container}>
            <h2>Отзывы</h2>
            <ReviewCard
                reviewName={'Игорь Антонов'}
                reviewText={'Обратилась к Aveji по рекомендации. Команда сразу поняла, какой дизайн я хочу. Предоставили несколько вариантов и в течение недели сделали наброски. Итог понравился, все навысшем уровне.'}
            />
            <ReviewCard
                reviewName={'Ольга Иванова'}
                reviewText={'После пары заказов у компании Aveji убедилась, что за мебелью теперь только к ним. Абсолютно любые решения, в любых размерах и форм-факторе, то что нужно!'}
            />
            <ReviewCard
                reviewName={'Аркадий Макаров'}
                reviewText={'Aveji — настоящие профессионалы своего дела. Быстро поняли мою задумку, сделали дизайн, согласовали и изготовили мебель. А потом еще и бесплатно все собрали на месте. Большое спасибо!'}
            />
        </div>
    );
};

export default Reviews;