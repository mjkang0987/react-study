/* 액션 객체 직접 입력 */
store.dispatch({type: 'todo/ADD', title: '영화보기', priority: 'high'});
store.dispatch({type: 'todo/REMOVE', id: 123});
store.dispatch({type: 'todo/REMOVE_ALL'});

/* 일반적으로 액션 creator 함함수를 만들어서 호출한다. */
const addTodo_ = ({title, priority}) => {
  return {type: 'todo/ADD', title, priority};
}

const removeTodo_ = ({id}) => {
  return {type: 'todo/REMOVE', id};
}

const removeAllTodo_ = _ => {
  return {type: 'todo/REMOVE_ALL'};
}

store.dispatch(addTodo_({title: '영화보기', priority: 'high'}));
store.dispatch(removeTodo_({id: 123}));
store.dispatch(removeAllTodo_());

/* 나중에 reducer에서도 사용하기 때문에 action creator는 상수 변수로 만들어주는 것이 좋다. */

export const ADD = 'todo/ADD';
export const REMOVE = 'todo/REMOVE';
export const REMOVE_ALL = 'todo/REMOVE_ALL';

const addTodo = ({title, priority}) => {
  return {type: ADD, title, priority};
}

const removeTodo = ({id}) => {
  return {type: REMOVE, id};
}

const removeAllTodo = _ => {
  return {type: REMOVE_ALL};
}

store.dispatch(addTodo({title: '영화보기', priority: 'high'}));
store.dispatch(removeTodo({id: 123}));
store.dispatch(removeAllTodo());
