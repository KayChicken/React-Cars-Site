import React from 'react';
import Header from './components/Header/Header';
import styles from './App.module.css'
import CarMusk from './components/CarMusk/CarMusk';
import Ladder from './components/Ladder/Ladder';
import Achievements from './components/Achievements/Achievements';
import Slider from './components/Slider/Slider';
import Advantages from './components/Advantages/Advantages';
import Services from './components/Services/Services';
import OurWorks from './components/OurWorks/OurWorks';
import Questions from './components/Questions/Questions';
import Footer from './components/Footer/Footer';
import './App.scss'


const App = () => {
  return (
    <>
        <Header />
        <Achievements />
        <Slider/>
        <Advantages position='left'/>
        <Services/>
        <Advantages position='right'/>
        <OurWorks/>
        <Questions/>
        <Footer/>
      
      
    </>
  );
};

export default App;