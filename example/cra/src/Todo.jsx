import React, {useState} from 'react';

const Todo = ({title, desc}) => {
  const [priority, setPriority] = useState('high');
  const onClick = _ => {
    setPriority(priority === 'high' ? 'low' : 'high');
  }

  return (
    <>
      <Title title={title} />
      <p>{desc}</p>
      <p>{priority === 'high' ? '우선순위 높음' : '우선순위 낮음'}</p>
      <button onClick={onClick}>우선순위 변경</button>
    </>
  )
}

const Title = React.memo(({title}) => {
  return <p style={{color: 'blue'}}>{title}</p>;
});

export default Todo;