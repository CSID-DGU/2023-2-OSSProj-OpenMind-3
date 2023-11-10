import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Text = styled.p`
  width: 100%;
  height: 25px;
  margin: -20px 0 10px 0;
`;

export const TeamCreateButton = styled.button`
  width: 70px;
  height: 30px;
  border-radius: 10px;
  background-color: #f59c00;
  border: none;
  color: white;
  margin-top: 15px;
  font-size: 14px;
  &:hover {
    cursor: pointer;
    filter: brightness(80%);
  }
`;

export const SelectContainer = styled.div`
  width: 100%;
  height: 70%;
  border: 1px solid black;
  border-radius: 10px;
  padding: 5px;
`;
export const SelectList = styled.ul`
  margin: 0 auto;
  white-space: nowrap;
  overflow: auto;
  width: 80%;
  height: 100%;
  padding: 0;
`;
export const SelectItem = styled.li`
  width: 100%;
  overflow-x: hidden;
  text-overflow: ellipsis;
  list-style: none;
  line-height: 30px;
`;
export const LinkItem = styled(Link)`
  color: inherit;
  text-decoration: none;
  &:hover {
    color: gray;
    filter: brightness(70%);
    text-decoration: none;
  }
`;
export const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 5px;
`;
export const ModalText = styled.p`
  font-size: 20px;
`;

export const ModalInput = styled.input`
  width: 250px;
  text-decoration: none;
  text-align: center;
  border: none;
  border-bottom: 1.5px solid black;
  outline: none;
`;

export const ModalButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 30px;
  margin: 0 auto;
`;

export const ModalButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 25px;
  margin-top: 30px;

  border-radius: 10px;
  background-color: #f59c00;
  color: white;
  font-size: 11px;
  cursor: pointer;
  &:hover {
    filter: brightness(80%);
  }
`;
export const ClearButton = styled.img`
  float: right;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
