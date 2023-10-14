import { useState } from 'react';
import * as s from './Login.style.js';

export const Login = ({ setIsLoginOk }) => {
  const [values, setValues] = useState({
    id: '',
    password: '',
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    console.log(values);
  };

  const handleSubmit = () => {
    values.id === '2019111615' &&
      values.password === '1234' &&
      setIsLoginOk(true);
  };

  return (
    <form name='loginForm' type='submit' action=''>
      <s.InputLabel>학번</s.InputLabel>
      <s.Input
        type='text'
        name='id'
        value={values.id}
        onChange={handleChange}
      />
      <s.InputLabel>비밀번호</s.InputLabel>
      <s.Input
        type='password'
        name='password'
        value={values.password}
        // autoComplete={}
        // onKeyDown={}
        // value={}
        onChange={handleChange}
      />
      <s.Button type='submit' onClick={handleSubmit}>
        로그인
      </s.Button>
    </form>
  );
};
