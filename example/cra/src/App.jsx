import React from 'react';
import User from './PropsTypes';

const App = () => {
  return (
    <div>
      리액트
      <User
        onChangeTitle={() => {}}
        male={true}
        type='gold'
        age='10'/>
    </div>
  );
}

export default App;
