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
import LoggedInContextProvider from "../../context/LoggedInContext";
import { useLoggedIn } from "../../context/LoggedInContext";

function App() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [loggedIn, setIsLoggedIn] = useState(null);

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

  function handleSubmitPopup(e) {
    e.preventDefault();
    setIsSignInOpen(false);
    setIsSignUpOpen(false);
    setIsInfoOpen(true);
  }

  return (
    <LoggedInContextProvider value={useLoggedIn}>
      <div className="App">
        <SignIn
          isPopupOpen={isSignInOpen}
          handleSignUpButtonClick={handleSignUpButtonClick}
          onClose={handleClosePopup}
          handlePopupSubmit={handleSubmitPopup}
          onRedirect={handleSignUpButtonClick}
        />
        <SignUp
          isPopupOpen={isSignUpOpen}
          handleSignInButtonClick={handleSignInButtonClick}
          onClose={handleClosePopup}
          handlePopupSubmit={handleSubmitPopup}
          onRedirect={handleSignInButtonClick}
        />
        <InfoTooltip
          isPopupOpen={isInfoOpen}
          onClose={handleClosePopup}
          handleSignInButtonClick={handleSignInButtonClick}
        />

        <div style={{ height: "100%" }}>
          <Header handleSignInButtonClick={handleSignInButtonClick} />
        </div>

        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Main />} />
          <Route
            path="/saved-news"
            element={
              <ProtectedRoute loggedIn={useLoggedIn}>
                <SavedArticles />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </LoggedInContextProvider>
  );
}

export default App;
