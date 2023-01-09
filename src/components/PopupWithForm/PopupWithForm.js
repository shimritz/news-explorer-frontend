import Popup from "../Popup/Popup";

function PopupWithForm({
  name,
  isPopupOpen,
  children,
  onSubmit,
  onClose,
  title,
  submit,
  buttonText,
  redirect,
  onRedirect,
  isValid,
}) {
  return (
    <Popup name={name} isPopupOpen={isPopupOpen} onClose={onClose}>
      <form action="submit" className="form" name={name} onSubmit={onSubmit}>
        <h2 className="form__title">{title}</h2>
        {children}
        <button
          className={`popup__button ${
            !isValid ? "popup__button_disabled" : ""
          }`}
          type="submit"
          onClick={submit}
          disabled={!isValid}
        >
          {buttonText}
        </button>

        <p
          className={
            name && name === "info"
              ? "popup__redirect_hidden"
              : "popup__redirect"
          }
        >
          or{" "}
          <button
            className="popup__redirect-button"
            type="button"
            onClick={onRedirect}
          >
            {redirect}
          </button>
        </p>
      </form>
    </Popup>
  );
}

export default PopupWithForm;
