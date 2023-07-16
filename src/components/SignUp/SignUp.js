import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useFormWithValidation } from "../../utils/useForm";

function SignUp({ isPopupOpen, onClose, handlePopupSubmit, onRedirect }) {
  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    serverError,
    setServerError,
  } = useFormWithValidation();

  function handleRegister(e) {
    e.preventDefault();
    handlePopupSubmit({
      email: values.email,
      password: values.password,
      name: values.username,
    })
      .then(() => {
        resetForm();
      })
      .catch((err) => {
        if (err.message) setServerError(err.message);
      });
  }

  return (
    <PopupWithForm
      title="sign up"
      name="sign-up"
      buttonText="sign up"
      redirect="signin"
      isPopupOpen={isPopupOpen}
      onClose={onClose}
      onSubmit={handleRegister}
      onRedirect={onRedirect}
      isValid={isValid}
    >
      <fieldset className="form__fieldset">
        <h3 className="form__input-title">Email</h3>
        <input
          type="email"
          name="email"
          className="form__input"
          placeholder="Enter Email"
          minLength="2"
          maxLength="40"
          value={values.email || ""}
          onChange={handleChange}
          required
        />
        <span className="form__input-error email-input-error">
          {errors.email}
        </span>
        <h3 className="form__input-title">Password</h3>
        <input
          type="password"
          name="password"
          className="form__input"
          placeholder="Enter Password"
          minLength="8"
          maxLength="50"
          value={values.password || ""}
          onChange={handleChange}
          required
        />
        <span className="form__input-error password-input-error">
          {errors.password}
        </span>
        <h3 className="form__input-title">Username</h3>
        <input
          type="text"
          name="username"
          className="form__input"
          placeholder="Enter Your Username"
          minLength="2"
          maxLength="40"
          value={values.username || ""}
          onChange={handleChange}
          required
        />
        <span className="form__input-error name-input-error">
          {errors.name}
        </span>
        <span className="form__input-error form__input-error_type-general">
          {serverError}
        </span>
      </fieldset>
    </PopupWithForm>
  );
}

export default SignUp;
