import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useState } from "react";
import mainApi from "../../utils/MainApi";

function SignUp({
  isPopupOpen,
  // handleSignInButtonClick,
  onClose,
  handlePopupSubmit,
  onRedirect,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  function handleRegister(e) {
    e.preventDefault();
    handlePopupSubmit({ email, password, name: username });
  }

  const validate = () => {
    return email.length > 0 && password.length > 0 && username.length > 0;
  };
  return (
    <PopupWithForm
      title="sign up"
      name="sign up"
      buttonText="sign up"
      redirect="signin"
      isPopupOpen={isPopupOpen}
      onClose={onClose}
      onSubmit={handleRegister}
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
        <h3 className="form__input-title">Username</h3>
        <input
          name="username"
          className="form__input"
          placeholder="Enter Your Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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

export default SignUp;
