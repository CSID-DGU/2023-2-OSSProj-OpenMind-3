import styled from 'styled-components';

export const InputLabel = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 0;
`;

export const Input = styled.input`
  width: 80%;
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
