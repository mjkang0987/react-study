import React from 'react';
import useUser from './useUser';

const Profile = ({userId}) => {
  const user = useUser(userId);
  return (
    <div>
      {!user && <p>사용자 정보를 가졍는 중...</p>}
      {user && (
        <div>
          <p>{`name is ${user.name}`}</p>
          <p>{`age is ${user.age}`}</p>
        </div>
      )}
    </div>
  )
}

export default Profile;