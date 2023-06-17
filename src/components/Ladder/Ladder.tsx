import React from 'react';
import styles from './Ladder.module.css'


interface ILadderProps {
    title: string;
    description: string[]
}



const LadderCard: React.FC<ILadderProps> = ({ title, description }) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.content}>
                <div className={styles.title}>{title}</div>
                {description.map((desc) => (
                    <div className={styles.description}>{desc}</div>
                ))}
            </div>
        </div>
    );
}






const Ladder = () => {
    return (
        <div className={styles.container}>
            <LadderCard title="адрес:" description={['Lorem ipsum dolor sit amet, consectetur adipiscing elit']} />
            <LadderCard title="телефон:" description={['8 (812) 123-45-67', '8-911-123-45-67']} />
            <LadderCard title="режим работы:" description={["пн-пт : 10:00 - 20:00", "сб-вск : 12:00 - 20:00"]} />
        </div>
    );
};

export default Ladder;