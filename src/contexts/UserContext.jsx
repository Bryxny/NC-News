import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = (username) => {
    setUser(username);
  };

  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
};
