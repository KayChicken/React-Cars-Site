import React from 'react';
import styles from './CarMusk.module.css'
import Squares from '../Decoration/Squares/Squares';
const CarMusk = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>CAR MUSC</div>
            <Squares/>
            <div className={styles.body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae orci urna amet penatibus.</div>

            <div className={styles.serviceBtn}>
                Наши услуги
            </div>


        </div>
    );
};

export default CarMusk;