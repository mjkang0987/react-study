import React from 'react';

const Friends = ({friends}) => {
  return (
    <ul>
      {friends.map(friend => (
        <li key={friend.id}>{friend.name}</li>
      ))}
    </ul>
  );
};

export default Friends;
