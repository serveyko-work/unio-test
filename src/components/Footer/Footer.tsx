import React, { FC } from 'react';
import styles from './Footer.module.scss';
import IconLogo from '../UI/Icons/IconLogo';
import cn from 'classnames';

interface IOptions {
  title: string,
  options: Array<string>
}

const OPTIONS: Array<IOptions> = [
  {
    title: 'About Us',
    options: ['About', 'Community', 'Terms', 'Careers', 'News'],
  },
  {
    title: 'Products',
    options: ['Academy', 'Charity', 'Card', 'Labs', 'Gift Card'],
  },
  {
    title: 'service',
    options: ['Buy Crypto', 'BNB', 'Referral', 'OTC Trading', 'Affiliate'],
  },
  {
    title: 'Support',
    options: ['Give Us Feedback', 'Traiding Rules', 'Referral', 'Fees', 'Law Enforcement Requests'],
  },
]

const Footer: FC = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMenu}>
        <div className={cn(styles.block, styles.logoBlock)}>
          <IconLogo/>
          <p className={styles.unioIt}>2021 © Unio-IT.com</p>
        </div>
        {
          OPTIONS.map((item: IOptions, index: number) =>
            <div key={`${item?.title}_${index}`} className={styles.block}>
              <h3 className={styles.optionTitle}>{item?.title}</h3>
              <div className={styles.options}>
              {
                item?.options?.map((option: string, optionIndex: number) =>
                  <p key={`${option}_${optionIndex}`}>{option}</p>
                )
              }
              </div>
            </div>
          )
        }
      </div>
      <div className={styles.policy}>
        <a href={'#'} className={styles.policyItem}>Privacy Policy</a>
        <a href={'#'} className={styles.policyItem}>Refund Policy</a>
        <a href={'#'} className={styles.policyItem}>Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;