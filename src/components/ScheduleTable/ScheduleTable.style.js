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
  width: 100%;
`;
export const ScheduleText = styled.p`
  width: 200px;
  height: 40px;
  color: black;
  font-size: 18px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 120px;
  height: 40px;
  margin-left: 180px;
  justify-content: space-around;
`;
export const MyScheduleButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 23px;
  border: none;
  border-radius: 20px;
  background-color: #eee;
  margin: 3px 0 0 0;
  font-size: 12px;
  text-align: center;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }
`;
export const TeamScheduleRefWrapper = styled.div`
  display: flex;
  float: right;
  width: 200px;
  height: 20px;
  /* border: 1px solid red; */
  margin-left: 250px;
  margin-top: 20px;
  font-size: 12px;
`;
export const TeamScheduleText = styled.div`
  width: fit-content;
  height: 100%;
  /* border: 1px solid black; */
`;

export const RefTable = styled.table`
  border-collapse: collapse;
  width: 100px;
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
  /* &:nth-child(3) {
    background-color: #f4b084;
  }
  &:nth-child(4) {
    background-color: #ed7d31;
  } */
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

  &.values {
    cursor: pointer;
    &:hover {
      background-color: #f8cbad;
    }
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

export const ScheduleModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const SelectBox = styled.select``;

export const SelectOptions = styled.option``;

export const TimeInputWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

export const InputLabel = styled.label`
  height: fit-content;
  flex: block;
  margin-right: 10px;
`;
export const TimeInput = styled.input`
  flex: block;
  width: 150px;
`;

export const ScheduleButtonWrapper = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-around;
`;
export const ScheduleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
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
