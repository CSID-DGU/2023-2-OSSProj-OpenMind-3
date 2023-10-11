import React, { useState } from 'react';
import * as s from '../style/LandingPage.style';
import Modal from 'react-modal';
import BackgroundImage from '../assets/image/background.png';
import { Login } from '../components/Login/index';

const LandingPage = () => {
  const [isClickedLogin, setIsClickedLogin] = useState(true);

  // const isClickLogin = () => {
  //   setIsClickedLogin((prev) => !prev);
  // };

  const LoginModalStyle = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 10,
      background: 'transparent',
    },
    content: {
      display: 'flex',
      justifyContent: 'center',
      background: 'white',
      opacity: '0.85',
      overflow: 'auto',
      width: '380px',
      height: '430px',
      margin: 'auto auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '5px',
      outline: 'none',
      zIndex: 10,
    },
  };
  return (
    <>
      <s.Wrapper>
        <s.Background src={BackgroundImage}></s.Background>
      </s.Wrapper>
      <Modal
        isOpen={isClickedLogin}
        style={LoginModalStyle}
        ariaHideApp={false}
      >
        <Login />
      </Modal>
    </>
  );
};

export default LandingPage;
