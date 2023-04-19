import { createContext, useState } from 'react';

export const UserContext = createContext<any>(null);

interface IUser {
  name : string;
}

export const UserContextProvider = ({ children } : any) => {
  const [user, setUser] = useState<IUser>({
    name: "Guest",
  });

  const valuesPayload = {
    user,setUser
  }

  return <UserContext.Provider value={valuesPayload}>
    {children}
  </UserContext.Provider>
}
