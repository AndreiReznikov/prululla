import React from 'react';
import contactPhoto from '../../assets/contact-photo.jpg';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <div className={styles.contactContainer}>
            <div>
                <img className={styles.contactPhoto} src={contactPhoto}/>
            </div>
            <div>
                <a className={styles.mail} href='mailto:info@prululla.com'>
                    info@prululla.com
                </a>
            </div>
        </div>
    );
};

export default Contact;