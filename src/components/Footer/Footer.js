import React from "react";
import styles from './Footer.module.css';
import facebookLogo from '../../assets/facebook-logo.svg';
import instagramLogo from '../../assets/instagram-logo.svg';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.socialContainer}>
                <a href="https://instagram.com/prululla" target="_blank">
                    <img className={styles.socialLogo} src={instagramLogo} />
                </a>
                <a href="https://facebook.com/prululla" target="_blank">
                    <img className={styles.socialLogo} src={facebookLogo} />
                </a>
            </div>
            <p className={styles.footerFirstText}>Prululla will email you if you like</p>
            <p className={styles.footerSecondText}>Sign up with your email address to receive news and updates.</p>
            <form className={styles.form} method="post">
                <input className={styles.input} placeholder="Email Address"/>
                <button className={styles.button} type="submit">Sign up</button>
            </form>
            <p className={styles.footerThirdText}>We respect your privacy.</p>
        </footer>
    );
};

export default Footer;