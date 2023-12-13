import React, { useEffect, useState } from 'react';
import * as s from '../style/LandingPage.style.js';
import { Outlet } from 'react-router-dom';

const LandingPage = () => {
  useEffect(() => {});
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
              <Outlet />
            </s.ContentContainer>
          </s.ModalWrapper>
          .
        </s.Modal>
      </s.Background>
    </s.Wrapper>
  );
};

export default LandingPage;
