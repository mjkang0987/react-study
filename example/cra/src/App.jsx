import React, {useState, useEffect} from 'react';
import Counter from './Counter';
import Todo from './Todo';

const App = () => {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    setTimeout(_ => {
      setSeconds(v => v + 1);
    }, 1000)
  });

  return (
    <>
      <Counter />
      <Todo />
      <div style={{color: seconds % 2 ? 'red' : 'blue'}}>안녕하세요</div>
      <h2>지금까지 {seconds}초가 지났습니다.</h2>
    </>
  );
}

export default App;
