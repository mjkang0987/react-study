import React, {useContext} from 'react';
import {UserContext, SetUserContext} from './ContextEdit';

const Greeting = () => {
  const setUser = useContext(SetUserContext);
  const {username, helloCount} = useContext(UserContext);
  return (
    <>
      <p>{`${username}님 안녕하세요`}</p>
      <p>{`인사횟수: ${helloCount}`}</p>
      <button
        onClick={() => setUser({
          username, helloCount: helloCount + 1
        })}>
        인사하기
      </button>
    </>
  )
}

export default Greeting;