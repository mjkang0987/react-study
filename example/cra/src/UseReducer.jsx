import React, { useReducer } from 'react';
import SomeComponent from './SomeComponent';

const INITIAL_STATE = {name: 'empty', age: 0};
const MAX_AGE = 50;

export const ProfileDispatch = React.createContext(null);

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <div>
      <p>{`name is ${state.name}`}</p>
      <p>{`age is ${state.age}`}</p>
      <ProfileDispatch.Provider value={dispatch}>
        <SomeComponent/>
      </ProfileDispatch.Provider>
      <input
        type="text"
        value={state.name}
        onChange={e =>
          dispatch({
            type: 'setName',
            name: e.currentTarget.value
          })
        }/>
        <input
          type="number"
          value={state.age}
          onChange={e =>
            dispatch({
              type: 'setAge',
              age: e.currentTarget.value
            })}
        />
    </div>
  );
};

const reducer = (state, action) => {
  switch(action.type) {
    case 'setName':
      return {...state, name: action.name};
    case 'setAge':
      if (action.age > MAX_AGE) return {...state, age: MAX_AGE};
      else return {...state, age: action.age};
    default:
      return;
  }
}

export default UseReducer;
