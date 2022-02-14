import React, { FC, useEffect, useState } from 'react';
import LayoutDefault from './hoc/LayoutDefault/LayoutDefault';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './containers/SignIn/SignIn';
import SignUp from './containers/SignUp/SignUp';
import Home from './containers/Home/Home';
import AOS from 'aos';

const App: FC = (): JSX.Element => {
  const [isRefresh, setIsRefresh] = useState<boolean>(false);
  const refreshAOS = (): void => {
    AOS.refresh();
    setIsRefresh(true);
  }

  useEffect(() => {
    AOS.init();
  }, [])

  useEffect(() => {
    if (!isRefresh) {
      document.addEventListener('scroll', refreshAOS)
    } else {
      document.removeEventListener('scroll', refreshAOS)
    }
  }, [isRefresh])

  return (
    <div>
      <LayoutDefault>
        <Routes>
          <Route path="/" element={<SignIn/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
      </LayoutDefault>
    </div> 
  );
}

export default App;
