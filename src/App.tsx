import React from 'react';
import Header from './components/Header/Header';
import styles from './App.module.css'
import CarMusk from './components/CarMusk/CarMusk';
import Ladder from './components/Ladder/Ladder';



const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <Header />
        <CarMusk />
        <Ladder />
      </div>

    </div>
  );
};

export default App;