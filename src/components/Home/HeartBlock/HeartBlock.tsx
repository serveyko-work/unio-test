import React, { FC } from 'react';
import styles from './HeartBlock.module.scss';
import IconTelegram from '../../UI/Icons/IconTelegram';
import IconMessage from '../../UI/Icons/IconMessage';
import IconSupport from '../../UI/Icons/IconSupport';
import GradientButton from '../../UI/GradientButton/GradientButton';
import cn from 'classnames';

const HeartBlock: FC = (): JSX.Element => {
  return (
    <div className={styles.heartBlock} data-aos="fade-up" data-aos-delay="200">
      <div className={styles.gradient}/>
      <img className={styles.heart} src={'./assets/images/heart.png'}/>
      <h2 className={styles.title}>We are always in touch</h2>
      <div className={styles.moneys}>
        <img className={cn(styles.money, styles.money1)} src={'./assets/images/money1.png'} alt={'money1'}/>
        <img className={cn(styles.money, styles.money2)} src={'./assets/images/money2.png'} alt={'money2'}/>
        <img className={cn(styles.money, styles.money3)} src={'./assets/images/money3.png'} alt={'money3'}/>
        <img className={cn(styles.money, styles.money4)} src={'./assets/images/money4.png'} alt={'money4'}/>
        <img className={cn(styles.money, styles.money5)} src={'./assets/images/money5.png'} alt={'money5'}/>
      </div>
      <div className={styles.buttons}>
        <GradientButton text={<><IconTelegram/>Telegram</>}/>
        <GradientButton text={<><IconMessage/>Online chat</>}/>
        <GradientButton text={<><IconSupport/>Support</>}/>
      </div>
      <div className={styles.icons}>
        <img src={'./assets/images/Twitter.png'} alt={'Twitter'}/>
        <img src={'./assets/images/Facebook.png'} alt={'Facebook'}/>
        <img src={'./assets/images/Instagram.png'} alt={'Instagram'}/>
        <img src={'./assets/images/YouTube.png'} alt={'YouTube'}/>
      </div>
    </div>
  );
};

export default HeartBlock;