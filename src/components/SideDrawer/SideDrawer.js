import React from "react";
import exitIconWhite from "../../assets/icons/exitIconWhite.svg";
import logo from "../../assets/icons/logo.png";

const SideDrawer = ({
  show,
  handleSignInClick,
  handleLogOutClick,
  isBackgroundWhite,
  onClose,
  isLoggedIn,
}) => {
  return (
    <nav className={`side-drawer ${show ? "side-drawer__open" : ""}`}>
      <div className="side-drawer__header">
        <img className="nav__logo" src={logo} alt="News Explorer" />
        <button
          type="button"
          className="side-drawer__close-btn"
          aria-label="close-button"
          onClick={onClose}
        />
      </div>
      <ul className="side-drawer__links">
        <li className="side-drawer__links-link">
          <a href="/">Home</a>
        </li>

        {show && (
          // <li className="link">
          <li
            className={
              isBackgroundWhite ? "nav__link_black" : "side-drawer__links-link"
              // !isHomeTabOpen && "nav__link_selected",
              // ].join(" ")}
            }
          >
            <a href="/saved-news"> Saved articles</a>
          </li>
        )}

        {isLoggedIn ? (
          <div
            className="signout__btn_white-mobile"
            onClick={handleLogOutClick}
          >
            Elise <img src={exitIconWhite} alt="exit icon" />
          </div>
        ) : (
          <button
            type="button"
            className="side-drawer__signin-btn"
            onClick={handleSignInClick}
          >
            Sign in
          </button>
        )}
      </ul>
    </nav>
  );
};

export default SideDrawer;
