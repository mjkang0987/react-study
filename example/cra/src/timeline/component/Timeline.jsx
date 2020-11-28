import React from 'react';

const Timelines = ({timelines}) => {
  return (
    <ul>
      {timelines.map(timeline => (
        <li key={timeline.id}>
          {timeline.desc}
        </li>
      ))}
    </ul>
  );
};

export default Timelines;
