import React, {useState} from 'react';

const UseCallback = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [v1, setV1] = useState(0);
  return (
    <div>
      <p>{`name is ${name}`}</p>
      <p>{`age is ${age}`}</p>
      <UserEdit
        onSave={() => saveToServer(name, age)}
        setName={setName}
        setAge={setAge}/>
      <p>{`v1: ${v1}`}</p>
      <button
        onClick={() => setV1(Math.random())}>
        v1수정
      </button>
    </div>
  );
};

const UserEdit = React.memo(function({oonSave, setName, setAge}) {
  console.log('UserEdit render');
  return null;
});

function saveToServer(nam, age) {}

export default UseCallback;
