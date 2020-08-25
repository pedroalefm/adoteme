import React, {createContext, useState, useContext} from 'react';

interface PropUserContext {
  children: any;
}

export const UserContext = createContext({});

export default function UserProvider(props: PropUserContext) {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{user, setUser}}>
      {props.children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const currentContext = useContext(UserContext);
  const {user, setUser} = currentContext;
  return {user, setUser};
}
