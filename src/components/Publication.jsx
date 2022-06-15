import styles from './../css/Publication.module.css'


export default function Publication(props){
    console.log(props.media)
    return(
        <div className={styles.Publication}>
            <img src={props.profilePicture} className={styles.ProfilePicture} alt=''/>
            <div className={styles.Content}>
                <h2>{props.tittle}</h2>
                <p>{props.description}</p>
                <img src={props.media} alt='' className={styles.Media}/>
            </div>
        </div>
    );
}


// function media(media){
//       if(media == video){
//             <video autoPlay={true} muted={true}>
//                 <source src={props.media} type='video/mp4' className={styles.MediaVideo}/>
//             </video>
//     }
// }