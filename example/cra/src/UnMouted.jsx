import React from 'react';

const Unmounted = ({user}) => {
  return (
    <div>
      <p>사용자 상세 정보</p>
      <UserDetail key={user.id} user={user} />
    </div>
  );
};

const UserDetail = () => {

}

export default Unmounted;
