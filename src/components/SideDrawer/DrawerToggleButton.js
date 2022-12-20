import React from "react";

const drawerToggleButton = ({ handleClick, isBackgroundWhite }) => {
  let toggleButtonColour = isBackgroundWhite
    ? "toggle-button__line_black"
    : "toggle-button__line";
  return (
    <button className="toggle-button" onClick={handleClick}>
      {/* toggle-button__line_black */}
      <div className={toggleButtonColour} />
      <div className={toggleButtonColour} />
    </button>
  );
};

export default drawerToggleButton;
