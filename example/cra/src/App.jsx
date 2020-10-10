import React, {useState} from 'react';
import Profile from "./Profile";

const App = () => {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <Profile userId={count} />
      <button onClick={onClick}>증가</button>
   </div>
  )
}

export default App;
