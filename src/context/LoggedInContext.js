import { useContext, useState, createContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const LoggedInContext = createContext();

const LoggedInContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    email: "shimrit@gmail.com",
    firstName: "Shimrit",
    lastName: "Breef Ziskand",
  });

  const navigate = useNavigate();

  const handleLogOut = () => {
    setIsLoggedIn(false);
    setUser({});
    navigate("/");
  };

  return (
    <LoggedInContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, user, setUser, handleLogOut }}
    >
      {children}
    </LoggedInContext.Provider>
  );
};

export default LoggedInContextProvider;

export const useLoggedIn = () => {
  const isLoggedIn = useContext(LoggedInContext);
  return isLoggedIn;
};
