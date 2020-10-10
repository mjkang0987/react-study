import React, {useState, useEffect} from 'react';

const WidthPrinter = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const onResize = () => {setWidth(window.innerWidth)}
  useEffect(() => {
    console.log(1)
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize)
      console.log(2);
    }
  });

  return (
    <div>
      {`width is ${width}`}
    </div>
  )
}

export default WidthPrinter;