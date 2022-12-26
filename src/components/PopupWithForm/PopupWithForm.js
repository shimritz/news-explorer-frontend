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
  validate = null,
}) {
  const isInfoTooltip = name === "info" ? true : false;

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
        {!isInfoTooltip ? (
          <form
            action="submit"
            className="form"
            name={name}
            onSubmit={onSubmit}
          >
            <h1 className="form__title">{title}</h1>
            {children}
            <button
              className={`popup__button ${
                validate && !validate() ? "popup__button_disabled" : ""
              }`}
              type="submit"
              onClick={submit}
              disabled={validate ? !validate() : false}
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
        ) : (
          <div className="info__container">{children}</div>
        )}
      </div>
    </div>
  );
}

export default PopupWithForm;
