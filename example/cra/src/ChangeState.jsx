import React from 'react';
import { applyMiddleware, createStore } from 'redux';

const printLog = store => next => action => {
  console.log(`prev state = ${JSON.stringify(store.getState())}`);
  const result = next(action);
  console.log(`next state = ${JSON.stringify(store.getState())}`);
  return result;
}

const myReducer = (state = {name: 'mike'}, action) => {
  console.log('myReducer');
  if (action.type === 'someAction') return {name: 'mike2'}
  return state;
};

const store = createStore(myReducer, applyMiddleware(printLog));
store.dispatch({type: 'someAction'});
const ChangeState = () => {
  return (
    <div>
      리액트
    </div>
  )
}

export default ChangeState;
