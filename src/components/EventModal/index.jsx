import { useEffect, useState } from 'react';
import * as s from './EventModal.style';
import mainpageAPI from '../../api/mainpageAPI';

const EventModal = ({ selectedEventId, getTeamEventList }) => {
  const [updatedEvent, setUpdatedEvent] = useState({});
  const [event, setEvent] = useState({});

  const getEvent = () => {
    mainpageAPI.getEvent(selectedEventId).then((data) => {
      setEvent(data);
    });
  };
  const deleteEvent = () => {
    mainpageAPI.deleteEvent(selectedEventId).then((data) => console.log(data));
  };
  const updateEvent = () => {
    mainpageAPI
      .updateEvent(selectedEventId, updatedEvent)
      .then((data) => console.log(data));
  };

  useEffect(() => {
    getEvent();
  }, []);
  return (
    <s.EventModalWrapper>
      <s.EventContainer>
        <s.InputLabel for='title'>일정 제목</s.InputLabel>
        <s.EventTitle type='text' name='title'>
          {event.title}
        </s.EventTitle>
      </s.EventContainer>
      <s.EventDateContainer>
        <s.EventDateWrapper>
          <s.InputLabel for='startDate'>시작 날짜</s.InputLabel>
          <s.EventDate type='date' name='startDate'>
            {event.start}
          </s.EventDate>
        </s.EventDateWrapper>
        <s.EventDateWrapper>
          <s.InputLabel htmlFor='endDate'>종료 날짜</s.InputLabel>
          <s.EventDate type='date' name='endDate'>
            {event.end}
          </s.EventDate>
        </s.EventDateWrapper>
      </s.EventDateContainer>
      <s.EventContainer>
        <s.InputLabel htmlFor='description'>일정 설명</s.InputLabel>
        <s.EventDescription type='text' name='description'>
          {event.description}
        </s.EventDescription>
      </s.EventContainer>
      <s.Button>수정</s.Button>
    </s.EventModalWrapper>
  );
};

export default EventModal;
