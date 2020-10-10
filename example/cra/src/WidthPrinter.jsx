import React from 'react';
import useWidth from "./useWidth";

const WidthPrinter = () => {
  const width = useWidth();
  return (
    <div>
      {`width is ${width}`}
    </div>
  )
}

export default WidthPrinter;