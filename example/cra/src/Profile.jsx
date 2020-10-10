import React, {useState, useEffect} from 'react';

const Profile = ({userId}) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    getUserAPI(userId).then(data => setUser(data));
  }, [userId]);

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

const USER1 = {name: 'MJ', age: 20};
const USER2 = {name: 'JH', age: 10};

const getUserAPI = (userId) => {
  return new Promise(res => {
    setTimeout(() => {
      res(userId % 2 ? USER1 : USER2);
    }, 500)
  })
}

export default Profile;