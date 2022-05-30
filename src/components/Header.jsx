import React from "react";
import Logo from './../logo.svg';
import styles from './../css/header.module.css';
import { Icon } from '@iconify/react';
import Switch from '@mui/material/Switch';
gitgimport MenuIcon from '@mui/icons-material/Menu';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <div className={styles.TopSection}>
                    <a href="#home"><img className={styles.Logo} src={Logo} alt='Logo techmark' /></a>
                    <div className={styles.Icons}>
                        <Icon className={styles.DarkMode} icon="gg:dark-mode" />
                        <Icon className={styles.Accessibility} icon="radix-icons:accessibility" />
                        <Icon className={styles.UserProfile} icon="carbon:user-avatar-filled-alt" />
                    </div>
                    <div className={styles.Mobile}>
                        <Icon className={styles.MobileSearchIcon} icon="akar-icons:search" />
                        <MenuIcon className={styles.MenuBtn} id='Button' />
                    </div>
                </div>
                <hr className={styles.Hr} />
                <ul className={styles.MenuDisplay}>
                    <li>Usuário</li>
                    <li>Acessibilidade</li>
                    <li>Tema <Switch id='SwitchButton' /></li>
                </ul>
                <form action="">
                    <div className={styles.SearchContainer}>
                        <div className={styles.SearchBox}>
                            <input className={styles.Search} type='text' placeholder='Faça uma pesquisa' />
                            <Icon className={styles.SearchIcon} icon="akar-icons:search" />
                        </div>
                    </div>
                </form>
            </header>
        );
    }
}