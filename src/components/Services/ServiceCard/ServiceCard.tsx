import React from 'react';
import styles from './ServiceCard.module.css'

interface ServiceCardProps {
    img?: string,
    title?: string,
    desc?: string
}


const ServiceCard: React.FC<ServiceCardProps> = ({ img, title, desc }) => {
    return (
        <div className={styles.container}>
            <div className={styles.img_container}>
                <img src={require(`../../../img/services/pasting/${img}`)} alt="" className={styles.img} />
            </div>
            <div className={styles.title}>{title}</div>
            <div className={styles.desc}>{desc}</div>
            <div className={styles.service_btn}>Подробнее</div>
        </div>
    );
};

export default ServiceCard;