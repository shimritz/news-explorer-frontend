import PopupWithForm from "../PopupWithForm/PopupWithForm";

function SignUp({
  isPopupOpen,
  // handleSignInButtonClick,
  onClose,
  handleSubmit,
  onRedirect,
}) {
  return (
    // <div className="sign-up">
    <PopupWithForm
      title="sign up"
      name="sign up"
      buttonText="sign up"
      redirect="signin"
      isPopupOpen={isPopupOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onRedirect={onRedirect}
    >
      {/* <form onSubmit={handleSubmit} className="form signup__form">
          <div className="signup"> */}
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
          name="password"
          className="form__input"
          placeholder="Enter Password"
          required
        />
        <span className="form__input-error"></span>
        <h3 className="form__input-title">Username</h3>
        <input
          name="username"
          className="form__input"
          placeholder="Enter Your Username"
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
