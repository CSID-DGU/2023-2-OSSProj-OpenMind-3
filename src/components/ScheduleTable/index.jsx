import React, { useEffect, useRef, useState } from 'react';
import * as s from './ScheduleTable.style';
import schedulAPI from '../../api/scheduleAPI';
import { useParams } from 'react-router-dom';
import Modal from 'react-modal';
import documentAPI from '../../api/documentAPI';

const ScheduleTable = () => {
  const userName = localStorage.getItem('userName');
  const params = useParams();
  const selectRef = useRef();
  const startRef = useRef();
  const endRef = useRef();
  const teamId = Number(params.teamId.substring(1));
  const [mySchedule, setMySchedule] = useState([]);
  const [isClickedAddSchedule, setIsClickedAddSchedule] = useState(false);
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [isOpenAddScheduleModal, setIsOpenAddScheduleModal] = useState(false);

  const accessToken = sessionStorage.getItem('accessToken');

  const AddScheduleModalStyle = {
    overlay: {
      backgroundColor: ' rgba(0, 0, 0, 0.4)',
      width: '100%',
      height: '100vh',
      zIndex: '10',
      position: 'fixed',
      top: '0',
      left: '0',
      zIndex: '9999',
    },
    content: {
      width: '360px',
      height: '300px',
      zIndex: '150',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '10px',
      boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.25)',
      backgroundColor: 'white',
      overflow: 'auto',
    },
  };

  const openAddScheduleModal = () => {
    setIsOpenAddScheduleModal(true);
  };
  const closeAddScheduleModal = () => {
    setIsOpenAddScheduleModal(false);
  };

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

    setSelectedTimes((prev) => {
      // 이미 선택된 시간대인지 확인
      const index = prev.indexOf(value);
      if (index >= 0) {
        // 이미 선택되었다면 제거
        return prev.filter((t) => t !== value);
      } else {
        // 새로 선택되었다면 추가
        return [...prev, value];
      }
    });
  };

  const getMySchedule = () => {
    schedulAPI.getMySchedule(teamId).then((data) => {
      // console.log(data);
      // console.log('개인 :', data.teamScheduleResponses);
      setMySchedule(data.teamScheduleResponses);
    });
  };

  const handleClickAddSchedule = () => {
    setIsClickedAddSchedule(true);
    openAddScheduleModal();
  };
  // const getTeamSchedule = () => {
  //   schedulAPI.getTeamSchedule(teamId).then((data) => {
  //     setTeamSchedule(data);
  //     console.log('팀 : ', data);
  //   });
  // };

  const handleClickAdd = () => {
    const formData = {
      daysOfWeek: selectRef.current.value,
      startTime: startRef.current.value,
      endTime: endRef.current.value,
      teamId: teamId,
    };
    console.log(formData);

    schedulAPI.postSchedule(formData).then((data) => {
      if (data) {
        window.alert('일정이 추가되었습니다!');
        // selectRef.current.value = '';
        // startRef.current.value = '';
        // endRef.current.value = '';
        closeAddScheduleModal();
        window.location.reload();
      } else {
        window.alert('입력하신 값을 다시 확인해주세요.');
      }
    });
  };
  const handleClickdelete = () => {
    const formData = {
      daysOfWeek: selectRef.current.value,
      startTime: startRef.current.value,
      endTime: endRef.current.value,
      teamId: teamId,
    };
    console.log(formData);

    schedulAPI.deleteSchedule(formData).then((data) => {
      if (data) {
        window.alert('일정이 삭제되었습니다!');
        // selectRef.current.value = '';
        // startRef.current.value = '';
        // endRef.current.value = '';
        closeAddScheduleModal();
        window.location.reload();
      } else {
        window.alert('입력하신 값을 다시 확인해주세요.');
      }
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
  useEffect(() => {
    console.log(selectedTimes);
  });
  return (
    <s.Wrapper>
      <s.ScheduleHeader>
        <s.ScheduleText>{userName}님의 일정</s.ScheduleText>

        <s.ButtonWrapper>
          <s.MyScheduleButton onClick={handleClickAddSchedule}>
            수정
          </s.MyScheduleButton>
          {/* <s.MyScheduleButton>삭제</s.MyScheduleButton> */}
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
                  className={
                    isClickedAddSchedule &&
                    `values ${
                      isScheduled(day, time) ||
                      selectedTimes.includes(`${day},${time}`)
                        ? 'scheduled'
                        : ''
                    }`
                  }
                  // key={day}
                  data-day={day}
                  data-time={time}
                  onClick={onClickTime}
                  style={
                    isScheduled(day, time) ||
                    selectedTimes.includes(`${day},${time}`)
                      ? { backgroundColor: '#f8cbad' }
                      : {}
                  }
                />
              ))}
            </tr>
          ))}
        </tbody>
      </s.Table>
      <Modal
        isOpen={isOpenAddScheduleModal}
        style={AddScheduleModalStyle}
        onRequestClose={closeAddScheduleModal} // 오버레이나 esc를 누르면 핸들러 동작
        ariaHideApp={false}
      >
        <s.ScheduleModalWrapper>
          <p>시간대를 선택하세요.</p>
          <s.SelectBox name='daysOfWeek' ref={selectRef}>
            {days.map((item) => (
              <s.SelectOptions key={item} value={item}>
                {item}
              </s.SelectOptions>
            ))}
          </s.SelectBox>

          <s.TimeInputWrapper>
            <s.InputLabel htmlFor='startTime'>
              시작시간 :{'  '}
              <s.TimeInput name='startTime' ref={startRef} />
            </s.InputLabel>
            <s.InputLabel htmlFor='endTime'>
              종료시간 :{'  '}
              <s.TimeInput name='endTime' ref={endRef} />
            </s.InputLabel>
          </s.TimeInputWrapper>
          <s.ScheduleButtonWrapper>
            <s.ScheduleButton onClick={handleClickAdd}>추가</s.ScheduleButton>
            <s.ScheduleButton onClick={handleClickdelete}>
              삭제
            </s.ScheduleButton>
          </s.ScheduleButtonWrapper>
        </s.ScheduleModalWrapper>
      </Modal>
    </s.Wrapper>
  );
};

export default ScheduleTable;
