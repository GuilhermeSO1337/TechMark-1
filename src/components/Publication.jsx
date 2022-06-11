import React from 'react';
import styles from './../css/Publication.module.css'

let PublicationProps ={
    profilePicture:'static/media/Profile_Picture.2a28de9cc240c3058614.jpg',
    tittle :'Alteração no horário:',
    image : null,
    description: 'Nesta segunda-feira (23/05) estaremos abertos somente até as 18h.',
}

export default function Publication(){
    return(
        <div className={styles.Publication}>
            <img src={PublicationProps.profilePicture} className={styles.ProfilePicture} alt=''/>
            <div className={styles.Content}>
                <h2>{PublicationProps.tittle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aliquam quia odio molestiae dolore quas sunt delectus earum quam inventore, optio voluptatum tenetur repellat accusantium maiores impedit quae. Alias, consequuntur!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex enim quisquam impedit culpa, aspernatur totam quod nisi molestias alias cupiditate velit commodi eum fuga libero numquam! Maxime architecto cumque aperiam.
                    Suscipit harum, tempora qui iure quos laboriosam deserunt odit libero animi, aperiam tenetur provident quidem est fugiat itaque placeat enim voluptas? Error veritatis ratione asperiores neque id aliquam. Sequi, odio!
                    Veritatis libero nesciunt id nulla, fugit aliquid corrupti quo officia explicabo similique architecto, quod nobis velit dignissimos hic necessitatibus, esse distinctio quae perspiciatis. Vero modi saepe reiciendis, repellendus ullam ratione.
                </p>
            </div>
        </div>
    );
}