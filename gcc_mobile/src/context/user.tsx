import React, { useContext, useState } from 'react';

export type User = {
  loggedInGitHub: boolean;
  githubUsername: string;
  qrCodeLink: string;
  contestantId: string;
  githubAvatar: string;
  hasUserSignedUp: boolean;
};

interface UserContextType {
  user: User | null;
  setUser: (user: User) => void;
}

const UserContext = React.createContext<UserContextType>({
  user: null,
  setUser: () => {
    throw new Error('setUser has not been initialized properly.');
  },
});

export const useUserContext = (): UserContextType => useContext(UserContext);

export const UserContextInit: React.FC = (props) => {
  const { children } = props;
  const [user, setUser] = useState<User | null>(null);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
