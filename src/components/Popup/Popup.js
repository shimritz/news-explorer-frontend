import { useCallback, useEffect } from "react";

function Popup({ isPopupOpen, name, onClose, children }) {
  const handleEscClose = useCallback((e) => {
    if (e.key === "Escape") {
      onClose();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleEscClose, false);

    return () => {
      document.removeEventListener("keydown", handleEscClose, false);
    };
  }, []);

  return (
    <>
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
    </>
  );
}

export default Popup;
