import styled from 'styled-components';

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
  outline: none;
  cursor: pointer;
  &:hover {
    filter: brightness(80%);
  }

  &:active {
    outline: none;
  }
`;
