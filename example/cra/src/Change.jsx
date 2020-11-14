import React, { useEffect, useState } from 'react';

const Change = () => {
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    setTimeout(_ => setFlag(prev => !prev), 1000);
  });
  if (flag) {
    return (
      <div>
        <p key="사과">사과</p>
        <p key="바나나">바나나</p>
      </div>
    );
  } else {
    return (
      <div>
        <p key="사과">사과</p>
        <p key="파인애플">파인애플</p>
        <p key="바나나">바나나</p>
      </div>
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

export default Change;
