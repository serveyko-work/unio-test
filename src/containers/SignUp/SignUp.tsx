import React, { FC } from 'react';
import styles from './SignUp.module.scss';
import GradientText from '../../components/UI/GradientText/GradientText';
import Input from '../../components/UI/Input/Input';
import IconShowPassword from '../../components/UI/Icons/IconShowPassword';
import Link from '../../components/UI/Link/Link';
import Button from '../../components/UI/Button/Button';

const SignUp: FC = (): JSX.Element => {
  return (
    <div className={styles.signUp} data-aos="zoom-in">
      <div className={styles.formWrapper}>
        <GradientText className={styles.signInTitle} text={'Sign up'}/>
        <Input register={''} placeholder={'E-mail'} name={'email'}/>
        <Input register={''} className={styles.passwordInput} placeholder={'Password'} name={'password'} icon={<IconShowPassword/>}/>
        <Input register={''} className={styles.passwordInput} placeholder={'Repeat Password'} name={'repeat_password'} icon={<IconShowPassword/>}/>
        <Link className={styles.forgotPwd} text={'Forgot the password?'}/>
        <Button className={styles.signInButton} text={'Sign up'}/>
        <Link className={styles.signUpLink} text={'SIGN IN'}/>
      </div>
    </div>
  );
};

export default SignUp;