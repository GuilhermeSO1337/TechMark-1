import React from 'react';
import styles from './../css/ProfileHeader.module.css';
import { Icon } from '@iconify/react';
import './../img/Profile_Picture.jpg';
import Profile from './CommerceProfile';

export default function ProfileHeader(){
    return(
        <div>
            <div className={styles.Cover}>
                <div className={styles.Banner}>
                </div>
                <div className={styles.BannerIcons}>
                    <Icon icon="akar-icons:whatsapp-fill" className={styles.WhatsappIcon}/>
                    <Icon icon="akar-icons:instagram-fill" className={styles.InstagramIcon} />
                    <Icon icon="akar-icons:facebook-fill" className={styles.FacebookIcon}/>
                </div>
            </div>
            <div className={styles.ProfileFlexPosition}>
                <div className={styles.ProfilePosition}>
                    <Profile/>
                </div>
            </div>
        </div>
    );
} 