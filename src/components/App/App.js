import * as React from "react";
import { useState, useRef } from "react";
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
  const [isPreLoaderOpen, setIsPreLoaderOpen] = useState(false);
  const [isNothingFoundOpen, setIsNothingFoundOpen] = useState(false);
  const [onlineArticles, setOnlineArticles] = useState(null);
  const onlineArticlesRef = useRef(onlineArticles);
  const [searchValue, setSearchValue] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [savedArticles, setSavedArticles] = useState(null);
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (currentUser) {
      mainApi.setAuthorizationHeader(currentUser.jwt);
      setIsLoggedIn(true);
      // navigate("/saved-news");
      navigate("/");
    } else {
      mainApi.setAuthorizationHeader(null);
      setIsLoggedIn(false);
      navigate("/");
    }
  }, [currentUser]);

  React.useEffect(() => {
    if (!isSearchClicked) return;
    let timer;

    timer = setTimeout(() => {
      setIsPreLoaderOpen(false);
      if (!onlineArticles) setIsNothingFoundOpen(true);
      setIsSearchClicked(false);
    }, 2000);

    if (onlineArticles) {
      if (timer) clearTimeout(timer);
      setIsPreLoaderOpen(false);
      setIsSearchClicked(false);
    }

    return () => clearTimeout(timer);
  }, [onlineArticles]);

  let handleSearchClick = () => {
    setIsSearchClicked(true);
    setIsPreLoaderOpen(true);
    setOnlineArticles(null);
    setIsNothingFoundOpen(false);
  };

  handleSearchClick = handleSearchClick.bind(this);

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

  function handleSignupSubmitPopup() {
    setIsSignInOpen(false);
    setIsSignUpOpen(false);
    setIsInfoOpen(true);
  }

  function handleSigninSubmitPopup() {
    setIsSignInOpen(false);
    setIsSignUpOpen(false);
    setIsInfoOpen(false);
  }

  function onRegister({ email, password, name }) {
    return mainApi.register(email, password, name).then((res) => {
      handleSignupSubmitPopup();
      return res;
    });
  }

  function onLogin({ email, password }) {
    return mainApi.login(email, password).then((res) => {
      if (res.token && res.data) {
        setCurrentUser({
          _id: res.data._id,
          email: res.data.email,
          name: res.data.name,
          token: res.token,
        });
        handleSigninSubmitPopup();
        return res;
      }
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
            handleSearchClick={handleSearchClick}
            handleArticlesSearch={setOnlineArticles}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            handleLogOutClick={onLogout}
            isLoggedIn={isLoggedIn}
            currentUser={currentUser}
            savedArticles={savedArticles}
          />
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <Main
                isPreLoaderOpen={isPreLoaderOpen}
                isNothingFoundOpen={isNothingFoundOpen}
                handleSearchClick={handleSearchClick}
                onlineArticles={onlineArticles}
                setOnlineArticles={setOnlineArticles}
                searchValue={searchValue}
              />
            }
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/saved-news"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <SavedArticles
                  savedArticles={savedArticles}
                  setSavedArticles={setSavedArticles}
                />
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
