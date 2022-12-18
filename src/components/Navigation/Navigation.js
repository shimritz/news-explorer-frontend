import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.png";
import logo_black from "../../assets/icons/BlackLogo.svg";
import exitIcon from "../../assets/icons/exitIcon.svg";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { useLocation } from "react-router-dom";
import { useLoggedIn } from "../../context/LoggedInContext";

function Navigation({
  isBackgroundWhite,
  handleSignInClick,
  drawerClickHandler,
}) {
  const location = useLocation();
  const [isHomeTabOpen, setIsHomeTabOpen] = useState(false);
  const { isLoggedIn, handleLogOut } = useLoggedIn();

  useEffect(() => {
    location.pathname === "/"
      ? setIsHomeTabOpen(true)
      : setIsHomeTabOpen(false);
  }, [location.pathname]);

  return (
    <nav className="nav">
      {/* <img className="nav__logo" src={logo} /> */}

      {/* <img
        className={isBackgroundWhite ? (src = { BlackLogo }) : (src = { logo })}
      /> */}

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
        <button
          type="button"
          className="nav__signin-btn"
          onClick={handleSignInClick}
        >
          {isLoggedIn ? (
            <div className="signout_btn" onClick={handleLogOut}>
              Elise <img src={exitIcon} alt="exit icon" />
            </div>
          ) : (
            "Sign in"
          )}
        </button>
      </ul>
      <div>
        <DrawerToggleButton handleClick={drawerClickHandler} />
      </div>
    </nav>
  );
}

export default Navigation;
