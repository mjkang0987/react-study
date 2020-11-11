import React from 'react';

const MyComponent = ({value1, value2}) => {
  console.log(`MyComponent Render`);
  return (
    <div>
      <p>{`${value1}`}</p>
      <p>{`${value2}`}</p>
    </div>
  )
}

const isEqual = (prevProps, nextProps) => { // 속성값 비교 함수
  return prevProps.value1 === nextProps.value1;
}

export default React.memo(MyComponent, isEqual);