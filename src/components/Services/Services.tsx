import React, { useState } from 'react';
import styles from './Services.module.css'
import Squares from '../Decoration/Squares/Squares';
import ServiceCard from './ServiceCard/ServiceCard';


const Services = () => {

    const [chooseBtn, setBtn] = useState<number>(0)

    const handleBtn = (index: number) => {
        setBtn(index)
    }


    return (
        <div className={styles.services}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.title}>Наши услуги</div>
                    <Squares />
                    <div className={styles.btnContainer}>
                        <div className={`${styles.service_btn} ${chooseBtn === 0 ? styles.active : ''}`} onClick={() => { handleBtn(0) }}>Оклейка</div>
                        <div className={`${styles.service_btn} ${chooseBtn === 1 ? styles.active : ''}`} onClick={() => { handleBtn(1) }}>Детейлинг</div>
                    </div>
                    <div className={styles.servicesCards}>
                        {chooseBtn === 0 ?
                            <div className={styles.service_content}>
                                <ServiceCard img='sponge.png' title='Защитные пленки' desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat." />
                                <ServiceCard img='carTask.png' title='Цветные пленки' desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat." />
                                <ServiceCard img='bulba.png' title='Дизайн' desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat." />
                                <ServiceCard img='carClean.png' title='Оклейка салона' desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat." />
                            </div> :
                            <div className={styles.service_content}>

                                <ServiceCard img='carClean.png' title='Оклейка салона' desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat." />
                                <ServiceCard img='bulba.png' title='Дизайн' desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat." />
                                <ServiceCard img='carTask.png' title='Цветные пленки' desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat." />
                                <ServiceCard img='sponge.png' title='Защитные пленки' desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat." />

                            </div>}
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Services;