import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { Link } from "react-router-dom";
import { useLoggedIn } from "../../context/LoggedInContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// function SignIn(isPopupOpen) {
function SignIn({
  isPopupOpen,
  handleSignUpButtonClick,
  onClose,
  onRedirect,
  handlePopupSubmit,
}) {
  const { setIsLoggedIn, isLoggedIn } = useLoggedIn();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/saved-news");
    }
  }, [isLoggedIn]);

  function handleSubmit(e) {
    // api authentication call here

    handlePopupSubmit(e);
    setIsLoggedIn(true);
    navigate("/saved-news");
  }

  return (
    // <div className="sign-up">
    <PopupWithForm
      title="sign in"
      name="sign in"
      buttonText="sign in"
      redirect="signup"
      isPopupOpen={isPopupOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onRedirect={onRedirect}
    >
      <fieldset className="form__fieldset">
        <h3 className="form__input-title">Email</h3>
        <input
          type="email"
          name="email"
          className="form__input"
          placeholder="Enter Email"
          required
        />
        <span className="form__input-error"></span>
        <h3 className="form__input-title">Password</h3>
        <input
          type="password"
          name="password"
          className="form__input"
          placeholder="Enter Password"
          required
        />
        <span className="form__input-error"></span>

        {/* <span className="form__input-error form__input-error_type-general">
            "loggedError"
          </span> */}
      </fieldset>
    </PopupWithForm>
  );
}

export default SignIn;
