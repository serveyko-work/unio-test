import React from 'react';
import styles from './FifthScreen.module.scss';
import TitleWithSubtitle from '../TitleWithSubtitle/TitleWithSubtitle';
import Button from '../../UI/Button/Button';

const FifthScreen = (): JSX.Element => {
  return (
    <div className={styles.fifthScreen} data-aos="fade-up" data-aos-delay="200">
      <TitleWithSubtitle
        title={`several ways to get cryptocurrency`}
        subtitle={`Buy bitcoin and other altcoins in a couple of clicks - no special knowledge required`}
      />
      <div className={styles.cryptoWrapper}>
        <div className={styles.cryptoBlock}>
          <div className={styles.cryptoWrap}>
            <h3 className={styles.subtitle}>Buy with</h3>
            <h2 className={styles.title}>Visa/MasterCard</h2>
            <p className={styles.description}>Safe and fast way to get cryptocurrency</p>
            <Button text={'Open account'}/>
          </div>
        </div>
        <div className={styles.cryptoBlock}>
          <div className={styles.cryptoWrap}>
            <h3 className={styles.subtitle}>Buy crypto</h3>
            <h2 className={styles.title}>in local currency at P2P</h2>
            <p className={styles.description}>Commission always 0%</p>
            <Button text={'Buy now'}/>
          </div>
        </div>
      </div>
    </div>
  )
    ;
};

export default FifthScreen;