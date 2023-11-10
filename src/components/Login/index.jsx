import * as s from './Login.style.js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../api/AxiosC.js';
import userAPI from '../../api/userAPI.js';

export const Login = () => {
  const [user, setUser] = useState({
    id: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios
    //   .post(`${process.env.REACT_APP_BASE_URL}/user/login`, user)
    //   .then((response) => {
    //     if (response.status === 200) {
    //       console.log(200);
    //       return response.data;
    //     }
    //     if (response.status === 400) {
    //       console.log(400);
    //       console.log(response);
    //       const responseData = response.data;
    //       const errorMessages = Object.values(responseData.error).join('\n');
    //       alert(errorMessages);
    //       throw new Error();
    //     }
    //   })
    userAPI.loginUser(user).then((data) => {
      console.log(data);
      sessionStorage.setItem('accessToken', data.atk);
      localStorage.setItem('refreshToken', data.rtk);
      localStorage.setItem('userName', data.name);
      localStorage.setItem('userId', user.id);
      navigate('/select');
    });
  };

  return (
    <>
      <s.InputLabel>학번</s.InputLabel>
      <s.Input type='text' name='id' onChange={handleChange} />
      <s.InputLabel>비밀번호</s.InputLabel>
      <s.Input type='password' name='password' onChange={handleChange} />

      <s.Button onClick={handleSubmit}>로그인</s.Button>
    </>
  );
};
