import Popup from "../Popup/Popup";

function InfoTooltip({ isPopupOpen, onClose, handleSignInButtonClick }) {
  return (
    <Popup name="info" isPopupOpen={isPopupOpen} onClose={onClose}>
      <div className="info__container">
        <div className="info__wrapper">
          <h2 className="info__heading">
            Registration successfully completed!
          </h2>
          <button
            type="button"
            className="info__link"
            onClick={handleSignInButtonClick}
          >
            Sign in
          </button>
        </div>
      </div>
    </Popup>
  );
}

export default InfoTooltip;
