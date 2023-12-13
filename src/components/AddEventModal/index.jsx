import { useEffect, useRef, useState } from 'react';
import mainpageAPI from '../../api/mainpageAPI';
import * as s from './AddEventModal.style';

const AddEventModal = ({
  event,
  setEvent,
  teamId,
  closeAddEventModal,
  selectedDate,
  setSelectedDate,
}) => {
  const accessToken = sessionStorage.getItem('accessToken');
  const startRef = useRef(null);
  const endRef = useRef(null);
  const addEvent = () => {
    if (accessToken)
      mainpageAPI.addEvent(event).then((data) => {
        if (data) {
          window.alert('추가되었습니다.');
          window.location.reload();
        } else {
          window.alert('등록 실패. 다시 시도해주세요');
        }
      });
  };
  // const customStart = (dateStr) => {
  //   const Time = ' 00:00:00';
  //   console.log(dateStr + Time);
  //   const start = dateStr + Time;
  //   return start;
  // };
  // const customEnd = (dateStr) => {
  //   const Time = ' 24:00:00';
  //   const end = dateStr + Time;
  //   return end;
  // };

  // const date = new Date();
  // const year = date.getFullYear();
  // const month = ('0' + (date.getMonth() + 1)).slice(-2);
  // const day = ('0' + date.getDate()).slice(-2);
  // const today = `${year}-${month}-${day}`;

  const handleChange = (e) => {
    const { name, value } = e.target;

    let endValue = endRef.current?.value;

    let date = endValue && new Date(endValue);
    let endString =
      date &&
      new Date(date.setDate(date.getDate() + 1)).toISOString().substring(0, 10);

    console.log(selectedDate);
    setEvent({
      ...event,
      start: selectedDate.length !== 0 ? selectedDate[0] : event.start,
      end: selectedDate.length !== 0 ? selectedDate[1] : endString,

      teamId: teamId,
      [name]: value,
    });
    console.log(name, value);
  };

  const handleAddEvent = () => {
    //빈값입력시 오류
    if (window.confirm('일정을 추가하시겠습니까?')) {
      if (event.title === '' || event.start === '' || event.end === '') {
        alert('입력하지 않은 값이 있습니다.');
        //끝나는 날짜가 시작하는 날짜보다 값이 크면 안됨
      } else if (new Date(event.start) > new Date(event.end)) {
        alert('시간을 확인해주세요.');
      } else {
        // 이벤트 추가

        addEvent();
        closeAddEventModal();
        // getTeamEventList();
      }
      setSelectedDate();
    }
  };

  return (
    <s.AddEventModalWrapper>
      <s.EventContainer>
        <s.InputLabel htmlFor='title'>일정 제목</s.InputLabel>
        <s.EventTitle type='text' name='title' onChange={handleChange} />
      </s.EventContainer>
      <s.EventDateContainer>
        <s.EventDateWrapper>
          <s.InputLabel htmlFor='start' onChange={handleChange}>
            시작 날짜
          </s.InputLabel>
          <s.EventDate
            type='date'
            name='start'
            defaultValue={selectedDate && selectedDate[0]}
            onChange={handleChange}
            ref={startRef}
          />
        </s.EventDateWrapper>
        <s.EventDateWrapper>
          <s.InputLabel htmlFor='end'>종료 날짜</s.InputLabel>
          <s.EventDate
            type='date'
            name='end'
            defaultValue={selectedDate && selectedDate[1]}
            onChange={handleChange}
            ref={endRef}
          />
        </s.EventDateWrapper>
      </s.EventDateContainer>
      <s.EventContainer>
        <s.InputLabel htmlFor='description'>일정 설명</s.InputLabel>
        <s.EventDescription
          type='text'
          name='description'
          onChange={handleChange}
        />
      </s.EventContainer>
      <s.Button onClick={handleAddEvent}>추가</s.Button>
    </s.AddEventModalWrapper>
  );
};

export default AddEventModal;
