import React, { useContext, useState } from 'react';
import { IUser } from 'src/interfaces/user.interface';

export const UserContext = React.createContext<Partial<IUser>>({});

export const SetUserContext = React.createContext<React.Dispatch<React.SetStateAction<Partial<IUser>>>>(() => {});

export const useUser = () => useContext(UserContext);

export const useSetUser = () => useContext(SetUserContext);

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<Partial<IUser>>({
    username: 'huyhq',
    role: 'admin',
  });

  return (
    <UserContext.Provider value={user}>
      <SetUserContext.Provider value={setUser}>{children}</SetUserContext.Provider>
    </UserContext.Provider>
  );
};
