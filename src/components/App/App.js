import * as React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import SavedArticles from "../SavedArticles/SavedArticles";
import Error from "../Error/Error";
import Header from "../Header/Header";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { useNavigate } from "react-router-dom";
import mainApi from "../../utils/MainApi";

function App() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [onlineArticles, setOnlineArticles] = useState(null);
  const [searchValue, setSearchValue] = useState(null);
  // const [token, setToken] = React.useState(localStorage.getItem("jwt"));
  // const [user, setUser] = React.useState();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );

  const navigate = useNavigate();

  React.useEffect(() => {
    if (currentUser) {
      mainApi.setAuthorizationHeader(currentUser.jwt);
      setIsLoggedIn(true);
      navigate("/saved-news");
    } else {
      mainApi.setAuthorizationHeader(null);
      setIsLoggedIn(false);
      navigate("/");
    }
  }, [currentUser]);

  const handleSignInButtonClick = (e) => {
    e.preventDefault();
    setIsSignUpOpen(false);
    setIsSignInOpen(true);
    setIsInfoOpen(false);
  };
  const handleSignUpButtonClick = (e) => {
    e.preventDefault();
    setIsSignInOpen(false);
    setIsSignUpOpen(true);
  };

  const handleClosePopup = () => {
    setIsSignInOpen(false);
    setIsSignUpOpen(false);
    setIsInfoOpen(false);
  };

  function handleSubmitPopup() {
    // e.preventDefault();
    setIsSignInOpen(false);
    setIsSignUpOpen(false);
    setIsInfoOpen(true);
  }

  function onRegister({ email, password, name }) {
    mainApi
      .register(email, password, name)
      .then((res) => {
        if (res.data._id) {
          handleSubmitPopup();
        } else {
          console.log("res:", res);
          alert("failed to sign up");
        }
      })
      .catch((e) => {
        console.error(e);
        alert("failed to sign up");
      });
  }

  function onLogin({ email, password }) {
    mainApi
      .login(email, password)
      .then((res) => {
        if (res.token && res.data) {
          setCurrentUser({
            _id: res.data._id,
            email: res.data.email,
            name: res.data.name,
            token: res.token,
          });
          handleSubmitPopup();
        } else {
          alert("failed to login");
        }
      })
      .catch((e) => {
        console.error(e);
        alert("failed to login");
      });
  }

  function onLogout() {
    localStorage.removeItem("user");
    setCurrentUser(null);
    navigate("/");
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <SignIn
          isPopupOpen={isSignInOpen}
          onClose={handleClosePopup}
          handlePopupSubmit={onLogin}
          onRedirect={handleSignUpButtonClick}
        />
        <SignUp
          isPopupOpen={isSignUpOpen}
          handleSignInButtonClick={handleSignInButtonClick}
          onClose={handleClosePopup}
          handlePopupSubmit={onRegister}
          onRedirect={handleSignInButtonClick}
        />
        <InfoTooltip
          isPopupOpen={isInfoOpen}
          onClose={handleClosePopup}
          handleSignInButtonClick={handleSignInButtonClick}
        />

        <div style={{ height: "100%" }}>
          <Header
            handleSignInButtonClick={handleSignInButtonClick}
            handleArticlesSearch={setOnlineArticles}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onLogout={onLogout}
            isLoggedIn={isLoggedIn}
          />
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <Main onlineArticles={onlineArticles} searchValue={searchValue} />
            }
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/saved-news"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <SavedArticles />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
