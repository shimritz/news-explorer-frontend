import { useEffect } from "react";
import { Navigate } from "react-router-dom";

function SignInPage({ isSignInOpen, setisSignInOpen, isLoggedIn }) {
  useEffect(() => {
    // if (isLoggedIn) {
    //   <Navigate to="/" replace />;
    // }

    if (!isSignInOpen) {
      setisSignInOpen(true);
    }
  }, []);

  return <></>;
}

export default SignInPage;
