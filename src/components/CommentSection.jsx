import styles from "./../css/CommentSection.module.css";
import { Icon } from '@iconify/react';
import ClientComment from "./ClientComment";
import ProfilePictureAdriana from "./../img/CommentProfilePictures/Adriana_profile.jfif"

let ClientComments =[{
    UserName : "Adriana M. Pavaro",
    UserProfilePicture: ProfilePictureAdriana,
    Comment : "Para vocês um beijo e um pão de queijo!",
    Time : "16 Agosto de 2023 15:15"
},{
    UserName : "Adriana M. Pavaro",
    UserProfilePicture:"",
    Comment : "Para vocês um beijo e um pão de queijo!",
    Time : "18 Agosto de 2023 15:15"
}]

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
            <div className={styles.Comment}>
                <ClientComment {...ClientComments[0]}/>
            </div>
        </div>
    </section>
    )
}