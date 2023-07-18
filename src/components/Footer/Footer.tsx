import React from 'react';
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footer_content}>
                    <div className={styles.copyright}>2022 © Est et viverra pellentesque pharetra lorem proin in. Vitae magna at tempus commodo.</div>
                    <div className={styles.links}>
                        <a href="#">Главная</a>
                        <a href="#">Оклейка автомобилей</a>
                        <a href="#">Детейлинг автомобилей</a>
                        <a href="#">Галерея работ</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;