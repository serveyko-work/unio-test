import React from 'react';
// @ts-ignore
import Slider from "react-styled-carousel";
import IconSquare from '../../UI/Icons/IconSquare';
import styles from './ThirdScreen.module.scss';
import IconArrow from '../../UI/Icons/IconArrow';
import cn from 'classnames';

const responsive = [
  { breakPoint: 1200, cardsToShow: 4 },
  { breakPoint: 991, cardsToShow: 3 },
  { breakPoint: 767, cardsToShow: 2 },
  { breakPoint: 575, cardsToShow: 1 },
  { breakPoint: 0, cardsToShow: 1 },
];

const ThirdScreen = () => {
  return (
    <div className={styles.slider} data-aos="fade-up" data-aos-delay="200">
      <Slider
        showDots={false}
        LeftArrow={<div className={cn(styles.arrow, styles.leftArrow)}><IconArrow/></div>}
        RightArrow={<div className={cn(styles.arrow, styles.rightArrow)}><IconArrow/></div>}
        infinite={true}
        autoSlide={false}
        responsive={responsive}>
        <div className={styles.square}><IconSquare/></div>
        <div className={styles.square}><IconSquare/></div>
        <div className={styles.square}><IconSquare/></div>
        <div className={styles.square}><IconSquare/></div>
        <div className={styles.square}><IconSquare/></div>
        <div className={styles.square}><IconSquare/></div>
      </Slider>
      <div className={styles.cryptocurrency}>
        <p>Platform for launching cryptocurrency projects.</p>
        <div className={styles.readMore}>
          <p>Read more</p>
          <IconArrow/>
        </div>
      </div>
    </div>
  );
};

export default ThirdScreen;