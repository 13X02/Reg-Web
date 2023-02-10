import React, { useState } from 'react';

export const Event = (props) => {
  return (
    <div>
      <h3>{props.eventName}</h3>
      <p>{props.eventDescription}</p>
      <p>Date: {props.eventDate}</p>
      <p>Time: {props.eventTime}</p>
    </div>
  );
};

const Admin = (props) => {
  return (
    <div>
      <h2>Event List</h2>
      {props.events.map((event, index) => (
        <Event
          key={index}
          eventName={event.eventName}
          eventDescription={event.eventDescription}
          eventDate={event.eventDate}
          eventTime={event.eventTime}
        />
      ))}
    </div>
  );
};

const User = (props) => {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddEvent({
      eventName,
      eventDescription,
      eventDate,
      eventTime,
    });
    setEventName('');
    setEventDescription('');
    setEventDate('');
    setEventTime('');
  };

  return (
    <div>
      <h2>Add Event</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="eventName">Event Name:</label>
        <input
          type="text"
          id="eventName"
          value={eventName}
          onChange={(event) => setEventName(event.target.value)}
          required
        />
        <br />
        <br />
        <label htmlFor="eventDescription">Event Description:</label>
        <input
          type="text"
          id="eventDescription"
          value={eventDescription}
          onChange={(event) => setEventDescription(event.target.value)}
          required
        />
        <br />
        <br />
        <label htmlFor="eventDate">Event Date:</label>
        <input
          type="date"
          id="eventDate"
          value={eventDate}
          onChange={(event) => setEventDate(event.target.value)}
          required
        />
        <br />
        <br />
        <label htmlFor="eventTime">Event Time:</label>
        <input
          type="time"
          id="eventTime"
          value={eventTime}
          onChange={(event) => setEventTime(event.target.value)}
          required
        />
        <br />
        <br />
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};
