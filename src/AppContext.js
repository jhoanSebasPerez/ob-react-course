import React, { useState } from "react";

const AppContext = React.createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("user"));

  const sigin = (newUser, callback) => {
    setUser(newUser);
    localStorage.setItem("user", newUser);
    callback();
  };

  const signout = (callback) => {
    setUser(null);
    localStorage.setItem("user", "");
    callback();
  };

  return (
    <AppContext.Provider value={{ user, sigin, signout }}>
      {children}
    </AppContext.Provider>
  );
};

export { AuthProvider, AppContext };
