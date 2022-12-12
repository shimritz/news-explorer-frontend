import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { Link } from "react-router-dom";
// import { useLoggedIn } from "../../context/LoggedInContext";

// function SignIn(isPopupOpen) {
function SignIn({ isPopupOpen, handleSignUpButtonClick, onClose, onRedirect }) {
  // const { isLoggedIn, handleLogOut } = useLoggedIn();
  function handleSubmit(e) {
    e.preventDefault();
    // isLoggedIn(true);
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

//   return (
//     <div className="sign-in">
//       <PopupWithForm
//         name={"sign-in"}
//         isPopupOpen={isPopupOpen}
//         onClose={onClose}
//       >
//         <form onSubmit={handleSubmit} className="form signin__form">
//           <div className="signin">
//             <h2 className="signin__welcome">Sign in</h2>
//             <label htmlFor="email">Email</label>
//             <input placeholder="email" required className="email" />
//             <span className="popup__input-error"></span>
//             <label htmlFor="password">Password</label>
//             <input placeholder="password" required className="password" />
//             <span className="popup__input-error"></span>
//           </div>
//           <div className="signin__button-container">
//             <button type="submit" className="signin__button">
//               Sign in
//             </button>
//           </div>
//           <p className="popup__redirect">
//             or
//             <button
//               type="button"
//               className="signin__signup-link"
//               onClick={handleSignUpButtonClick}
//             >
//               Sign up
//             </button>
//           </p>
//         </form>
//       </PopupWithForm>
//     </div>
//   );
// }

export default SignIn;
