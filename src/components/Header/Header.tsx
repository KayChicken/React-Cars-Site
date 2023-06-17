import React from 'react';
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.container}>
            <div>
                <a className={styles.link} href="#">Главная</a>
                <a className={styles.link} href="#">Оклейка автомобилей</a>
                <a className={styles.link} href="#">Детейлинг автомобилей</a>
                <a className={styles.link} href="#">Галерея работ</a>
            </div>
            <div className={styles.burger}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
        </div>
    );
};

export default Header;