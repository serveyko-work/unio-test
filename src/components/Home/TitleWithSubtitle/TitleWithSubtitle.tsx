import React, { FC } from 'react';
import styles from './TitleWithSubtitle.module.scss';

interface Props {
  title: string;
  subtitle: string;
}

const TitleWithSubtitle: FC<Props> = ({ title, subtitle }): JSX.Element => {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>{subtitle}</p>
    </>
  );
};

export default TitleWithSubtitle;