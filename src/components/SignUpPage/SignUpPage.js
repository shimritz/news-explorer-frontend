import { useEffect } from "react";
import { Navigate } from "react-router-dom";

function SignUpPage({ isSignUpOpen, setisSignUpOpen, isLoggedIn }) {
  useEffect(() => {
    // if (isLoggedIn) {
    //   <Navigate to="/" replace />;
    //   return;
    // }

    if (!isSignUpOpen) {
      setisSignUpOpen(true);
    }
  }, []);

  return <></>;
}

export default SignUpPage;
