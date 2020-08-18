import React, {createContext, useState, useContext} from 'react';
import {User} from '../interface/User';

export const UserContext = createContext({});

export default function UserProvider({children}) {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const currentContext = useContext(UserContext);
  const {user, setUser} = currentContext;
  return {user, setUser};
}
