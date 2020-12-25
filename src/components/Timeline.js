import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';
import PropTypes from 'prop-types';

const Timeline = (props) => {
  const timelineComponents = props.events.map((event, i) => {
    return (
      <TimelineEvent 
        key={i} 
        person={event.person} 
        status={event.status} 
        timeStamp={event.timeStamp} 
      />
    );
  });

  return (
    <div className="timeline">
      {timelineComponents}
    </div>
  );
}

Timeline.propTypes = {
  events: PropTypes.array.isRequired
};

export default Timeline;