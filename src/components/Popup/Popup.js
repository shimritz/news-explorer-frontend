function Popup({ isPopupOpen, name, onClose, children }) {
  const handleEscClose = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };
  document.addEventListener("keydown", handleEscClose);

  return (
    <div>
      {isPopupOpen && (
        <div className={`popup popup_type_${name} popup_open`}>
          <div className="popup__container">
            <button
              type="button"
              className="popup__close-btn"
              aria-label="close-button"
              onClick={onClose}
            />
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
