import React, {useState} from 'react';
import Counter from './Counter';

const App = () => {
  const [color, setColor] = useState('red');
  const onClick = () => {
    setColor('blue');
  }
  return (
    <>
      <Counter />
      <Counter />
      <button style={{backgroundColor: color}} onClick={onClick}>
        좋아요
      </button>
    </>
  );
}

export default App;
