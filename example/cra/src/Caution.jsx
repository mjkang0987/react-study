import React, {createContext, useContext, useState} from 'react';

const UserContext = createContext({
  username: 'unknown',
  age: 0
});

const Caution = () => {
  const [user, setUser] = useState({
    username: 'mike',
    age: 0
  });
  const [count, setCount] = useState(0)
  console.log('caution render----');
  return (
    <>
      <UserContext.Provider value={user}>
        <Profile/>
        <button type="button" onClick={() => setCount(count + 1)}>증가</button>
        {count}
      </UserContext.Provider>
    </>
  )
}

export const Profile = React.memo(() => {
  console.log('profile render');
  return (
    <>
      <Greeting />
    </>
  )
})

export const Greeting = () => {
  console.log('Greeting render');
  const {username} = useContext(UserContext);
  return (
    <>
      <p>{`${username}님 안녕하세요`}</p>
    </>
  )
}

export default Caution;