import React from 'react';
import classes from './Footer.module.scss'
import Form from "../../shared/UI/Form/Form";

const Footer = () => {
    return (
        <footer className={classes.container}>
            <div className={classes.container_nav}>
                <div className={classes.container_nav_top_part}>
                    <div className={classes.container_nav_top_part_menu}>
                        <h4>Menu</h4>
                        <p>New arrivals</p>
                        <p>Best sellers</p>
                        <p>Recently viewed</p>
                        <p>Popular this week</p>
                        <p>All products</p>
                    </div>
                    <div className={classes.container_nav_top_part_categories}>
                        <h4>Categories</h4>
                        <p>Crockery</p>
                        <p>Furniture</p>
                        <p>Homeware</p>
                        <p>Plant pots</p>
                        <p>Chairs</p>
                        <p>Crockery</p>
                    </div>
                    <div className={classes.container_nav_top_part_our}>
                        <h4>Our company</h4>
                        <p>About us</p>
                        <p>Vacancies</p>
                        <p>Contact us</p>
                        <p>Privacy</p>
                        <p>Returns policy</p>
                    </div>
                    <div className={classes.container_nav_top_part_form}>
                        <h3>Join our mailing list</h3>
                        <Form className={classes.container_nav_top_part_form_inp_btn}/>
                    </div>
                </div>
                <hr/>
                <div className={classes.container_nav_bottom_part}>
                        <p>Copyright 2022 Avion LTD</p>
                        <div className={classes.container_nav_bottom_part_icons}>
                            <img src={'/img/linkedin.png'}/>
                            <img src={'/img/facebook.png'}/>
                            <img src={'/img/instagram.png'}/>
                            <img src={'/img/skype.png'}/>
                            <img src={'/img/twitter.png'}/>
                            <img src={'/img/pinterest.png'}/>
                        </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;