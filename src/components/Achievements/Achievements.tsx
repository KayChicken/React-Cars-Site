import React from 'react';
import styles from './Achievements.module.css'
import Squares from '../Decoration/Squares/Squares';
import AchievementCard from './AchievementCard/AchievementCard';






const Achievements = () => {
    return (
        <div className={styles.container}>
            <div className={styles.descriptionContainer}>
                <div className={styles.title}>наши достижения от кубка россии до чемпионатов мира</div>
                <Squares />
                <div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant tincidunt aliquam tincidunt pretium sodales. Tristique odio pellentesque et tincidunt posuere arcu purus lobortis risus. Urna, ut amet odio orci magnis praesent ultrices. Praesent malesuada lacus tellus tristique sit at. Sed viverra nulla nam arcu, non iaculis pretium, volutpat. </div>
            </div>
            <div className={styles.cardsContainer}>
                <div className={styles.cardColumn}>
                    <AchievementCard title='das' description='hell' />
                    <AchievementCard title='das' description='hell' />
                    <AchievementCard title='das' description='hell' />
                    <AchievementCard title='das' description='hell' />
                </div>
                <div className={styles.cardColumn}>
                    <AchievementCard title='das' description='hell' />
                    <AchievementCard title='das' description='hell' />
                    <AchievementCard title='das' description='hell' />
                    <AchievementCard title='das' description='hell' />
                </div>
            </div>
        </div>
    );
};

export default Achievements;