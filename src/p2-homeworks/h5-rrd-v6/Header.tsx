import React from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import burger from './burger.svg';

type HeaderPropsType = {
    open: boolean;
    handleClose: () => void;
    handleOpen: () => void;
}

function Header(props: HeaderPropsType) {
    const navClass = styles.nav + (props.open ? ' ' + styles.open : '');

    const navLinkClass = (navData: { isActive: boolean; isPending: boolean; }) => navData.isActive ? styles.active : '';

    return (
        <div>
            <div className={styles.burger}><img onClick={props.handleOpen} src={burger} alt=""/></div>
            {props.open && <div className={styles.background} onClick={props.handleClose}/>}
            <nav id={'hw5-menu'} className={navClass}>
                <NavLink
                    id={'hw5-pre-junior-link'}
                    to={PATH.PRE_JUNIOR}
                    onClick={props.handleClose}
                    className={navLinkClass}
                >
                    Pre-junior
                </NavLink>
                <NavLink
                    id={'hw5-junior-link'}
                    to={PATH.JUNIOR}
                    onClick={props.handleClose}
                    className={navLinkClass}
                >
                    Junior
                </NavLink>
                <NavLink
                    id={'hw5-junior-plus-link'}
                    to={PATH.JUNIOR_PLUS}
                    onClick={props.handleClose}
                    className={navLinkClass}
                >
                    Junior Plus
                </NavLink>
            </nav>

        </div>
    );
}

export default Header;
