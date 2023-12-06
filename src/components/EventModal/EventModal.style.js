import styled from 'styled-components';

export const EventModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 5%;
`;

export const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  margin-bottom: 5%;
`;
export const EventTitle = styled.div`
  width: 100%;
  height: 30px;
  border: 1px solid black;
  border-radius: 3px;
  padding: 1px 2px;
  color: black;

  &:focus {
    outline: none;
  }
`;

export const EventDescription = styled.div`
  width: 100%;
  height: 110px;
  padding: 2px;
  border: 1px solid black;
  border-radius: 3px;
  color: black;
  overflow: scroll;
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
export const InputLabel = styled.p`
  display: inline-block;
  margin-bottom: 0.5rem;
`;
export const EventDate = styled.div`
  width: 90%;
  height: fit-content;
  text-align: center;
  border: 1px solid black;
  border-radius: 3px;
  padding: 2px;
  color: black;
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
  cursor: pointer;
  &:hover {
    filter: brightness(80%);
  }
`;
