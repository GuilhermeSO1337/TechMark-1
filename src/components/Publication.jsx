import React from 'react';
import styles from './../css/Publication.module.css'


export default function Publication(props){
     if(props.image){

     }
    return(
        <div className={styles.Publication}>
            <img src={props.profilePicture} className={styles.ProfilePicture} alt=''/>
            <div className={styles.Content}>
                <h2>{props.tittle}</h2>
                <p>{props.description}</p>
                <img src={props.image} alt='' className={styles.Media}/>
            </div>
        </div>
    );
}