import React from 'react';
import styles from './About.module.css';
import aboutPhoto from '../../assets/about-photo.jpeg';

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <div>
                <img className={styles.aboutPhoto} src={aboutPhoto}/>
            </div>
            <div className={styles.aboutText}>
                PRULULLA ORIGINATED FROM RESEARCH AND EXPERIMENTATION CONDUCTED ON SOVIET BYT: HOUSEHOLD SPACES AND TEXTILES. INCORPORATING ELEMENTS OF CONSTRUCTIVISM AND ITS DESIGN METHODOLOGY PRULULLA'S MOST EMBLEMATIC PIECE, VATNIK WRAPAROUND JACKET WAS BORN. INSPIRED BY CONSTRUCTIVIST ARTISTS WE FIND SYNTHESIS BETWEEN UTILITARIANISM AND ART. BY APPLYING ARTISTIC RESEARCH AND CRITICAL DESIGN TO PRACTICAL OBJECTS WE APPROACH THE PROCESS OF MAKING AS THE DRIVING FORCE THAT HELPS TO EMERGE FROM SITUATIONS OF CRISIS AND UNCERTAINTY. 
            </div>
        </div>
    );
};

export default About;