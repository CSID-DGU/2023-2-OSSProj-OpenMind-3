import React, { useEffect, useState } from 'react';
import * as s from './ScheduleTableTeam.style';
import schedulAPI from '../../api/scheduleAPI';
import { useParams } from 'react-router-dom';

const ScheduleTableTeam = () => {
  const params = useParams();
  const teamId = Number(params.teamId.substring(1));

  const [teamSchedule, setTeamSchedule] = useState([]);
  const [clickedCells, setClickedCells] = useState([]);

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const times = [];
  for (let hour = 8; hour <= 24; hour++) {
    times.push(`${hour % 24 === 0 ? '00' : hour}:00`);
    if (hour < 24) times.push(`${hour}:30`);
  }

  const onClickTime = (e) => {
    const day = e.currentTarget.getAttribute('data-day');
    const time = e.currentTarget.getAttribute('data-time');
    const value = `${day},${time}`;
    console.log(value); // "Mon,9:00"
    const clickedCell = { day, time };

    setClickedCells((prevClickedCells) => {
      const isAlreadyClicked = prevClickedCells.some(
        (cell) => cell.day === day && cell.time === time
      );
      if (isAlreadyClicked) {
        // 이미 클릭된 셀 제거
        return prevClickedCells.filter(
          (cell) => cell.day !== day || cell.time !== time
        );
      } else {
        // 새로운 셀 추가
        return [...prevClickedCells, clickedCell];
      }
    });
  };

  // 셀이 클릭되었는지 확인하는 함수
  const isCellClicked = (day, time) => {
    return clickedCells.some((cell) => cell.day === day && cell.time === time);
  };

  const getTeamSchedule = () => {
    schedulAPI.getTeamSchedule(teamId).then((data) => {
      setTeamSchedule(data);
      console.log('팀 : ', data);
    });
  };

  // 시간을 분으로 변환하는 함수
  const timeToMinutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  // 셀이 일정 시간 범위에 포함되는지 확인
  const isScheduled = (day, cellTime) => {
    const cellStartTime = timeToMinutes(cellTime);
    const cellEndTime = cellStartTime + 30; // 30분 간격 셀

    return teamSchedule.some((schedule) => {
      const start = timeToMinutes(schedule.startTime);
      const end = timeToMinutes(schedule.endTime);
      // 셀의 시작 시간이 일정의 시작 시간 이후이고 셀의 끝 시간이 일정의 끝 시간 이전인 경우 true 반환
      return (
        day === schedule.daysOfWeek &&
        cellStartTime >= start &&
        cellEndTime <= end
      );
    });
  };

  useEffect(() => {
    getTeamSchedule();
  }, []);
  return (
    <s.Wrapper>
      <s.ScheduleHeader>
        <s.ScheduleText>팀 일정</s.ScheduleText>

        <s.TeamScheduleRefWrapper>
          <s.TeamScheduleText> 가능</s.TeamScheduleText>
          <s.RefTable>
            <tbody>
              <s.RefRow>
                <s.RefCell />
                <s.RefCell />
              </s.RefRow>
            </tbody>
          </s.RefTable>
          <s.TeamScheduleText>불가능</s.TeamScheduleText>
        </s.TeamScheduleRefWrapper>
      </s.ScheduleHeader>
      <s.Table>
        <thead>
          <tr>
            <s.TimeHeader></s.TimeHeader>
            {days.map((day) => (
              <s.DayCell key={day}>{day}</s.DayCell>
            ))}
          </tr>
        </thead>
        <tbody>
          {times.map((time, index) => (
            <tr key={`${time}_${index}`}>
              <s.TimeCell>{time}</s.TimeCell>
              {days.map((day) => (
                <s.TimeCell
                  className={`values ${
                    isScheduled(day, time) ? 'scheduled' : ''
                  }`}
                  key={day}
                  data-day={day}
                  data-time={time}
                  onClick={onClickTime}
                  style={
                    isScheduled(day, time)
                      ? { backgroundColor: '#f8cbad' }
                      : {} && isCellClicked(day, time)
                      ? { backgroundColor: '#f8cbad' }
                      : {}
                  }
                />
              ))}
            </tr>
          ))}
        </tbody>
      </s.Table>
    </s.Wrapper>
  );
};

export default ScheduleTableTeam;
