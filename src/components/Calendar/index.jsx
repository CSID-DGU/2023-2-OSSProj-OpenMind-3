import { useEffect, useState } from 'react';
import * as s from './Calendar.style.js';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/daygrid';
import interactionPlugin2 from '@fullcalendar/interaction';

const Calendar = ({
  teamId,
  setIsAddEventModalOpen,
  isAddEventModalOpen,
  // event,
  // setEvent,
  // isEventModalOpen,
  // setIsEventModalOpen,
  handleClickEvent,
  selectedEventId,
  setSelectedEventId,
  getTeamEventList,
  eventList,
}) => {
  useEffect(() => {
    getTeamEventList();
    console.log(eventList);
  }, [isAddEventModalOpen]);
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
  );
};

export default Calendar;
