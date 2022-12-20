import React from "react";

const SideDrawer = ({ show, handleSignInClick }) => {
  return (
    <nav className={`side-drawer ${show ? "side-drawer__open" : ""}`}>
      <ul className="side-drawer__links">
        <li className="side-drawer__links-link">
          <a href="/">Home</a>
        </li>
        <button
          type="button"
          className="side-drawer__signin-btn"
          onClick={handleSignInClick}
        >
          Sign in
        </button>
      </ul>
    </nav>
  );
};

export default SideDrawer;
