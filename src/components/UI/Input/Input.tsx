import React, { FC } from 'react';
import cn from 'classnames';
import styles from './Input.module.scss';

interface Props {
  register: any;
  icon?: JSX.Element;
  placeholder: string;
  className?: string;
  name: string;
}

const Input: FC<Props> = ({placeholder, icon, className, name, register}): JSX.Element => {
  return (
    <label htmlFor={name} className={cn(styles.inputWrapper,
      // @ts-ignore
      {[className]: className})}>
      <span className={styles.placeholder}>{placeholder}</span>
      {icon && <div className={styles.icon}>{icon}</div>}
      <input id={name} className={styles.searchInput}/>
    </label>
  );
};

export default Input;