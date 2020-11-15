import React from 'react';
import { applyMiddleware, createStore } from 'redux';

const middleware1 = store => next => action => {
  console.log('middleware1 start');
  const result = next(action);
  console.log('middleware1 end');
  return result;
}

const middleware2 = store => next => action => {
  console.log('middleware2 start');
  const result = next(action);
  console.log('middleware2 end');
  return result;
}

const myReducer = (state, action) => {
  console.log('myReducer');
  return state;
}

const store = createStore(myReducer, applyMiddleware(middleware1, middleware2));
store.dispatch({type: 'someAction'});
/*
action 발생
-> 첫 번째 middleware 실행
-> next
-> 두 번째 middleware 실행
-> next
-> reducer 출력
-> 두 번째 middleware 종료
-> 첫 번째 middleware 종료
*/
const Middleware = () => {
  return (
    <div>
      리액트
    </div>
  )
}

export default Middleware;
