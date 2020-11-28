import React from 'react';
import {
  addTimeline,
  removeTimeline,
  editTimeline,
  increaseNextPageTimeline
} from './timeline/state';
import {
  addFriend,
  removeFriend,
  editFriend
} from './friend/state';
import store from './common/store';

store.dispatch(addTimeline({id: 1, desc: '코딩은 정말 즐거워'}));
store.dispatch(addTimeline({id: 2, desc: '리덕스 좋아'}));
store.dispatch(increaseNextPageTimeline());
store.dispatch(editTimeline({id: 1, desc: '리덕스 너무 좋은가용'}));
store.dispatch(removeTimeline({id: 1, desc: '코딩은 정말 즐거워'}));

store.dispatch(addFriend({id: 1, desc: '아이유'}));
store.dispatch(addFriend({id: 2, desc: '손나은'}));
store.dispatch(editFriend({id: 1, desc: '수지'}));
store.dispatch(removeFriend({id: 1, desc: '아이유'}));

const App = () => {
  return (
    <div>리액트</div>
  );
};

export default App;
