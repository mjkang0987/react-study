import React, { useEffect, useState } from 'react';

const Array = () => {
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    setTimeout(_ => setFlag(prev => !prev), 1000);
  });
  const fruits = flag ? FRUITS_1 : FRUITS_2;
  return (
    <div>
      {fruits.map((item, index) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
};

const FRUITS_1 = ['사과', '바나나']
const FRUITS_2 = ['사과', '파인애플', '바나나']

export default Array;
