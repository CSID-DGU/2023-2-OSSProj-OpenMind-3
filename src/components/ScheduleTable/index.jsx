import React, { useEffect, useState } from 'react';
import * as s from './ScheduleTable.style';
import schedulAPI from '../../api/scheduleAPI';
import { useParams } from 'react-router-dom';

const ScheduleTable = () => {
  const userName = localStorage.getItem('userName');
  const params = useParams();
  const teamId = Number(params.teamId.substring(1));
  const [mySchedule, setMySchedule] = useState([]);

  const accessToken = sessionStorage.getItem('accessToken');
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
  };

  const getMySchedule = () => {
    schedulAPI.getMySchedule(teamId).then((data) => {
      // console.log(data);
      // console.log('개인 :', data.teamScheduleResponses);
      setMySchedule(data.teamScheduleResponses);
    });
  };
  // const getTeamSchedule = () => {
  //   schedulAPI.getTeamSchedule(teamId).then((data) => {
  //     setTeamSchedule(data);
  //     console.log('팀 : ', data);
  //   });
  // };

  // 시간을 분으로 변환하는 함수
  const timeToMinutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  // 셀이 일정 시간 범위에 포함되는지 확인
  const isScheduled = (day, cellTime) => {
    const cellStartTime = timeToMinutes(cellTime);
    const cellEndTime = cellStartTime + 30; // 30분 간격 셀

    return mySchedule.some((schedule) => {
      const start = timeToMinutes(schedule.startTime);
      const end = timeToMinutes(schedule.endTime);
      // 셀의 시작 시간이 일정의 시작 시간 이후 또는 같고, 셀의 끝 시간이 일정의 끝 시간 이전 또는 같은 경우 true 반환
      return (
        day === schedule.daysOfWeek &&
        cellStartTime >= start &&
        cellEndTime <= end
      );
    });
  };

  useEffect(() => {
    if (accessToken) getMySchedule();
  }, []);
  return (
    <s.Wrapper>
      <s.ScheduleHeader>
        <s.ScheduleText>{userName}님의 일정</s.ScheduleText>

        <s.ButtonWrapper>
          <s.MyScheduleButton>추가</s.MyScheduleButton>
          <s.MyScheduleButton>삭제</s.MyScheduleButton>
        </s.ButtonWrapper>
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
                  // key={day}
                  data-day={day}
                  data-time={time}
                  onClick={onClickTime}
                  style={
                    isScheduled(day, time) ? { backgroundColor: '#f8cbad' } : {}
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

export default ScheduleTable;
