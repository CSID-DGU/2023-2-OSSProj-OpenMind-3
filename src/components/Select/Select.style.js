import { useState } from 'react';
import * as s from './Select.style.js';

export const Select = () => {
  const [isClickedLogin, setIsClickedLogin] = useState(false);

  const isClickButton = () => {
    setIsClickedLogin((prev) => !prev);
  };

  return (
    <s.Wrapper>
      <s.HeaderContainer>
        <s.Logo
          src={'https://eclass.dongguk.edu/lmsdata/img/template1/logo.png'}
        />
      </s.HeaderContainer>
      <s.ContentContainer>
        <form type='submit' method='post' action='' id='login-form'>
          <s.InputLabel>학번</s.InputLabel>
          <s.Input
            type='text'
            id='email'
            name='email'
            className='input-id'
            // onKeyDown={}
            // value={}
            // onChange={}
          />
          <s.InputLabel>비밀번호</s.InputLabel>
          <s.Input
            type='password'
            id='password'
            name='password'
            className='input-pw'
            // autoComplete={}
            // onKeyDown={}
            // value={}
            // onChange={}
          />
        </form>
        <s.Button onClick={isClickButton}>로그인</s.Button>
      </s.ContentContainer>
    </s.Wrapper>
  );
};
