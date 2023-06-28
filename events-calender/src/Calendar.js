import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar.css';

const localizer = momentLocalizer(moment);

const events = [
    {
      title: 'Club Meeting',
      start: '2023-06-30T10:00:00',
      end: '2023-06-30T11:30:00',
    },
    {
      title: 'Workshop',
      start: '2023-07-05T14:00:00',
      end: '2023-07-05T16:00:00',
    },
    {
      title: 'Guest Speaker',
      start: '2023-07-10T16:30:00',
      end: '2023-07-10T18:00:00',
    },
    {
      title: 'Movie Night',
      start: '2023-07-15T19:00:00',
      end: '2023-07-15T21:30:00',
    },
    {
      title: 'Club Trip',
      start: '2023-07-20T08:00:00',
      end: '2023-07-20T17:00:00',
    },
    {
      title: 'Fundraising Event',
      start: '2023-07-25T11:00:00',
      end: '2023-07-25T13:30:00',
    },
    {
      title: 'Networking Event',
      start: '2023-07-30T16:00:00',
      end: '2023-07-30T18:00:00',
    },
    {
      title: 'Workshop',
      start: '2023-08-05T14:00:00',
      end: '2023-08-05T16:00:00',
    },
    {
      title: 'Club Meeting',
      start: '2023-08-10T10:00:00',
      end: '2023-08-10T11:30:00',
    },
    {
      title: 'Movie Night',
      start: '2023-08-15T19:00:00',
      end: '2023-08-15T21:30:00',
    },
    {
      title: 'Guest Speaker',
      start: '2023-08-20T16:30:00',
      end: '2023-08-20T18:00:00',
    },
    {
      title: 'Club Trip',
      start: '2023-08-25T08:00:00',
      end: '2023-08-25T17:00:00',
    },
    {
      title: 'Workshop',
      start: '2023-08-30T14:00:00',
      end: '2023-08-30T16:00:00',
    },
    {
      title: 'Fundraising Event',
      start: '2023-09-05T11:00:00',
      end: '2023-09-05T13:30:00',
    },
    {
      title: 'Networking Event',
      start: '2023-09-10T16:00:00',
      end: '2023-09-10T18:00:00',
    },
    {
      title: 'Club Meeting',
      start: '2023-09-15T10:00:00',
      end: '2023-09-15T11:30:00',
    },
    {
      title: 'Guest Speaker',
      start: '2023-09-20T16:30:00',
      end: '2023-09-20T18:00:00',
    },
    {
      title: 'Movie Night',
      start: '2023-09-25T19:00:00',
      end: '2023-09-25T21:30:00',
    },
    {
      title: 'Club Trip',
      start: '2023-09-30T08:00:00',
      end: '2023-09-30T17:00:00',
    },
    {
      title: 'Workshop',
      start: '2023-10-05T14:00:00',
      end: '2023-10-05T16:00:00',
    },
  ];
  

const formatEventDate = (date) => moment(date).toDate();

const MyCalendar = () => {
  return (
    <div className="calendar-container">
      <h2>Club Events Calendar</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor={(event) => formatEventDate(event.start)}
        endAccessor={(event) => formatEventDate(event.end)}
        style={{ height: 500 }}
      />
    </div>
  );
};

export default MyCalendar;
