import * as s from './Calendar.style.js';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/daygrid';
import interactionPlugin2 from '@fullcalendar/interaction';
import mainpageAPI from '../../api/mainpageAPI.js';
import { useEffect, useState } from 'react';

const Calendar = ({ teamId, setIsAddEventModalOpen, event, setEvent }) => {
  const [eventList, setEventList] = useState([
    {
      id: '',
      title: '',
      description: '',
      start: '',
      end: '',
      color: '#f59c00',
    },
  ]);
  const [updatedEvent, setUpdatedEvent] = useState({});
  const getTeamEventList = () => {
    mainpageAPI.getTeamEventList(teamId).then((data) => {
      console.log(`getTeamEventList: ${data}`);
      setEventList(data);
    });
  };

  // const addEvent = () => {
  //   calendar.addEvent();
  // };
  const deleteEvent = () => {
    mainpageAPI.deleteEvent(eventList.id).then((data) => console.log(data));
  };
  const updateEvent = () => {
    mainpageAPI
      .updateEvent(eventList.id, updatedEvent)
      .then((data) => console.log(data));
  };

  useEffect(() => {
    getTeamEventList();
  }, []);
  return (
    <s.FullCalendarContainer>
      {eventList && (
        <FullCalendar
          defaultView='dayGridMonth'
          // events={events}
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
                console.log(eventList);
                setIsAddEventModalOpen(true);
              },
            },
          }}
          dateClick={function (e) {
            //나중에 수정
            setEvent({
              title: '',
              start: e.dateStr,
              end: e.dateStr,
              description: '',
              teamId: null,
            });
          }}
          events={eventList}
        />
      )}
    </s.FullCalendarContainer>
  );
};

export default Calendar;
