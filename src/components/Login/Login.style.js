import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  margin-top: 20px;
  text-align: center;
`;

export const Logo = styled.img`
  margin: 0 auto;
  width: 230px;
`;

export const ContentContainer = styled.div`
  width: 70%;
  height: 70%;
  margin: 15px auto;
  text-align: center;
`;

export const InputLabel = styled.label`
  font-size: 16px;
  margin-bottom: 0;
`;

export const Input = styled.input`
  width: 100%;
  height: 25px;
  margin: 5px 0 10px 0;
  padding: 3px 15px;
  border: none;
  background-color: #ede5e5;
`;

export const Button = styled.button`
  width: 70px;
  height: 30px;
  background-color: #f7901e;
  margin-top: 40px;
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 14px;
  &:hover {
    cursor: pointer;
    filter: brightness(80%);
  }
`;
