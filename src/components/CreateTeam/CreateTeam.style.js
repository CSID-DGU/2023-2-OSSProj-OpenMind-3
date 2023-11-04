import styled from 'styled-components';

export const Text = styled.p`
  width: 100%;
  height: 25px;
  margin: 0 0 10px 0;
`;

export const TeamCreateButton = styled.button`
  width: 100px;
  height: 30px;
  margin: 0 auto;
  border-radius: 10px;
  background-color: #f59c00;
  border: none;
  color: white;
  margin-top: 5px;
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
