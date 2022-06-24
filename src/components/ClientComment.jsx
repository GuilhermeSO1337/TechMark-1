import styles from "./../css/Comment.module.css";

export default function ClientComment(comment){
    return(
        <div className={styles.Comment}>
            <img src={comment.UserProfilePicture} alt=""/>
            <h2>{comment.UserName}</h2>
            <p className={styles.CommentText}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur distinctio quisquam eaque eligendi, voluptas delectus fugiat sed ad. Nobis ipsa quam laboriosam? Provident consectetur optio ad est dicta aut quasi.</p>
            <div className={styles.Time}>
                <p>{comment.Time}</p>
            </div>
        </div>
    );
}