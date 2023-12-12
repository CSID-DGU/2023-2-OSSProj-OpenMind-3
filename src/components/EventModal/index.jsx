import { useEffect, useState } from 'react';
import * as s from './EventModal.style';
import mainpageAPI from '../../api/mainpageAPI';

const EventModal = ({ selectedEventId, closeEventModal, getTeamEventList }) => {
  const [updatedEvent, setUpdatedEvent] = useState({});
  const [event, setEvent] = useState({});
  const [isUpdating, setIsUpdating] = useState(false);

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
  const onClickInput = () => {
    setIsUpdating(true);
  };

  const updateEvent = () => {
    mainpageAPI.updateEvent(selectedEventId, updatedEvent).then((data) => {
      if (data) {
        window.alert('수정되었습니다.');
        closeEventModal();
        console.log(data);
        // window.location.reload();
      } else {
        window.alert('다시한번 시도해주세요.');
      }
      setUpdatedEvent({});
      console.log(data);
    });
  };

  // const customStart = (dateStr) => {
  //   const Time = ' 00:00:00';
  //   console.log(dateStr + Time);
  //   return dateStr + Time;
  // };
  // const customEnd = (dateStr) => {
  //   const Time = ' 24:00:00';
  //   console.log(dateStr + Time);
  //   return dateStr + Time;
  // };

  const handleClickDelete = () => {
    if (window.confirm('해당 일정을 삭제하시겠습니까?')) {
      deleteEvent();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUpdatedEvent({
      ...event,
      start: event.start,
      end: event.end,
      [name]: value,
    });
    console.log(updatedEvent);
  };

  useEffect(() => {
    getEvent();
    setUpdatedEvent({ event });
  }, []);
  return (
    <>
      <s.EventModalWrapper>
        <s.EventContainer>
          <s.InputLabel>일정 제목</s.InputLabel>
          <s.EventTitle onClick={onClickInput}>
            {isUpdating ? (
              <s.EventTitleInput
                name='title'
                defaultValue={event.title}
                onChange={handleChange}
              />
            ) : (
              event.title
            )}
          </s.EventTitle>
        </s.EventContainer>
        <s.EventDateContainer>
          <s.EventDateWrapper>
            <s.InputLabel>시작 날짜</s.InputLabel>
            <s.EventDate onClick={onClickInput}>
              {isUpdating ? (
                <s.EventDateInput
                  type='date'
                  name='start'
                  defaultValue={event.start}
                  onChange={handleChange}
                />
              ) : (
                event.start
              )}
            </s.EventDate>
          </s.EventDateWrapper>
          <s.EventDateWrapper>
            <s.InputLabel>종료 날짜</s.InputLabel>
            <s.EventDate onClick={onClickInput}>
              {isUpdating ? (
                <s.EventDateInput
                  type='date'
                  name='end'
                  defaultValue={event.end}
                  onChange={handleChange}
                />
              ) : (
                event.end
              )}
            </s.EventDate>
          </s.EventDateWrapper>
        </s.EventDateContainer>
        <s.EventContainer>
          <s.InputLabel>일정 설명</s.InputLabel>
          <s.EventDescription onClick={onClickInput}>
            {isUpdating ? (
              <s.EventDescriptionInput
                type='text'
                name='description'
                defaultValue={event.description}
                onChange={handleChange}
              />
            ) : (
              event.description
            )}
          </s.EventDescription>
        </s.EventContainer>
        <s.ButtonWrapper>
          <s.Button onClick={updateEvent}>수정</s.Button>
          <s.Button onClick={handleClickDelete}>삭제</s.Button>
        </s.ButtonWrapper>
      </s.EventModalWrapper>
    </>
  );
};

export default EventModal;
