import React from 'react';
import styles from './../css/PublicationsSection.module.css';
import Publication from './Publication';

export default function PublicationSection(){
    return(
        <section className={styles.PublicationsSection}>
            <h2 className={styles.Tittle}>Publicações</h2>
            <div className={styles.PublicationsArea}>
                <div className={styles.Publications}>
                <Publication/>
                <Publication/>
                </div>
            </div>
        </section>
    )
}