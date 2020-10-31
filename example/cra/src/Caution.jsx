import React, {useRef, useState} from 'react';

const Caution = () => {
  const inputRef = useRef();
  const [showText, setShowText] = useState(true);
  return (
    <div>
      {showText && <input type="text" ref={inputRef} />}
      <button onClick={_ => setShowText(!showText)}>
        텍스트 보이기/가리기
      </button>
      <button onClick={_ => inputRef.current && inputRef.current.focus()}>
        텍스트로 이동
      </button>
    </div>
  );
};

export default Caution;
