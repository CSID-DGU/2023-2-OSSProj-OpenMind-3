import styled from 'styled-components';

export const QuillWrapper = styled.div`
  width: 60vw;
  height: 63vh;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 10vh;
`;
export const SaveButton = styled.button`
  width: 100px;
  height: 30px;
  margin: 50px auto;
  border: none;
  border-radius: 10px;
  background-color: #f59c00;
  color: white;
`;
export const TitleInputWrapper = styled.div`
  width: 100%;
  height: 45px;
  /* border: 1px solid black; */
  border-left: 1px solid #cccccc;
  border-right: 1px solid #cccccc;
  box-sizing: border-box;
`;

export const TitleInput = styled.input`
  width: 100%;
  height: 100%;
  float: right;
  border: none;
  padding: 15px;
  outline: none;

  &::placeholder {
    font-size: 18px;
    margin-left: 5px;
  }
`;
