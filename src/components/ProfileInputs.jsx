import styles from './../css/InputProfile.module.css';
import { Icon } from '@iconify/react';

export default function ProfileInputs(){
    return(
        <div className={styles.InputContainer}>
            <form action="">
                <input type='submit' value='Seguir'/>
            </form>
            <button><Icon icon="bi:send-fill" width='24px'/></button>
        </div>
    );
}