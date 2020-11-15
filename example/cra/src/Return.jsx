import React from 'react';
import { applyMiddleware, createStore } from 'redux';

const delayAction = store => next => action => {
  const delay = action.meta?.delay; // optional chaining
  if (!delay) return next(action);
  const timeoutId = setTimeout(() => next(action), delay);
  return function cancel() {
    clearTimeout(timeoutId);
  };
}

const myReducer = (state = {name: 'mike'}, action) => {
  console.log('myReducer');
  if (action.type === 'someAction') return {name: 'mike2'}
  return state;
};

const store = createStore(myReducer, applyMiddleware(delayAction));
const cancel = store.dispatch({type: 'someAction', meta: {delay: 3000}});
cancel();
const Return = () => {
  return (
    <div>
      리액트
    </div>
  );
};

export default Return;
