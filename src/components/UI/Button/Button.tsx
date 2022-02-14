import React, { FC } from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

interface Props {
  text: string | JSX.Element;
  className?: string;
  onClick?: () => void;
}

const Button: FC<Props> = ({ text, className, onClick }): JSX.Element => {
  return (
    <button onClick={onClick} className={cn(styles.button, className)}>{text}</button>
  );
};

export default Button;