import React from 'react';
import classes from './Header.module.scss'

const Header = () => {
    return (
        <header className={classes.container}>
          <div className={classes.container_top_nav}>
                <img src={'/img/Search.jpg'}/>
                <img src={'/img/logo.png'}/>
              <div className={classes.container_top_nav_profile}>
                  <img src={'/img/box.png'}/>
                  <img src={'/img/user.png'}/>
               </div>
          </div>
            <hr/>
            <div className={classes.container_main_links}>
                <p>Product Listing</p>
                <p>About Page</p>
                <p>Shopping baskets</p>
                <p>Product Listings</p>
            </div>
        </header>
    );
};

export default Header;