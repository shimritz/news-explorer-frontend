import React from "react";

const drawerToggleButton = ({ handleClick }) => {
  return (
    <button className="toggle-button" onClick={handleClick}>
      <div className="toggle-button__line" />
      <div className="toggle-button__line" />
    </button>
  );
};

export default drawerToggleButton;
