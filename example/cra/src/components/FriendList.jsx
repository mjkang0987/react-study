import React from 'react';

const FriendLists = ({friends}) => {
  return (
    <div>
      <ul>
        {friends.map(friend => (
          <li key={friend.id}>{`${friend.name} ${friend.age}세`}</li>
        ))}
      </ul>
    </div>
  );
};

export default FriendLists;