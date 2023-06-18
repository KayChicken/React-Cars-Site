import React from 'react';
import styles from './Header.module.css'
import CarMusk from '../CarMusk/CarMusk';
import Ladder from '../Ladder/Ladder';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.section}>
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
                    <CarMusk />
                </div>
                <Ladder/>
            </div>
            
        </div>
        
    );
};

export default Header;