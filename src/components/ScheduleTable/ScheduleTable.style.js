import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const ScheduleHeader = styled.div`
  display: flex;
`;
export const ScheduleText = styled.p`
  width: fit-content;
  height: 30px;
`;

export const TeamScheduleRefWrapper = styled.div`
  display: flex;
  align-items: end;
  width: fit-content;
  height: 100%;
  /* border: 1px solid red; */
  margin-left: 80px;
  font-size: 12px;
`;
export const TeamScheduleText = styled.div`
  width: fit-content;
  height: 100%;
  /* border: 1px solid black; */
`;

export const RefTable = styled.table`
  border-collapse: collapse;
  width: 150px;
  height: 16px;
  margin: 0 10px;
`;

export const RefRow = styled.tr``;

export const RefCell = styled.td`
  width: 60px;
  border: 1px solid black;
  text-align: center;
  &:nth-child(2) {
    background-color: #f8cbad;
  }
  &:nth-child(3) {
    background-color: #f4b084;
  }
  &:nth-child(4) {
    background-color: #ed7d31;
  }
`;

export const Table = styled.table`
  width: 85%;
  height: 700px;
  border-collapse: collapse;
`;

//모든 셀들(비어있는+시간)
export const TimeCell = styled.td`
  text-align: center;
  border: 1px solid gray;
  background-color: #fff;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    background-color: #f8cbad;
  }
`;

export const DayCell = styled.th`
  width: 70px;
  border-bottom: 1px solid gray;
  border-left: none;
  padding: 5px;
  text-align: center;
  /* background-color: #eee; */
`;

export const TimeHeader = styled.th`
  padding: 5px;
`;
