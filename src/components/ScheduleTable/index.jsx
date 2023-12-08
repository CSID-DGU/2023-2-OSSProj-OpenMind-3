import React, { useEffect } from 'react';
import * as s from './ScheduleTable.style';
import schedulAPI from '../../api/scheduleAPI';
import { useParams } from 'react-router-dom';

const ScheduleTable = ({ type }) => {
  const userName = localStorage.getItem('userName');
  const params = useParams();
  const teamId = Number(params.teamId.substring(1));

  const title = type === 0 ? `${userName}님의 일정` : '팀 일정';

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
      console.log('개인 :', data.teamScheduleResponses);
    });
  };
  const getTeamSchedule = () => {
    schedulAPI.getTeamSchedule(teamId).then((data) => {
      console.log('팀 : ', data);
    });
  };

  useEffect(() => {
    type === 0 ? getMySchedule() : getTeamSchedule();
  }, [teamId]);
  return (
    <s.Wrapper>
      <s.ScheduleHeader>
        <s.ScheduleText>{title}</s.ScheduleText>
        {type === 1 && (
          <s.TeamScheduleRefWrapper>
            <s.TeamScheduleText>0/3 가능</s.TeamScheduleText>
            <s.RefTable>
              <tbody>
                <s.RefRow>
                  <s.RefCell />
                  <s.RefCell />
                  <s.RefCell />
                  <s.RefCell />
                </s.RefRow>
              </tbody>
            </s.RefTable>
            <s.TeamScheduleText>3/3 가능</s.TeamScheduleText>
          </s.TeamScheduleRefWrapper>
        )}
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
                  key={day}
                  data-day={day}
                  data-time={time}
                  onClick={onClickTime}
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
