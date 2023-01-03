import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useFormWithValidation } from "../../utils/useForm";

function SignIn({ isPopupOpen, onClose, onRedirect, handlePopupSubmit }) {
  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    serverError,
    setServerError,
  } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    handlePopupSubmit({ email: values.email, password: values.password })
      .then(() => {
        resetForm();
      })
      .catch((err) => {
        if (err.message) setServerError(err.message);
      });
  }

  return (
    <PopupWithForm
      title="sign in"
      name="sign-in"
      buttonText="sign in"
      redirect="signup"
      isPopupOpen={isPopupOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
          value={values.password || ""}
          onChange={handleChange}
          required
        />
        <span className="form__input-error password-input-error">
          {errors.password}
        </span>

        <span className="form__input-error form__input-error_type-general">
          {serverError}
        </span>
      </fieldset>
    </PopupWithForm>
  );
}

export default SignIn;
