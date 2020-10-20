import React, {createContext, useState} from 'react';
import ContextEditProfile from './ContextEditProfile';

export const UserContext = createContext({
  username: 'unknown',
  helloCount: 0
});

export const SetUserContext = createContext(p => {});

const ContextEdit = () => {
  const [user, setUser] = useState({
    username: 'mike',
    helloCount: 0
  });

  return (
    <>
      <SetUserContext.Provider value={setUser}>
        <UserContext.Provider value={user}>
          <ContextEditProfile />
        </UserContext.Provider>
      </SetUserContext.Provider>
    </>
  )
}

export default ContextEdit;