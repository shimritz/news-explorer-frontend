import PopupWithForm from "../PopupWithForm/PopupWithForm";
function InfoTooltip({ isPopupOpen, onClose, handleSignInButtonClick }) {
  return (
    <PopupWithForm name="info" isPopupOpen={isPopupOpen} onClose={onClose}>
      <div className="info__wrapper">
        <h2 className="info__heading">Registration successfully completed!</h2>
        <button
          type="button"
          className="info__link"
          onClick={handleSignInButtonClick}
        >
          Sign in
        </button>
      </div>
    </PopupWithForm>
  );
}

export default InfoTooltip;
