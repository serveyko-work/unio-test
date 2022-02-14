import React, { FC } from 'react';
import CourseBlock from '../CourseBlock/CourseBlock';
import styles from './SecondScreen.module.scss';
import IconMessage from '../../UI/Icons/IconMessage';

const COURSES = [
  {
    title: 'GALA / BUSD',
    course: 1.03,
    value: 343.56
  },
  {
    title: 'BTC/USD',
    course: -1.08,
    value: 143.56
  },
  {
    title: 'ETH/USD',
    course: 1.02,
    value: 124.86
  },
  {
    title: 'ETH/USD',
    course: 1.02,
    value: 124.86
  },
]

const SecondScreen: FC = (): JSX.Element => {
  return (
    <div className={styles.coursesWrap} data-aos="fade-up" data-aos-delay="200">
      <div className={styles.courses}>
        {
          COURSES?.map((item, index) =>
            <CourseBlock key={`course_${index}`} name={item?.title} course={item?.course} value={item?.value}/>
          )
        }
      </div>
      <div className={styles.message}>
        <IconMessage/>
      </div>
    </div>
  );
};

export default SecondScreen;