import React, { FC } from 'react';
import cn from 'classnames';
import styles from './GradientButton.module.scss';

interface Props {
  text: string | JSX.Element;
  className?: string;
}

const Button: FC<Props> = ({ text, className}): JSX.Element => {
  return (
    <button className={cn(styles.button, className)}>
      <div className={styles.colorWrap}>
        {text}
      </div>
      </button>
  );
};

export default Button;