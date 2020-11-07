import React, { useState } from 'react';
import { getNextFriend } from '../data';
import NumberSelect from '../components/NumberSelect';
import FriendLists from '../components/FriendList';

const FriendPage = () => {
  const [friends, setFriends] = useState([]);
  const [ageLimit, setAgeLimit] = useState(MAX_AGE_LIMIT);
  const [nameLengthLimit, setNameLengthLimit ] = useState(MAX_NAME_LENGTH_LIMIT);

  const friendsWithAgeLimit = friends.filter(item => item.age <= ageLimit);
  const friendsWithNameLimit = friends.filter(item => item.name.length <= nameLengthLimit);
  const onAdd = () => {
    const friend = getNextFriend();
    setFriends([...friends, friend])
  }

  return (
    <div>
      <button
        onClick={onAdd}>
        친구 추가
      </button>
      <NumberSelect
        value={ageLimit}
        options={AGE_LIMIT_OPTIONS}
        label='세 이하만 보기'
        onChange={setAgeLimit}/>
      <FriendLists friends={friendsWithAgeLimit}/>
      <NumberSelect
        value={nameLengthLimit}
        options={NAME_LENGTH_LIMIT_OPTIONS}
        label='자 이하 이름만 보기'
        onChange={setNameLengthLimit}/>
      <FriendLists friends={friendsWithNameLimit}/>
    </div>
  );
}

const MAX_AGE_LIMIT = 99;
const MAX_NAME_LENGTH_LIMIT = 99;
const AGE_LIMIT_OPTIONS = [15, 20, 25,  35, 50, MAX_AGE_LIMIT];
const NAME_LENGTH_LIMIT_OPTIONS = [2, MAX_NAME_LENGTH_LIMIT];

export default FriendPage;
