import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { Link } from "react-router-dom";

// function SignIn(isPopupOpen) {
function SignIn({ isPopupOpen, handleSignUpButtonClick, onClose }) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="sign-in">
      <PopupWithForm
        name={"sign-in"}
        isPopupOpen={isPopupOpen}
        onClose={onClose}
      >
        <form onSubmit={handleSubmit} className="form signin__form">
          <div className="signin">
            <h2 className="signin__welcome">Sign in</h2>
            <label htmlFor="email">Email</label>
            <input placeholder="email" required className="email" />
            <span className="popup__input-error"></span>
            <label htmlFor="password">Password</label>
            <input placeholder="password" required className="password" />
            <span className="popup__input-error"></span>
          </div>
          <div className="signin__button-container">
            <button type="submit" className="signin__button">
              Sign in
            </button>
          </div>
          <p className="popup__redirect">
            or
            <button
              type="button"
              className="signin__signup-link"
              onClick={handleSignUpButtonClick}
            >
              Sign up
            </button>
          </p>
        </form>
      </PopupWithForm>
    </div>
  );
}

export default SignIn;
