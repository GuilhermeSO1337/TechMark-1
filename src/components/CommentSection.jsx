import styles from "./../css/CommentSection.module.css";
import { Icon } from '@iconify/react';
import ClientComment from "./ClientComment";

export default function CommentSection(){
    return(
    <section className={styles.CommentSection}>
        <form className={styles.InsertCommentBox}>
                <Icon className={styles.ProfilePicture} icon="carbon:user-avatar-filled-alt"/>
                <input className={styles.CommentField} type="text" name="Coment"/>
                <Icon className={styles.SendComment} icon="fluent:send-16-filled" />
        </form>
        <div className={styles.CommentsArea}>
            <hr/>
            <div className={styles.CommentFilter}>
                <div className={styles.RateFilter}>
                    <p>Avaliações(1208)</p>
                    <Icon icon="akar-icons:chevron-down" width="30px" color="#525252" cursor="pointer" />
                </div>
                <Icon icon="bi:filter-right" width="40px" color="#525252" cursor="pointer"/>
            </div>
            <ClientComment/>
        </div>
    </section>
    )
}