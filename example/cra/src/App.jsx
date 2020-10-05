import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

const App = () => {
  return (
    <>
      <Counter />
      {
        ReactDOM.createPortal(
          <div>안녕하세요</div>,
          document.getElementById('portal')
        )
      }
    </>
  );
}

export default App;
