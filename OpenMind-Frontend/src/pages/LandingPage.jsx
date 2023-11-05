import React, { useState } from 'react';
import * as s from '../style/LandingPage.style.js';
import { Login } from '../components/Login/index';
import { Select } from '../components/Select/index';

const LandingPage = () => {
  const [isClickedLogin, setIsClickedLogin] = useState(true);
  const [isLoginOk, setIsLoginOK] = useState(false);

  return (
    <s.Wrapper>
      <s.Background>
        <s.Modal>
          <s.ModalWrapper>
            <s.HeaderContainer>
              <s.Logo
                src={
                  'https://eclass.dongguk.edu/lmsdata/img/template1/logo.png'
                }
              />
            </s.HeaderContainer>
            <s.ContentContainer>
              {!isLoginOk ? (
                <Login setIsLoginOk={setIsLoginOK}></Login>
              ) : (
                <Select />
              )}
            </s.ContentContainer>
          </s.ModalWrapper>
          .
        </s.Modal>
      </s.Background>
    </s.Wrapper>
  );
};

export default LandingPage;
