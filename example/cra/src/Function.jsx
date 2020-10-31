import React, {useCallback, useState} from 'react';

const Function = () => {
  const [text, setText] = useState(INITIAL_TEXT);
  const [showText, setShowText] = useState(true);

  const setInitialText = useCallback(ref => ref && setText(INITIAL_TEXT), [])
  return (
    <div>
      {showText && (
        <input
          type="text"
          ref={setInitialText}
          value={text}
          onChange={e => setText(e.target.value)}/>
          /*
            문자를 입력할 때 계속 랜더링
            -> 새로운 함수 입력
            -> INITIAL_TEXT 계속 입력

            텍스트 변경되지 않는 문제를 해결하기 위해서(함수고정) useCallback Hook사용
          */
      )}
      <button onClick={() => setShowText(!showText)}>보이기/가리기</button>
    </div>
  );
};

const INITIAL_TEXT = '안녕하세요';
export default Function;
