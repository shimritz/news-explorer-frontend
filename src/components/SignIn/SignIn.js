import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { Link } from "react-router-dom";
import { useLoggedIn } from "../../context/LoggedInContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validate = () => {
    return email.length > 0 && password.length > 0;
  };

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
      validate={validate}
    >
      <fieldset className="form__fieldset">
        <h3 className="form__input-title">Email</h3>
        <input
          type="email"
          name="email"
          className="form__input"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <span className="form__input-error"></span>
        <h3 className="form__input-title">Password</h3>
        <input
          type="password"
          name="password"
          className="form__input"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
