import { useContext, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

const LoggedInContext = createContext();

const LoggedInContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState({
    email: "shimrit@gmail.com",
    firstName: "Shimrit",
    lastName: "Breef Ziskand",
  });

  const history = useNavigate();

  const handleLogOut = () => {
    setIsLoggedIn(false);
    setUser({});
    history.push("/");
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
