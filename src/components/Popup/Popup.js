function Popup({ children, name, isPopupOpen }) {
  return (
    <div
      className={`popup popup_type_${name} ${isPopupOpen ? "popup_open" : ""}`}
    >
      <div className="popup__container">
        <div className="popup__close" />
        {children}
      </div>
    </div>
  );
}

export default Popup;
