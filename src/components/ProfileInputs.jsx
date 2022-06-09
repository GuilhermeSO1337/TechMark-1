import React from 'react';
import style from './../css/InputProfile.module.css';
import { Icon } from '@iconify/react';

export default function ProfileInputs(){
    return(
        <div className={style.InputContainer}>
            <form action="">
                <input type='submit' value='Seguir'/>
            </form>
            <button><Icon icon="bi:send-fill" width='24px'/></button>
        </div>
    );
}