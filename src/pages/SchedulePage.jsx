import React from 'react';
import * as s from '../style/SchedulePage.style';

const SchedulePage = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  // 9시부터 시작하여 두 칸 당 1시간을 표시합니다.
  const hours = [...Array(15)].map((_, i) => {
    const hour = Math.floor(i / 2) + 9;
    const isHalfHour = i % 2 !== 0;
    return { time: isHalfHour ? '' : `${hour}:00` };
  });

  return (
    <s.ScheduleContainer>
      <s.TimeColumn>
        {hours.map((hour, index) => (
          <s.Hour key={index}>{hour.time}</s.Hour>
        ))}
      </s.TimeColumn>
      {days.map((day) => (
        <s.Day key={day}>
          <s.DayName>{day}</s.DayName>
          {hours.map((_, index) => (
            <React.Fragment key={index}>
              <s.HourSlot />
              <s.HalfHourSlot />
            </React.Fragment>
          ))}
        </s.Day>
      ))}
    </s.ScheduleContainer>
  );
};

export default SchedulePage;
