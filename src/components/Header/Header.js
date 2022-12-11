import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SideDrawer from "../SideDrawer/SideDrawer";
import Backdrop from "../Backdrop/Backdrop";

function Header({ handleSignInButtonClick }) {
  const location = useLocation();
  const [isBackgroundWhite, setIsBackgroundWhite] = useState(false);
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);

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
    <header className={isBackgroundWhite ? "header2" : "header"}>
      <Navigation
        isBackgroundWhite={isBackgroundWhite}
        handleSignInClick={handleSignInButtonClick}
        drawerClickHandler={drawerToggleClickHandler}
      />
      {/* {isSideDrawerOpen ? <SideDrawer /> && <Backdrop /> : ""} */}
      <SideDrawer
        show={isSideDrawerOpen}
        handleSignInClick={handleSignInButtonClick}
      />
      {isSideDrawerOpen ? (
        <div>
          {/* <SideDrawer show={isSideDrawerOpen} /> */}
          <Backdrop click={backdropClickHandler} />
        </div>
      ) : (
        ""
      )}
      {isBackgroundWhite ? <SavedNewsHeader /> : <SearchForm />}
    </header>
  );
}

export default Header;