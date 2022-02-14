import React, { FC } from 'react';
import styles from './FirstScreen.module.scss';
import GradientText from '../../UI/GradientText/GradientText';
import Button from '../../UI/Button/Button';

const FirstScreen: FC = (): JSX.Element => {
  return (
    <div className={styles.firstScreen} data-aos="fade-up" data-aos-delay="200">
      <GradientText className={styles.buyAndSell} text={'Buy and sell cryptocurrency in minutes'}/>
      <p className={styles.transparent}>Transparent, Reliable, Innovative.</p>
      <div className={styles.buttons}>
        <Button className={styles.openButton} text={'Open account'}/>
        <Button className={styles.marketsButton} text={'Go to markets'}/>
      </div>
    </div>
  );
};

export default FirstScreen;