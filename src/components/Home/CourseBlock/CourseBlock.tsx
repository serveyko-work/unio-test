import React, { FC } from 'react';
import styles from './CourseBlock.module.scss';
import cn from 'classnames';
import IconMessage from '../../UI/Icons/IconMessage';

interface Props {
  name: string;
  course: number;
  value: number;
}

const CourseBlock: FC<Props> = ({name, course, value}): JSX.Element => {
  return (
    <div className={styles.courseBlock}>
      <div className={styles.courseWrap}>
        <p className={styles.name}>{name}</p>
        <p className={cn({[styles.plus]: course >= 0, [styles.minus]: course < 0})}>{course}%</p>
        <p className={styles.value}>{value}</p>
      </div>
    </div>
  );
};

export default CourseBlock;