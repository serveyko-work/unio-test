import React, { FC } from 'react';
import styles from './SignIn.module.scss';
import Input from '../../components/UI/Input/Input';
import IconShowPassword from '../../components/UI/Icons/IconShowPassword';
import GradientText from '../../components/UI/GradientText/GradientText';
import Link from '../../components/UI/Link/Link';
import Button from '../../components/UI/Button/Button';
import { useNavigate } from 'react-router-dom';

const SignIn: FC = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className={styles.signIn} data-aos="zoom-in">
      <div className={styles.formWrapper}>
        <GradientText className={styles.signInTitle} text={'Sign in'}/>
        <Input register={''} placeholder={'E-mail'} name={'email'}/>
        <Input register={''} className={styles.passwordInput} placeholder={'Password'} name={'password'} icon={<IconShowPassword/>}/>
        <Link className={styles.forgotPwd} text={'Forgot the password?'}/>
        <Button onClick={() => {navigate('/home')}} className={styles.signInButton} text={'Sign in'}/>
        <Link to={'/sign-up'} className={styles.signUpLink} text={'SIGN UP'}/>
      </div>
    </div>
  );
};

export default SignIn;