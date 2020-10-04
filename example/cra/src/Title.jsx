import React from 'react';

const Title = ({title}) => {
  console.log('render');
  return <p>{title}</p>
}

export default React.memo(Title);