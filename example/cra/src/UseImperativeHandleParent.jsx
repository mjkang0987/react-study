import React, { useRef } from 'react';
import UseImperativeHandle from './UseImperativeHandle';

const UseImperativeHandleParent = () => {
  const profileRef = useRef();
  const onClick = () => {
    if (profileRef.current) {
      console.log('current name length:', profileRef.current.getNameLength());
      profileRef.current.addAge(5);
    }
  }
  return (
    <div>
      <UseImperativeHandle ref={profileRef} />
      <button onClick={onClick}>add age 5</button>
    </div>
  );
};

export default UseImperativeHandleParent;
