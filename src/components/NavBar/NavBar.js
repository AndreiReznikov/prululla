import React from 'react';
import logo from '../../assets/prululla-logo.png';
import cartLogo from '../../assets/bag-cart.svg';
import styles from './NavBar.module.css';
import { ABOUT_ROUTE, ARCHIVE_ROUTE, CONTACT_ROUTE, HOME_ROUTE, SHOP_ROUTE, CART_ROUTE } from '../../utils/consts';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
       <header className={styles.header}>
           <div>
                <Link to={HOME_ROUTE}>
                    <img className={styles.logo} src={logo}/>    
                </Link> 
           </div>
           <div className={styles.navContainer}>
               <div className={styles.cartContainer}>
                    <Link to={CART_ROUTE}>
                        <img className={styles.cartLogo} src={cartLogo}/>
                    </Link>
                    <span className={styles.cartCount}>0</span>
               </div>
               <nav className={styles.navbar}>
                   <Link to={HOME_ROUTE}>Home</Link>                  
                   <Link to={SHOP_ROUTE}>Shop</Link>                  
                   <Link to={ARCHIVE_ROUTE}>Archive</Link>                  
                   <Link to={ABOUT_ROUTE}>About</Link>                  
                   <Link to={CONTACT_ROUTE}>Contact</Link>                  
               </nav>
           </div>
       </header>
    );
};

export default NavBar;