import React from 'react';
import HeroImage from '../../assets/vibrating-headphone 1.png';
import styles from './HeroSection.module.css'

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        < div classname={styles.heroContent1}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands of podcast episodes</h1>
      </div>
      <div><img src={HeroImage} alt="Logo"  height ="212px" width= "212px"/></div>
      </div>
    </div>
  );
};

export default HeroSection;
