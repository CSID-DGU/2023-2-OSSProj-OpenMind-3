import { useEffect } from 'react';
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

  // const date = new Date();
  // const year = date.getFullYear();
  // const month = ('0' + (date.getMonth() + 1)).slice(-2);
  // const day = ('0' + date.getDate()).slice(-2);
  // const today = `${year}-${month}-${day}`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({
      ...event,
      teamId: teamId,
      start: selectedDate.length !== 0 ? selectedDate[0] : value,
      end: selectedDate.length !== 0 ? selectedDate[2] : value,
      [name]: value,
    });
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
          <s.InputLabel htmlFor='startDate' onChange={handleChange}>
            시작 날짜
          </s.InputLabel>
          <s.EventDate
            type='date'
            name='start'
            defaultValue={selectedDate && selectedDate[0]}
            onChange={handleChange}
          />
        </s.EventDateWrapper>
        <s.EventDateWrapper>
          <s.InputLabel htmlFor='endDate'>종료 날짜</s.InputLabel>
          <s.EventDate
            type='date'
            name='end'
            defaultValue={selectedDate && selectedDate[1]}
            onChange={handleChange}
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
