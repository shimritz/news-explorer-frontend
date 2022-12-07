import Popup from "../Popup/Popup";

function PopupWithForm({ name, isPopupOpen, children, onClose }) {
  return (
    // <Popup name={name} isPopupOpen={isPopupOpen}>
    //   {children}
    // </Popup>

    <div
      className={`popup popup_type_${name} ${isPopupOpen ? "popup_open" : ""}`}
    >
      <div className="popup__container">
        <button
          type="button"
          className="popup__close"
          aria-label="close-button"
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  );
}

export default PopupWithForm;
