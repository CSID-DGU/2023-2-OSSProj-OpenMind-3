import mainpageAPI from '../../api/mainpageAPI';
import * as s from './AddEventModal.style';

const AddEventModal = ({
  event,
  setEvent,
  teamId,
  setIsAddEventModalOpen,
  selectedDate,
}) => {
  const addEvent = () => {
    mainpageAPI.addEvent(event).then((data) => {
      console.log(data);
    });
  };

  const date = new Date();
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  const today = `${year}-${month}-${day}`;

  const handleChange = (e) => {
    console.log(selectedDate);
    const { name, value } = e.target;
    setEvent({
      ...event,
      teamId: teamId,
      start: selectedDate[0],
      end: selectedDate[1],
      [name]: value,
    });
  };

  const handleAddEvent = () => {
    //빈값입력시 오류
    if (
      event.title === '' ||
      selectedDate[0] === '' ||
      selectedDate[1] === ''
    ) {
      alert('입력하지 않은 값이 있습니다.');
      //끝나는 날짜가 시작하는 날짜보다 값이 크면 안됨
    } else if (new Date(selectedDate[0]) > new Date(selectedDate[1])) {
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
          <s.InputLabel htmlFor='startDate' onChange={handleChange}>
            시작 날짜
          </s.InputLabel>
          <s.EventDate
            type='date'
            name='start'
            defaultValue={selectedDate ? selectedDate[0] : today}
            onChange={handleChange}
          />
        </s.EventDateWrapper>
        <s.EventDateWrapper>
          <s.InputLabel htmlFor='endDate'>종료 날짜</s.InputLabel>
          <s.EventDate
            type='date'
            name='end'
            defaultValue={selectedDate ? selectedDate[1] : today}
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
