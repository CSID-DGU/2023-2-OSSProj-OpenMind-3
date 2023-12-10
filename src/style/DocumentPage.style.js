import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: white;
`;

export const DocumentListContainerHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  width: 60vw;
  height: 6vh;
  margin-top: 30px;
  border-bottom: transparent;
  border-radius: 15px 15px 0 0;
  background-color: #f59c00;
  box-sizing: border-box;
`;

export const DocumentListContainer = styled.div`
  width: 60vw;
  height: 70vh;
  border: 1px solid #b0b0b0;
  border-radius: 0 0 15px 15px;
  margin-top: 0;
  box-sizing: border-box;
`;
export const HeaderLabel = styled.p`
  width: 97%;
  margin: 0;
  padding: 0;
  color: white;
`;
export const AddButton = styled.img`
  width: 20px;
  height: 20px;
  z-index: 99;
  cursor: pointer;
`;

export const Icon = styled.img`
  margin-right: 15px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

// export const QuillWrapper = styled.div`
//   width: 60vw;
//   height: 75vh;
// `;

// export const ButtonWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 100%;
//   height: 10vh;
// `;
// export const SaveButton = styled.button`
//   width: 100px;
//   height: 30px;
//   margin: 0 auto;
//   border: none;
//   border-radius: 10px;
//   background-color: #f59c00;
//   color: white;
// `;
