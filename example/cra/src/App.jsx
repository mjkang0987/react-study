import React, {useState, useEffect} from 'react';

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const onClick = () => {
    setCount1(count1+1);
    setCount2(count2+1);
  }

  console.log('render Called');
  useEffect(() => {
    document.title = `업데이트 횟수: ${count1}`;
  });

  return (
    <>
      <h2>{count1}</h2>
      <h2>{count2}</h2>
      <button onClick={onClick}>증가</button>
    </>
  );
}

export default App;
