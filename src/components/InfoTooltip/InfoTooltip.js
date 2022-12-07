import PopupWithForm from "../PopupWithForm/PopupWithForm";
function InfoTooltip({ isPopupOpen, onClose }) {
  return (
    <PopupWithForm name="info" isPopupOpen={isPopupOpen} onClose={onClose}>
      <div className="info__wrapper">
        <h2 className="info__heading">Registration successfully completed!</h2>
        <button type="button" className="link_to_signin">
          Sign in
        </button>
      </div>
    </PopupWithForm>
  );
}

// {
//   status === "success" ? (
//     <div>
//       <img className="popup__icon" src={SuccessIcon} alt="" />
//       <p className="popup__status-message">
//         Sucess! You have now been registered.
//       </p>
//     </div>
//   ) : (
//     <div>
//       <img className="popup__icon" src={ErrorIcon} alt="" />
//       <p className="popup__status-message">
//         Oops, something went wrong! Please try again.
//       </p>
//     </div>
//   );
// }

export default InfoTooltip;
