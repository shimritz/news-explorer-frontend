import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.png";
import logo_black from "../../assets/icons/BlackLogo.svg";
import exitIcon from "../../assets/icons/exitIcon.svg";
import exitIconWhite from "../../assets/icons/exitIconWhite.svg";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { useLocation } from "react-router-dom";

function Navigation({
  isBackgroundWhite,
  handleSignInClick,
  drawerClickHandler,
  isLoggedIn,
  handleLogOutClick,
  currentUser,
}) {
  const location = useLocation();
  const [isHomeTabOpen, setIsHomeTabOpen] = useState(false);

  useEffect(() => {
    location.pathname === "/"
      ? setIsHomeTabOpen(true)
      : setIsHomeTabOpen(false);
  }, [location.pathname]);

  return (
    <nav className="nav">
      <img
        className="nav__logo"
        src={isBackgroundWhite ? logo_black : logo}
        alt="News Explorer"
      />
      <ul className="nav__links">
        <li className="link">
          <Link
            className={[
              isBackgroundWhite ? "nav__link_black" : "nav__link",
              isHomeTabOpen && "nav__link_selected",
            ].join(" ")}
            to="/"
          >
            Home
          </Link>
        </li>
        {isLoggedIn && (
          <li className="link">
            <Link
              className={[
                isBackgroundWhite ? "nav__link_black" : "nav__link",
                !isHomeTabOpen && "nav__link_selected",
              ].join(" ")}
              to="/saved-news"
            >
              Saved articles
            </Link>
          </li>
        )}

        {isLoggedIn ? (
          <div
            className={
              isHomeTabOpen ? "nav__signout-btn_white" : "nav__signout-btn"
            }
            onClick={handleLogOutClick}
          >
            {currentUser ? currentUser.name : ""}
            <img
              src={isHomeTabOpen ? exitIconWhite : exitIcon}
              alt="exit icon"
            />
          </div>
        ) : (
          <button
            type="button"
            className="nav__signin-btn"
            onClick={handleSignInClick}
          >
            Sign in
          </button>
        )}
      </ul>
      <div>
        <DrawerToggleButton
          handleClick={drawerClickHandler}
          isBackgroundWhite={isBackgroundWhite}
        />
      </div>
    </nav>
  );
}

export default Navigation;
