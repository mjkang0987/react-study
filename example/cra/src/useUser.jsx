import {useState, useEffect} from 'react';

const useUser = (userId) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    getUserAPI(userId).then(data => setUser(data));
  }, [userId]);

  return user;
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


export default useUser;