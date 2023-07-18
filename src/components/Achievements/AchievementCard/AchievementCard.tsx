import React from 'react';
import styles from './AchievementCard.module.css'

interface IAchievementCardProps {
    title : string
    description : string
}


const AchievementCard : React.FC<IAchievementCardProps> = ({title,description}) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>#1</div>
            <div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui </div>
        </div>
    )
}


export default AchievementCard;