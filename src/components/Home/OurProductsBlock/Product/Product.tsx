import React, { FC } from 'react';
import styles from './Product.module.scss';

interface Props {
  img: string;
  alt: string;
  title: string;
  description: string;
}

const Product: FC<Props> = ({img, alt, title, description}): JSX.Element => {
  return (
    <div className={styles.productWrapper}>
    <div className={styles.productSecondWrapper}>
      <div className={styles.product}>
        <img className={styles.image} src={`./assets/icons/${img}`} alt={alt}/>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
    </div>
  );
};

export default Product;