import React, { useEffect, useReducer } from 'react';

const Timer = () => {
  const [state, dispatch] = useReducer(reducer, {
    hour: Math.floor(initialTotalSeconds / 3600),
    minute: Math.floor(initialTotalSeconds % 3600 / 60),
    second: Math.floor(initialTotalSeconds % 60)
  });

  const {hour, minute, second} = state;

  useEffect(() => {
    const id = setInterval(dispatch, 1000);
    return () => clearInterval(id)
  });
  return (
    <div>
    </div>
  );
}

const reducer = (state) => {
  const {hour, minute, second} = state;
  switch (state) {
    default:
      return new error;
    case 'hour':
      return {hour: hour - 1, minute: 59, second: 59}
    case 'minute':
      return {...state, minute: minute - 1, second: 59}
    case 'second':
      return {...state, second: 59}
  }
}

export default Timer;
