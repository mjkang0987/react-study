import React, { useEffect, useReducer } from 'react';
import { getNextFriend } from '../../common/mocData';
import { addFriend } from '../state';
import store from '../../common/store';
import Friends from '../component/FriendList';

const FriendMain = () => {
  const [, forceUpdate] = useReducer(v => v + 1, 0);
  useEffect(() => {
    let prevFriends = store.getState().friend.friends;
    const unsubscripbe = store.subscribe(() => {
      const currentFriends = store.getState().friend.friends;
      if (currentFriends === prevFriends) return;
      forceUpdate();
      prevFriends = currentFriends;
    });
    return () => unsubscripbe();
  }, []);

  const onAdd = _ => {
    const friend = getNextFriend();
    store.dispatch(addFriend(friend));
  }

  console.log('FriendMain Render');
  const friends = store.getState().friend.friends;
  return (
    <div>
      <button
        onClick={onAdd}>
        친구 추가
      </button>
      <Friends friends={friends}/>
    </div>
  );
};

export default FriendMain;
