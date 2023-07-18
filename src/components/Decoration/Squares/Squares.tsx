import React from 'react';
import styles from './Squares.module.css'

const Squares = () => {
    return (
        <div className={styles.decorationContainer}>
            <div className={styles.square}></div>
            <div className={styles.square}></div>
            <div className={styles.square}></div>
            <div className={styles.square}></div>
        </div>
    );
};

export default Squares;