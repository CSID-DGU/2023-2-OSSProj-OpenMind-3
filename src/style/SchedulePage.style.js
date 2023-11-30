import styled, { css } from 'styled-components';

export const ScheduleContainer = styled.div`
  display: flex;
  margin: 20px;
`;

export const TimeColumn = styled.div`
  width: 50px;
`;

export const Hour = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50px;
  height: 40px; // 높이를 40px로 조정
  text-align: right;
  padding: 10px;
  box-sizing: border-box;
`;

export const Day = styled.div`
  flex: 1;
  border-left: 1px solid #ddd;
`;

export const HourSlot = styled.div`
  border-bottom: 1px solid #ddd;
  height: 40px; // 30분 높이로 조정
`;

export const HalfHourSlot = styled(HourSlot)`
  ${(props) =>
    props.isHalfHour &&
    css`
      border-bottom: 1px dashed #ddd; // 30분 간격은 점선으로 표시
    `}
`;

export const DayName = styled.div`
  height: 50px; // DayName 높이 조정
  text-align: center;
  font-weight: bold;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
`;
