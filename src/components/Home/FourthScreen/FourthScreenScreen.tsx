import React from 'react';
import styles from './FourthScreen.module.scss';
import TitleWithSubtitle from '../TitleWithSubtitle/TitleWithSubtitle';

const STEPS = [
  {
    img: 'hand_1.png',
    alt: 'hand_1.png',
    title: 'Step 1',
    description: 'Register! Take the first step to cryptocurrency trading'
  },
  {
    img: 'hand_2.png',
    alt: 'hand_2.png',
    title: 'Step 2',
    description: 'Top up your balance by any means'
  },
  {
    img: 'hand_3.png',
    alt: 'hand_3.png',
    title: 'Step 3',
    description: 'Select the desired currency and create an order'
  },
]

const FourthScreen = () => {
  return (
    <div className={styles.fourthScreen} data-aos="fade-up" data-aos-delay="200">
      <TitleWithSubtitle
        title={`It's easy to buy cryptocurrency`}
        subtitle={`Buy bitcoin and other altcoins in a couple of clicks - no special knowledge required`}
      />
      <div className={styles.steps}>
        {
          STEPS?.map((step) =>
            <div key={`steps_${step.title}`} className={styles.step}>
              <img className={styles.stepImage} src={`./assets/images/${step?.img}`} alt={step?.alt}/>
              <div className={styles.descriptionBlock}>
                <h4 className={styles.stepTitle}>{step?.title}</h4>
                <p className={styles.stepDescription}>{step?.description}</p>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default FourthScreen;