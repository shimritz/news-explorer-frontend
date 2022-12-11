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
  // handleSignInButtonClick,
  // handleSignUpButtonClick,
  onRedirect,
}) {
  const handleEscClose = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };
  document.addEventListener("keydown", handleEscClose);
  return (
    <div
      className={`popup popup_type_${name} ${isPopupOpen ? "popup_open" : ""}`}
    >
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-btn"
          aria-label="close-button"
          onClick={onClose}
        />
        <form action="submit" className="form" name={name} onSubmit={onSubmit}>
          <h1 className="form__title">{title}</h1>
          {children}
          <button className="popup__button" type="submit" onClick={submit}>
            {buttonText}
          </button>
          <p className="popup__redirect">
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
      </div>
    </div>
  );
}

export default PopupWithForm;
