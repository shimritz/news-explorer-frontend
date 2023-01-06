import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SideDrawer from "../SideDrawer/SideDrawer";
import Backdrop from "../Backdrop/Backdrop";

function Header({
  handleSignInButtonClick,
  handleSearchClick,
  handleArticlesSearch,
  setSearchValue,
  searchValue,
  handleLogOutClick,
  isLoggedIn,
  currentUser,
  savedArticles,
}) {
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

  const handleCloseSideDrawer = () => {
    setIsSideDrawerOpen(false);
  };

  return (
    <header className={isBackgroundWhite ? "headerLoggedIn" : "header"}>
      <Navigation
        isBackgroundWhite={isBackgroundWhite}
        handleSignInClick={handleSignInButtonClick}
        drawerClickHandler={drawerToggleClickHandler}
        handleLogOutClick={handleLogOutClick}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
      />
      <SideDrawer
        show={isSideDrawerOpen}
        handleSignInClick={handleSignIn}
        handleLogOutClick={handleLogOutClick}
        onClose={handleCloseSideDrawer}
        isLoggedIn={isLoggedIn}
      />
      {isSideDrawerOpen ? (
        <div>
          <Backdrop click={backdropClickHandler} />
        </div>
      ) : (
        ""
      )}
      {isBackgroundWhite ? (
        <SavedNewsHeader
          currentUser={currentUser}
          savedArticles={savedArticles}
        />
      ) : (
        <SearchForm
          handleSearchClick={handleSearchClick}
          handleArticlesSearch={handleArticlesSearch}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />
      )}
    </header>
  );
}

export default Header;
