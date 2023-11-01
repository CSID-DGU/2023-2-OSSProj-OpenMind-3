import * as s from './Calendar.style.js';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/daygrid';

const Calendar = () => {
  return (
    <s.FullCalendarContainer>
      <FullCalendar
        defaultView='dayGridMonth'
        // events={events}
        plugins={[dayGridPlugin, interactionPlugin]}
        headerToolbar={{
          start: 'prev,custom1',
          center: 'title',
          end: 'today,next,customButton',
        }}
        customButtons={{
          customButton: {
            text: 'add Event',
          },
        }}
      />
    </s.FullCalendarContainer>
  );
};

export default Calendar;
