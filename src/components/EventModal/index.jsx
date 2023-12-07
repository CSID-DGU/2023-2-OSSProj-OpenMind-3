import { useEffect, useState } from 'react';
import * as s from './EventModal.style';
import mainpageAPI from '../../api/mainpageAPI';

const EventModal = ({ selectedEventId, closeEventModal, getTeamEventList }) => {
  const [updatedEvent, setUpdatedEvent] = useState({});
  const [event, setEvent] = useState({});
  const [isUpdateEvent, setIsUpdateEvent] = useState(false);

  const getEvent = () => {
    mainpageAPI.getEvent(selectedEventId).then((data) => {
      setEvent(data);
    });
  };
  const deleteEvent = () => {
    mainpageAPI.deleteEvent(selectedEventId).then(() => {
      try {
        closeEventModal();
        setTimeout(() => window.alert('일정이 삭제되었습니다.'), 1);
      } catch (e) {
        window.alert('다시한번 시도해주세요.');
      }
    });
  };
  const updateEvent = () => {
    mainpageAPI
      .updateEvent(selectedEventId, updatedEvent)
      .then((data) => console.log(data));
  };

  const handleClickDelete = () => {
    if (window.confirm('해당 일정을 삭제하시겠습니까?')) {
      deleteEvent();
    }
  };
  useEffect(() => {
    console.log(`팀ID : ${selectedEventId}`);
    getEvent();
  }, []);
  return (
    <>
      {!isUpdateEvent ? (
        <s.EventModalWrapper>
          <s.EventContainer>
            <s.InputLabel>일정 제목</s.InputLabel>
            <s.EventTitle type='text' name='title'>
              {event.title}
            </s.EventTitle>
          </s.EventContainer>
          <s.EventDateContainer>
            <s.EventDateWrapper>
              <s.InputLabel>시작 날짜</s.InputLabel>
              <s.EventDate type='date' name='startDate'>
                {event.start}
              </s.EventDate>
            </s.EventDateWrapper>
            <s.EventDateWrapper>
              <s.InputLabel>종료 날짜</s.InputLabel>
              <s.EventDate type='date' name='endDate'>
                {event.end}
              </s.EventDate>
            </s.EventDateWrapper>
          </s.EventDateContainer>
          <s.EventContainer>
            <s.InputLabel>일정 설명</s.InputLabel>
            <s.EventDescription type='text' name='description'>
              {event.description}
            </s.EventDescription>
          </s.EventContainer>
          <s.ButtonWrapper>
            <s.Button>수정</s.Button>
            <s.Button onClick={handleClickDelete}>삭제</s.Button>
          </s.ButtonWrapper>
        </s.EventModalWrapper>
      ) : (
        {}
      )}
    </>
  );
};

export default EventModal;
