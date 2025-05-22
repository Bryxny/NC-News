import { createContext, useState } from "react";
import { fetchUser } from "../utils/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const login = (username) => {
    fetchUser({ username })
      .then((user) => {
        setUser(user);
        setError(null);
      })
      .catch(() => {
        setError("User not found");
      });
  };

  return (
    <UserContext.Provider value={{ user, login, error }}>
      {children}
    </UserContext.Provider>
  );
};
