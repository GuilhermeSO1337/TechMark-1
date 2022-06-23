import styles from "./../css/CommentSection.module.css";
import { Icon } from '@iconify/react';

export default function CommentSection(){
    return(
    <section className={styles.CommentSection}>
        <form className={styles.InsertCommentBox}>
                <Icon className={styles.ProfilePicture} icon="carbon:user-avatar-filled-alt"/>
                <input className={styles.CommentField} type="text" name="Coment"/>
                <Icon className={styles.SendComment} icon="fluent:send-16-filled" />
                <hr/>
        </form>
        <div className={styles.CommentsArea} >
        </div>
    </section>
    )
}