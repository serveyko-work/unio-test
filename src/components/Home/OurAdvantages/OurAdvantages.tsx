import React, { FC } from 'react';
import styles from './OurAdvantages.module.scss';
import Button from '../../UI/Button/Button';

const ADVANTAGES = [
  {
    title: 'Trusted partners',
    description: 'The qMall partner, which has been leading the market for decades, is the Ukrainian bank IBox. Together we have developed a bank card for cryptocurrency transactions.'
  },
  {
    title: 'Trusted partners',
    description: 'The qMall partner, which has been leading the market for decades, is the Ukrainian bank IBox. Together we have developed a bank card for cryptocurrency transactions.'
  },
  {
    title: 'Trusted partners',
    description: 'The qMall partner, which has been leading the market for decades, is the Ukrainian bank IBox. Together we have developed a bank card for cryptocurrency transactions.'
  },
]

const OurAdvantages: FC = (): JSX.Element => {

  return (
    <div className={styles.ourAdvantages} data-aos="fade-up" data-aos-delay="200">
      <h2 className={styles.title}>Our advantages</h2>
      <div className={styles.advantages}>
        {
          ADVANTAGES.map((item, index) =>
            <div key={`advantages_${index}`} className={styles.advantageWrapper}>
              <h2 className={styles.advantageTitle}>{item?.title}</h2>
              <div className={styles.descriptionWrapper}>
                <p className={styles.advantageDescription}>{item?.description}</p>
              </div>
            </div>
          )
        }
      </div>
      <Button className={styles.startTradingButton} text={'Start trading'}/>
    </div>
  );
};

export default OurAdvantages;