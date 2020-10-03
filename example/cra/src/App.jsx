import React, {useState} from 'react';

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [currentId, setCurrentId] = useState(1);
  const [desc, setDesc] = useState('');
  const [showOdd, setShowOdd] = useState(false);

  const onAdd = () => {
    const todo = {
      id: currentId,
      desc: desc
    };
    setCurrentId(currentId + 1);
    setDesc('');
    setTodoList([...todoList, todo]);
  };

  const onDelete = (e) => {
    const id = Number(e.target.dataset.id);
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodoList);
  };

  const onSaveServe = () => {
    console.log('save');
  };

  return (
    <div>
      <h3>할 일 목록</h3>
      <ul>
        {todoList.filter((_, index) => showOdd ? index % 2 === 0 : true).map(li => {
          return (
            <li key={li.id}>
              <span>{li.desc}</span>
              <button onClick={onDelete} data-id={li.id}>삭제</button>
            </li>
          )
        })}
      </ul>
      <input type="text" value={desc} onChange={e => setDesc(e.target.value)} />
      <button onClick={onAdd}>추가</button>
      <button onClick={() => setShowOdd(!showOdd)}>홀수 On/Off</button>
      <button onClick={onSaveServe}>저장</button>
    </div>
  );
}

export default App;
