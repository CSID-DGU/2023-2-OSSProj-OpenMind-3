import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100vh;
  padding: 20px;
  background-color: white;
`;

export const LeftContainer = styled.div`
  width: 65%;
  height: 100%;
  margin-right: 20px;
`;

export const AddEventModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 5%;
`;

// export const ModalHeader = styled.div`
//   width: 100%;
//   height: 10%;
//   text-align: center;
//   font-size: 25px;
// `;

export const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  margin-bottom: 5%;
`;
export const EventTitle = styled.input`
  width: 100%;
  height: 30px;

  &:focus {
    outline: none;
  }
`;

export const EventDescription = styled.textarea`
  width: 100%;
  height: 110px;

  &:focus {
    outline: none;
  }
`;

export const EventDateContainer = styled.div`
  display: flex;

  width: 100%;
  height: fit-content;
  margin-bottom: 5%;
`;

export const EventDateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
export const InputLabel = styled.label``;
export const EventDate = styled.input`
  width: 90%;
  height: fit-content;
  text-align: center;
  &:focus {
    outline: none;
  }
`;

export const RightContainer = styled.div`
  width: 35%;
  height: 100%;
`;

export const ContainerBox = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid #e3e6f0;
  border-radius: 0.35rem;
  margin-bottom: 10px;

  box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15);
`;

export const BoxHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  background-color: #f8f9fc;
  border-bottom: 1px solid #e3e6f0;
  border-radius: 0.35rem 0.35rem 0 0;
`;
export const BoxTitle = styled.h6`
  margin: 0;
  font-weight: bold;
`;

export const AddButton = styled.img`
  width: 20px;
  height: 20px;
  z-index: 99;
  cursor: pointer;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 30px;
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 10px;
  border: none;
  background-color: #f59c00;
  color: white;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    filter: brightness(80%);
  }
`;
