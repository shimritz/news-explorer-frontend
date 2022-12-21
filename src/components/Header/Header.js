import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SideDrawer from "../SideDrawer/SideDrawer";
import Backdrop from "../Backdrop/Backdrop";

function Header({ handleSignInButtonClick, handleArticlesSearch }) {
  const location = useLocation();
  const [isBackgroundWhite, setIsBackgroundWhite] = useState(false);
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);

  const handleSignIn = (e) => {
    handleSignInButtonClick(e);
    setIsSideDrawerOpen(false);
  };

  useEffect(() => {
    location.pathname === "/saved-news"
      ? setIsBackgroundWhite(true)
      : setIsBackgroundWhite(false);
  }, [location]);

  const drawerToggleClickHandler = () => {
    setIsSideDrawerOpen(!isSideDrawerOpen);
  };

  const backdropClickHandler = () => {
    setIsSideDrawerOpen(false);
  };

  return (
    <header className={isBackgroundWhite ? "headerLoggedIn" : "header"}>
      <Navigation
        isBackgroundWhite={isBackgroundWhite}
        handleSignInClick={handleSignInButtonClick}
        drawerClickHandler={drawerToggleClickHandler}
      />
      {/* {isSideDrawerOpen ? <SideDrawer /> && <Backdrop /> : ""} */}
      <SideDrawer show={isSideDrawerOpen} handleSignInClick={handleSignIn} />
      {isSideDrawerOpen ? (
        <div>
          {/* <SideDrawer show={isSideDrawerOpen} /> */}
          <Backdrop click={backdropClickHandler} />
        </div>
      ) : (
        ""
      )}
      {isBackgroundWhite ? (
        <SavedNewsHeader />
      ) : (
        <SearchForm handleArticlesSearch={handleArticlesSearch} />
      )}
    </header>
  );
}

export default Header;
