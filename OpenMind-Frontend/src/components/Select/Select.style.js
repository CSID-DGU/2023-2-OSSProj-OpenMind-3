import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Text = styled.p`
  width: 100%;
  height: 25px;
  margin: 5px 0 10px 0;
`;

export const SelectContainer = styled.div`
  width: 100%;
  height: 70%;
  border: 1px solid black;
  border-radius: 10px;
  padding: 5px;
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
