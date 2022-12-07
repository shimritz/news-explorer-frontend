import React from "react";

const SideDrawer = ({ show, handleSignInClick }) => {
  // let drawerClasses = "side-drawer";
  // if (show) {
  //   drawerClasses = "side-drawer_open";
  // }
  return (
    // <nav className={drawerClasses}>
    <nav className={`side-drawer ${show ? "side-drawer__open" : ""}`}>
      <ul className="side-drawer__links">
        <li className="side-drawer__links-link">
          <a href="/">Home</a>
        </li>
        {/* <li className="side-drawer__links-link">
          <a href="/signin">Sign in</a>
        </li> */}
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
