import {useEffect, useState} from "react";

const useWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const onResize = () => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    console.log(1)
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize)
      console.log(2);
    }
  }, []);
  return width;
}

export default useWidth;