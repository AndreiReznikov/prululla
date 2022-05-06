import React from 'react';
import styles from './Home.module.css';
import home_photo_1 from '../../assets/home-photo-1.jpg';
import home_photo_2 from '../../assets/home-photo-2.jpg';
import home_photo_3 from '../../assets/home-photo-3.jpg';
import home_photo_4 from '../../assets/home-photo-4.jpg';

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <p>Closest Beach series photographed by Esattitudine</p>
            <img className={styles.homePhoto} src={home_photo_1} />
            <img className={styles.homePhoto} src={home_photo_2} />
            <img className={styles.homePhoto} src={home_photo_3} />
            <img className={styles.homePhoto} src={home_photo_4} />
            <p className={styles.bottomText}>Utilitarian elegance</p>
        </div>
    );
};

export default Home;