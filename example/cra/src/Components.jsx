import React, {useEffect, useRef} from 'react';

const Components = () => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <InputAndSave inputRef={inputRef}/>
      <button onClick={() => inputRef.current.focus()}>텍스트로 이동</button>
    </div>
  );
};

const InputAndSave = ({inputRef}) => {
  return (
    <div>
      <input type="text" ref={inputRef}/>
      <button>저장</button>
    </div>
  )
}

export default Components;
