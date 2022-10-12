import React from 'react';
import errorImg from './404.svg';
import styles from './Error404.module.css';

function Error404() {
    return (
        <div className={styles.wrapper}>
            <img src={errorImg} alt=""/>
        </div>
    );
}

export default Error404;
