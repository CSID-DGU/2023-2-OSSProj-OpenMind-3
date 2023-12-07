import { useEffect, useState } from 'react';
import * as s from './Calendar.style.js';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/daygrid';
import interactionPlugin2 from '@fullcalendar/interaction';
import mainpageAPI from '../../api/mainpageAPI.js';
import Modal from 'react-modal';
import EventModal from '../EventModal';
import AddEventModal from '../AddEventModal';

const Calendar = ({ teamId }) => {
  const [isAddEventModalOpen, setIsAddEventModalOpen] = useState(false);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [event, setEvent] = useState({
    title: '',
    start: '',
    end: '',
    description: '',
    teamId: null,
  });
  const [eventList, setEventList] = useState([
    {
      id: '',
      title: '',
      description: '',
      start: '',
      end: '',
    },
  ]);

  const [selectedEventId, setSelectedEventId] = useState('');

  const AddEventModalStyle = {
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
      height: '430px',
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

  const ShowEventModalStyle = {
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
      height: '430px',
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
  const handleClickAddEvent = () => {
    setIsAddEventModalOpen((prev) => !prev);
  };

  const getTeamEventList = () => {
    console.log('캘린더에 이벤트 리스트를 불러옵니다.');
    mainpageAPI.getTeamEventList(teamId).then((data) => {
      setEventList(data);
    });
  };

  const handleClickEvent = () => {
    setIsEventModalOpen((prev) => !prev);
  };

  useEffect(() => {
    getTeamEventList();
    console.log(eventList);
  }, [isEventModalOpen, isAddEventModalOpen]);

  return (
    <>
      <s.FullCalendarContainer>
        {eventList && (
          <FullCalendar
            defaultView='dayGridMonth'
            selectable={true}
            plugins={[dayGridPlugin, interactionPlugin, interactionPlugin2]}
            headerToolbar={{
              start: 'prev,custom1',
              center: 'title',
              end: 'today,next,customButton',
            }}
            customButtons={{
              customButton: {
                text: '일정 추가',
                click: () => {
                  setIsAddEventModalOpen(true);
                },
              },
            }}
            // dateClick={function (e) {
            //나중에 수정
            // setEvent({
            //   title: '',
            //   start: e.dateStr,
            //   end: e.dateStr,
            //   description: '',
            //   teamId: null,
            // });
            // }}
            events={eventList}
            eventColor='#f59c00'
            eventClick={(e) => {
              setSelectedEventId(Number(e.event._def.publicId));
              handleClickEvent();
            }}
          />
        )}
      </s.FullCalendarContainer>
      <Modal
        isOpen={isAddEventModalOpen}
        style={AddEventModalStyle}
        onRequestClose={handleClickAddEvent} // 오버레이나 esc를 누르면 핸들러 동작
        ariaHideApp={false}
      >
        <AddEventModal
          event={event}
          setEvent={setEvent}
          teamId={teamId}
          setIsAddEventModalOpen={setIsAddEventModalOpen}
          getTeamEventList={getTeamEventList}
        />
      </Modal>
      <Modal
        isOpen={isEventModalOpen}
        style={ShowEventModalStyle}
        onRequestClose={handleClickEvent} // 오버레이나 esc를 누르면 핸들러 동작
        ariaHideApp={false}
      >
        <EventModal
          selectedEventId={selectedEventId}
          closeEventModal={handleClickEvent}
          getTeamEventList={getTeamEventList}
        />
      </Modal>
    </>
  );
};

export default Calendar;
