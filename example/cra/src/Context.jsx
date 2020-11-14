import React, { createContext, useContext, useReducer } from 'react';

const AppContext = createContext({});
const DispatchContext = createContext(_ => {})
const Context = () => {
  const [state, setState] = useReducer(reducer, INITIAL_STATE);
  return (
    <div>
      <AppContext.Provider value={state}>
        <DispatchContext.Provider value={setState}>
          <User/>
          <Product />
        </DispatchContext.Provider>
      </AppContext.Provider>
    </div>
  );
};

const INITIAL_STATE = {
  user: {name: 'mike'},
  product: {name: 'iphone'}
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'setUserName':
      return {
        ...state,
        user: {...state.user, name: action.name}
      }
  }
}

const User = _ => {
  console.log('user render');
  const {user} = useContext(AppContext);
  const dispatch = useContext(DispatchContext);
  return (
    <div>
      <p>{`${user.name}님 안녕하세요`}</p>
      <button onClick={_ => dispatch({type: 'setUserName', name: 'john'})}>사용자 이름 수정</button>
    </div>
  )
}

const Product = _ => {
  console.log('product render');
  const {product} = useContext(AppContext);
  return (
    <div>
      <p>{`제품이름: ${product.name}`}</p>
    </div>
  )
}

export default Context;
