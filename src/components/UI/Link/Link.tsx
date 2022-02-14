import React, { FC } from 'react';
import cn from 'classnames';
import styles from './Link.module.scss';
import { NavLink } from 'react-router-dom';

interface Props {
  text: string;
  className?: string;
  to?: string;
}

const Link: FC<Props> = ({ text, className, to }): JSX.Element => {
  return (
    <NavLink to={to || '/sign-in'} className={cn(styles.link, className)}>{text}</NavLink>
  );
};

export default Link;