import React, { useEffect, useRef, useState } from 'react';
import styles from './Header.module.css'
import CarMusk from '../CarMusk/CarMusk';
import Ladder from '../Ladder/Ladder';

const Header = () => {

    const [isOpenBurger, setOpenBurger] = useState<boolean>(false)
    const burger = useRef<HTMLDivElement>(null)
    


  
    useEffect(() => {

        const handleClick = (e : any) => {
            if (!burger.current) return;
            if (!burger.current.contains(e.target)) {
                setOpenBurger(false)
                return
            }
            setOpenBurger(!isOpenBurger)
        }



        document.addEventListener('click', handleClick)

        return () => {
            document.removeEventListener('click', handleClick)
        }

    },[isOpenBurger])
   


    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.section}>
                    <div className={`${styles.header__nav} ${isOpenBurger ? styles.open : ''}`}>
                        <div className={`${styles.links}`}>
                            <a className={styles.link} href="#">Главная</a>
                            <a className={styles.link} href="#">Оклейка автомобилей</a>
                            <a className={styles.link} href="#">Детейлинг автомобилей</a>
                            <a className={styles.link} href="#">Галерея работ</a>
                        </div>
                        <div className={styles.burger} ref={burger}>
                            <div className={styles.line}></div>
                            <div className={styles.line}></div>
                            <div className={styles.line}></div>
                        </div>
                    </div>


                    <CarMusk />
                </div>
                <Ladder />
            </div>

        </div>

    );
};

export default Header;