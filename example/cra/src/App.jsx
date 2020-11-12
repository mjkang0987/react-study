import React, { useState } from 'react';

const App = () => {
  const [fruits, setFruits] = useState(['apple', 'banana', 'orange']);
  const [newFruits, setNewFruits] = useState('');
  const addNewFruit = _ => {
    setFruits([...fruits, newFruits])
    // fruits.push(newFruits);
    setNewFruits('');
  }
  return (
    <div>
     <Selected options={fruits} />
     <input
       type="text"
       value={newFruits}
       onChange={e => setNewFruits(e.target.value)}
     />
     <button
       onClick={addNewFruit}
     >추가하기</button>
    </div>
  )
}

const Selected = React.memo(({options}) => (
  <div>
    {options.map((items, index) => (
      <p key={`${items}${index}`}>{items}</p>
    ))}
  </div>
));

export default App;
