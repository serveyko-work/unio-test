import React, { FC } from 'react';
import styles from './GradientText.module.scss';
import cn from 'classnames';

interface Props {
  text: string;
  className?: string;
}

const GradientText: FC<Props> = ({ text, className }): JSX.Element => {
  return (
    <p className={cn(styles.gradientText, className)}>{text}</p>
  );
};

export default GradientText;