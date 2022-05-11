import React, { useContext, useState } from 'react';
import logo from '../../assets/prululla-logo.png';
import cartLogo from '../../assets/bag-cart.svg';
import styles from './NavBar.module.css';
import { ABOUT_ROUTE, ARCHIVE_ROUTE, CONTACT_ROUTE, HOME_ROUTE, SHOP_ROUTE, CART_ROUTE } from '../../utils/consts';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';

const NavBar = observer(() => {
    const { clothes } = useContext(Context)
    const totalCountInCart = clothes.cartItems.length

    const [mobileNavVisible, setMobileNavVisible] = useState(false)

    return (
       <div>
           {mobileNavVisible && 
           <nav className={styles.mobileNav}>
                <ul className={styles.mobileNavList}>
                    <li><Link onClick = {() => setMobileNavVisible(false)} to={HOME_ROUTE}>Home</Link></li>                  
                    <li><Link onClick = {() => setMobileNavVisible(false)} to={SHOP_ROUTE}>Shop</Link></li>                  
                    <li><Link onClick = {() => setMobileNavVisible(false)} to={ARCHIVE_ROUTE}>Archive</Link></li>                  
                    <li><Link onClick = {() => setMobileNavVisible(false)} to={ABOUT_ROUTE}>About</Link></li>                  
                    <li><Link onClick = {() => setMobileNavVisible(false)} to={CONTACT_ROUTE}>Contact</Link></li> 
                </ul>  
                <div className={styles.closeButton} onClick = {() => setMobileNavVisible(false)}>
                    <span></span>
                    <span></span>
                </div> 
            </nav>}
           <header className={styles.header}>
           <div className={styles.logoContainer}>
                <Link to={HOME_ROUTE}>
                    <img className={styles.logo} src={logo}/>    
                </Link> 
           </div>
           <div className={styles.navContainer}>
               <div className={styles.cartContainer}>
                    <Link to={CART_ROUTE}>
                        <img className={styles.cartLogo} src={cartLogo}/>
                    </Link>
                    <span className={styles.cartCount}>{totalCountInCart}</span>
               </div>
               <nav className={styles.navbar}>
                   <Link to={HOME_ROUTE}>Home</Link>                  
                   <Link to={SHOP_ROUTE}>Shop</Link>                  
                   <Link to={ARCHIVE_ROUTE}>Archive</Link>                  
                   <Link to={ABOUT_ROUTE}>About</Link>                  
                   <Link to={CONTACT_ROUTE}>Contact</Link>                  
               </nav>
           </div>
           <div className={styles.burger} onClick = {() => setMobileNavVisible(true)}>
                <span className={styles.burgerLine}></span>
                <span className={styles.burgerLine}></span>
                <span className={styles.burgerLine}></span>
           </div>
       </header>
       </div>
    );
});

export default NavBar;