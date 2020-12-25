import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return (
    <div className="timeline-event">
      <p className="event-person">{props.person}</p>
      <p className="event-status">{props.status}</p>
      <Timestamp className="event-time" time={props.timeStamp} />
    </div>
  );
}

export default TimelineEvent;