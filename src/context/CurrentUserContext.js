// import { useContext, useState, createContext } from "react";
// import { useNavigate } from "react-router-dom";

// const LoggedInContext = createContext();

// const LoggedInContextProvider = ({ children }) => {
//   // const [isLoggedIn, setIsLoggedIn] = useState(false);
//   // const [currentUser, setCurrentUser] = useState({
//   //   _id: "",
//   //   email: "",
//   //   firstName: "",
//   //   lastName: "",
//   // });

//   const navigate = useNavigate();

//   const onLogout = () => {
//     setIsLoggedIn(false);
//     setCurrentUser({});
//     navigate("/");
//   };

//   return (
//     <LoggedInContext.Provider
//       value={{
//         // isLoggedIn,
//         // setIsLoggedIn,
//         // currentUser,
//         setCurrentUser,
//         onLogout,
//       }}
//     >
//       {children}
//     </LoggedInContext.Provider>
//   );
// };

// export default LoggedInContextProvider;

// export const useLoggedInContext = () => {
//   return useContext(LoggedInContext);
// };

import React from "react";

export const CurrentUserContext = React.createContext();
