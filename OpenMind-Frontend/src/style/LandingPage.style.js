import styled from 'styled-components';
import BackgroundImage from '../assets/image/background.png';

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: url(${BackgroundImage});
  background-size: 100vw 100vh;
  z-index: 0;
`;

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  width: 380px;
  height: 450px;
  background: white;
  opacity: 0.85;
  border-radius: 5px;
  outline: none;
`;
export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 0;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 40px;
  text-align: center;
`;

export const Logo = styled.img`
  margin: 0 auto;
  width: 230px;
`;

export const ContentContainer = styled.div`
  width: 70%;
  height: 70%;
  margin: 8vh auto;
  text-align: center;
`;
