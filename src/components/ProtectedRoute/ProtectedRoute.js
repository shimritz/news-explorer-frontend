import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, isLoggedIn }) {
  if (!isLoggedIn) {
    return <Navigate to="/signin" replace />;
  }

  return children;
}

export default ProtectedRoute;
