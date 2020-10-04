import React, {useState} from 'react';
import Title from './Title';

const Counter = () => {
  const [count, setCount] = useState({
    value: 0
  });
  const onClick = () => {
    const newCount = count.value += 1;
    setCount({...count, value: newCount});
  }
  return (
    <>
      <Title title={`전체 카운트: ${count.value}`} />
      <button onClick={onClick}>증가</button>
    </>
  )
}
export default Counter;