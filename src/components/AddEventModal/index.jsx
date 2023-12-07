import mainpageAPI from '../../api/mainpageAPI';
import * as s from './AddEventModal.style';

const AddEventModal = ({ event, setEvent, teamId, setIsAddEventModalOpen }) => {
  const addEvent = () => {
    mainpageAPI.addEvent(event).then((data) => {
      console.log(data);
    });
  };

  const handleChange = (e) => {
    console.log('지금 startDate', event.startDate);
    console.log('지금 endDate', event.endDate);
    const { name, value } = e.target;
    setEvent({
      ...event,
      teamId: teamId,
      [name]: value,
    });
  };

  const handleAddEvent = () => {
    //빈값입력시 오류
    if (event.title === '' || event.start === '' || event.end === '') {
      alert('입력하지 않은 값이 있습니다.');
      //끝나는 날짜가 시작하는 날짜보다 값이 크면 안됨
    } else if (new Date(event.start) > new Date(event.end)) {
      alert('시간을 확인해주세요.');
    } else {
      // 이벤트 추가
      addEvent();
      setIsAddEventModalOpen(false);
      // getTeamEventList();
      setTimeout(() => window.alert('일정이 추가되었습니다.'), 100);
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
          <s.InputLabel
            htmlFor='startDate'
            onChange={handleChange}
            // defaultValue={
            //   event.startDate !== '' && event.startDate
            // new Date('2023-11-23')
            // }
            // key={event.startDate}
          >
            시작 날짜
          </s.InputLabel>
          <s.EventDate type='date' name='start' onChange={handleChange} />
        </s.EventDateWrapper>
        <s.EventDateWrapper>
          <s.InputLabel htmlFor='endDate'>종료 날짜</s.InputLabel>
          <s.EventDate type='date' name='end' onChange={handleChange} />
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
