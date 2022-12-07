import PopupWithForm from "../PopupWithForm/PopupWithForm";

function SignUp({
  isPopupOpen,
  handleSignInButtonClick,
  onClose,
  handleSubmit,
}) {
  return (
    <div className="sign-up">
      <PopupWithForm
        name={"sign-up"}
        isPopupOpen={isPopupOpen}
        onClose={onClose}
      >
        <form onSubmit={handleSubmit} className="form signup__form">
          <div className="signup">
            <h2 className="signup__welcome">Sign up</h2>
            <label htmlFor="email">Email</label>
            <input className="email" placeholder="email" />
            <span className="popup__input-error"></span>
            <label htmlFor="password">Password</label>
            <input className="password" placeholder="password" />
            <span className="popup__input-error"></span>
            <label htmlFor="username">UserName</label>
            <input className="username" placeholder="Enter your name" />
            <span className="popup__input-error"></span>
          </div>
          <div className="signup__button-container">
            <button type="submit" className="signup__button">
              Sign up
            </button>
          </div>
          <p className="popup__redirect">
            or
            <button
              type="button"
              className="signup__signin-link"
              onClick={handleSignInButtonClick}
            >
              Sign up
            </button>
          </p>
        </form>
      </PopupWithForm>
    </div>
  );
}

export default SignUp;
