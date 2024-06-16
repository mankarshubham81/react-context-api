import { useState } from "react";
import { UserContext } from "../context/UserContext";

// Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: 'Alan turing', age: 30 });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};