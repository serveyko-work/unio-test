import React, { FC, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FirstScreen from '../../components/Home/FirstScreen/FirstScreen';
import styles from './Home.module.scss';
import SecondScreen from '../../components/Home/SecondScreen/SecondScreen';
import ThirdScreen from '../../components/Home/ThirdScreen/ThirdScreen';
import FourthScreen from '../../components/Home/FourthScreen/FourthScreenScreen';
import FifthScreen from '../../components/Home/FifthScreen/FifthScreen';
import OurAdvantages from '../../components/Home/OurAdvantages/OurAdvantages';
import OurProductsBlock from '../../components/Home/OurProductsBlock/OurProductsBlock';
import HeartBlock from '../../components/Home/HeartBlock/HeartBlock';

const Home: FC = (): JSX.Element => {
  return (
    <div className={styles.home}>
      <FirstScreen/>
      <SecondScreen/>
      <ThirdScreen/>
      <FourthScreen/>
      <FifthScreen/>
      <OurAdvantages/>
      <OurProductsBlock/>
      <HeartBlock/>
    </div>
  );
};

export default Home;