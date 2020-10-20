import React, {createContext, useContext, useState} from 'react';
import Profile from "./Profile";

const UserContext = createContext('unknown');

const Caution2 = () => {
  const [user, setUser] = useState({
    username: 'mike',
    age: 0
  });
  const [count, setCount] = useState(0)
  console.log('caution render----');
  return (
    <>
      <UserContext.Provider value="mike"></UserContext.Provider>
        <Profile/>
    </>
  );
}

export default Caution2;