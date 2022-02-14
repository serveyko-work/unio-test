import React, { FC } from 'react';
import Select from '../UI/Select/Select';
import styles from './Header.module.scss';
import cn from 'classnames';
import IconSoon from '../UI/Icons/IconSoon';
import IconFlash from '../UI/Icons/IconFlash';
import IconLanguageUK from '../UI/Icons/IconLanguageUK';
import IconLanguageGermany from '../UI/Icons/IconLanguageGermany';
import IconLanguagePolland from '../UI/Icons/IconLanguagePolland';
import IconLanguageRussia from '../UI/Icons/IconLanguageRussia';
import IconPeople from '../UI/Icons/IconPeople';
import { useNavigate } from 'react-router-dom';

const OPTIONS_1 = ['Trade', 'Trade 1', 'Trade 2', 'Trade 3'];
const OPTIONS_2 = ['Purse', 'Trade 1', 'Trade 2', 'Trade 3'];
const OPTIONS_3 = ['Orders', 'Trade 1', 'Trade 2', 'Trade 3'];
const OPTIONS_4 = [
  <><IconLanguageUK/>English</>,
  <><IconLanguageGermany/>Germany</>,
  <><IconLanguagePolland/>Poland</>,
  <><IconLanguageRussia/>Russian</>
];

const Header: FC = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <input id={"menuToggle"} className={styles.menuToggle} type="checkbox"/>
      <label className={styles.menuBtn} htmlFor="menuToggle">
        <span/>
      </label>
      <div className={styles.wrap}>
        <div className={styles.leftWrap}>
          <Select className={styles.customSelect} name={'Trade'} options={OPTIONS_1}/>
          <span>Additions</span>
          <span className={styles.markets}>Markets<IconSoon/></span>
          <span>Airdrop<IconFlash/></span>
          <span>About Us</span>
          <span>Support</span>
        </div>
        <div className={styles.rightWrap}>
          <Select className={styles.customSelect} name={'Purse'} options={OPTIONS_2}/>
          <Select className={styles.customSelect} name={'Orders'} options={OPTIONS_3}/>
          <Select className={styles.customSelect} name={<><IconLanguageUK/>English</>} options={OPTIONS_4}/>
        </div>
      </div>
      <div className={styles.logIn} onClick={() => {navigate('/')}}>
        <IconPeople/>
      </div>
    </header>
  );
};

export default Header;