import React from 'react';
import styles from './Archive.module.css';
import archivePhoto_1 from '../../assets/archive-photo-1.jpeg';
import archivePhoto_2 from '../../assets/archive-photo-2.jpeg';
import archivePhoto_3 from '../../assets/archive-photo-3.jpeg';
import archivePhoto_4 from '../../assets/archive-photo-4.jpeg';
import archivePhoto_5 from '../../assets/archive-photo-5.jpeg';
import archivePhoto_6 from '../../assets/archive-photo-6.jpeg';

const Archive= () => {
    return (
        <div className={styles.archiveContainer}>
            <div className={styles.archiveColumn}>
                <img className={styles.archivePhoto} src={archivePhoto_1}/>
                <img className={styles.archivePhoto} src={archivePhoto_2}/>
            </div>
            <div className={styles.archiveColumn}>
                <div className={styles.archivePhoto3Container}>
                    <img className={`${styles.archivePhoto} ${styles.archivePhoto3}`} src={archivePhoto_3}/>
                </div>
                <img className={styles.archivePhoto} src={archivePhoto_4}/>
            </div>
            <div className={styles.archiveColumn}>
                <img className={styles.archivePhoto} src={archivePhoto_5}/>
                <img className={styles.archivePhoto} src={archivePhoto_6}/>
            </div>
        </div>
    );
};

export default Archive;