import React from 'react';
import UseDebugValue, {
  STATE_START,
  STATE_RUNNING
} from './UseDebugValue';


const App = () => {
  const [state, next] = UseDebugValue(true);
  const msg =
    state === STATE_START
      ? '앱 시작'
      : state === STATE_RUNNING
      ? '앱 시작'
      : '앱 종료';
  return (
    <div>
      <p>{msg}</p>
      <button onClick={next}>next</button>
    </div>
  );
}

export default App;
