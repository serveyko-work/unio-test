import React, { FC } from 'react';
import TitleWithSubtitle from '../TitleWithSubtitle/TitleWithSubtitle';
import Product from './Product/Product';
import styles from './OurProductsBlock.module.scss';

const PRODUCTS = [
  {
    title: 'qMall LaunchPad',
    description: 'Platform for launching cryptocurrency projects. Buy the digital assets of a project first and get the benefits of investing early.',
    img: 'product_1.svg',
    alt: 'product_1.svg'
  },
  {
    title: 'qMall LaunchPad',
    description: 'Platform for launching cryptocurrency projects. Buy the digital assets of a project first and get the benefits of investing early.',
    img: 'product_2.svg',
    alt: 'product_2.svg'
  },
  {
    title: 'qMall LaunchPad',
    description: 'Platform for launching cryptocurrency projects. Buy the digital assets of a project first and get the benefits of investing early.',
    img: 'product_3.svg',
    alt: 'product_3.svg'
  },
]

const OurProductsBlock: FC = (): JSX.Element => {
  return (
    <div className={styles.ourProductsBlock} data-aos="fade-up" data-aos-delay="200">
      <TitleWithSubtitle
        title={'Our products'}
        subtitle={'Buy bitcoin and other altcoins in a couple of clicks - no special knowledge required'}
      />
      <div className={styles.products}>
      {
        PRODUCTS?.map((product, index) =>
          <Product key={`product_${index}`} img={product?.img} title={product?.title} description={product?.description} alt={product?.alt}/>
        )
      }
      </div>
    </div>
  );
};

export default OurProductsBlock;