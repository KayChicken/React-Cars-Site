import React from 'react';
import styles from './CarMusk.module.css'
const CarMusk = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>CAR MUSC</div>
            <div className={styles.decorationContainer}>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
            </div>
            <div className={styles.body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae orci urna amet penatibus.</div>
            <div className={styles.serviceBtnContainer}>
                <div className={styles.serviceBtn}>
                    Наши услуги
                </div>
            </div>

        </div>
    );
};

export default CarMusk;