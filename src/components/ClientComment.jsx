import styles from "./../css/Comment.module.css";

export default function ClientComment(comment){
    return(
        <div className={styles.Comment}>
            <img src={comment.UserProfilePicture} alt=""/>
            <h2>{comment.UserName}</h2>
            <p className={styles.CommentText}>{comment.Comment}</p>
            <div className={styles.Time}>
                <p>{comment.Time}</p>
            </div>
        </div>
    );
}