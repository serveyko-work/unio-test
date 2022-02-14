import React, { FC } from 'react';
import Header from '../../components/Header/Header';
import styles from './LayoutDefault.module.scss';
import Footer from '../../components/Footer/Footer';
import { useLocation } from 'react-router-dom';

interface Props {
  children: JSX.Element;
}

const LayoutDefault: FC<Props> = ({children}): JSX.Element => {
  const {pathname} = useLocation();

  return (
    <div className={styles.layout}>
      <Header/>
      <div className={styles.content}>
        {children}
      </div>
      {pathname !== '/' && pathname !== '/sign-up' && <Footer/>}
    </div>
  );
};

export default LayoutDefault;