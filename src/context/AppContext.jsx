import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const backendUrl = 'http://localhost:4000';

  const handleRegister = () => {
  };

  const handleLogin = () => {
  };

  const value = {
    backendUrl,
    handleRegister,
    handleLogin
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;