import React from 'react';
import styles from './../css/PublicationsSection.module.css';
import Publication from './Publication';
import image from './../img/Limpeza.jpg';
let publication= [{
    profilePicture:'static/media/Profile_Picture.2a28de9cc240c3058614.jpg',
    tittle:'Alteração no horário',
    description:'Nesta segunda-feira (23/05) estaremos abertos somente até as 18h.'
},{
profilePicture:'static/media/Profile_Picture.2a28de9cc240c3058614.jpg',
tittle:'Limpe seu computador:',
description:'Você sabia que a limpeza de seu computador pode prolongar a vida util do equipamento? ',
image: image,
}
]


export default function PublicationSection(){
    return(
        <section className={styles.PublicationsSection}>
            <h2 className={styles.Tittle}>Publicações</h2>
            <div className={styles.PublicationsArea}>
                <div className={styles.Publications}>
                <Publication {...publication[0]}/>
                <Publication {...publication[1]}/>
                </div>
            </div>
        </section>
    )
}