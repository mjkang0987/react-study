import React, {useState, useEffect} from 'react';
import Counter from './Counter';

const App = () => {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    setTimeout(_ => {
      setSeconds(v => v + 1);
    }, 1000)
  });

  return (
    <>
      <div key={seconds}>
        {seconds % 2 === 0 &&
          <Counter key={seconds}/>
        }
        <div style={{color: seconds % 2 ? 'red' : 'blue'}}>안녕하세요</div>
        <h2>지금까지 {seconds}초가 지났습니다.</h2>
      </div>
    </>
  );
}

export default App;
