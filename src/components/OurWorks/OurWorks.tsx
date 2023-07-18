import React from 'react';
import styles from './OurWorks.module.css'
import Squares from '../Decoration/Squares/Squares';

const OurWorks = () => {

    const images = ['car1.png','car2.png','car3.png','car4.png','car5.png','car6.png' , 'car6.png','car5.png','car4.png','car3.png','car2.png','car1.png', 'car1.png','car2.png','car3.png','car4.png','car5.png','car6.png']



    return (
        <div className={styles.works}>
            <div className={styles.container}>
                <div className={styles.title}>Наши работы</div>
                <Squares />
            </div>
            <div className={styles.images}>
                {images.map((img) => (
                    <div className={styles.img_container}>
                        <img src={require(`../../img/ourWorks/${img}`)} alt="" className={styles.img}/>
                    </div>
                    
                ))}
            </div>

        </div>
    );
};

export default OurWorks;