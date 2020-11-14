import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';

const Redux = () => {
  return (
    <div>
      <Provider store={store}>
        <User />
        <Product />
      </Provider>
    </div>
  );
};

const INITIAL_STATE = {
  user: {name: 'mike'},
  product: {name: 'iphone'}
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'setUserName':
      return {
        ...state,
        user: {...state.user, name: action.name}
      }

    default:
      return state;
  }
}

const store = createStore(reducer);
const User = _ => {
  console.log('user render');
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{`${user.name}님 안녕하세요`}</p>
      <button
        onClick={() => dispatch({type: 'setUserName', name: 'john'})}
      >사용자 이름 변경</button>
    </div>
  )
}

const Product = _ => {
  console.log('product render');
  const product = useSelector(state => state.product);
  return (
    <div>
      <p>{`제품이름: ${product.name}`}</p>
    </div>
  )
}


export default Redux;
