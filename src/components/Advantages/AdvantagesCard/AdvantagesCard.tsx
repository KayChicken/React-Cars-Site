import React from 'react';
import styles from './AdvantagesCard.module.css'


interface AdvantagesCardProps {
    children?: React.ReactNode,
    title : string,
    desc : string
}


const AdvantagesCard: React.FC<AdvantagesCardProps> = ({ children,title,desc }) => {


    

    return (
        <div className={styles.container}>
            <div className={styles.upperContent}>
                {children}
                <div className={styles.title}>{title}</div>
            </div>
            <div className={styles.desc}>
                {desc}
            </div>

        </div>
    );
};

export default AdvantagesCard;