import React, { useEffect, useState } from 'react';

const Fruits = () => {
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    setTimeout(_ => setFlag(prev => !prev), 3000);
  });
  if (flag) {
    return (
      <div>
        <Counter/>
        <p>사과</p>
        <p>바나나</p>
      </div>
    );
  } else {
    return (
      <articla>
        <Counter/>
        <p>사과</p>
        <p>바나나</p>
      </articla>
    )
  }
}

const Counter = _ => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setTimeout(() => setCount(prev => prev + 1), 100);
    return () => clearTimeout(id);
  });
  return <p>count: {count}</p>;
}

export default Fruits;
