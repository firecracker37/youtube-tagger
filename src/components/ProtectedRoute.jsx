import { Route, Navigate } from "react-router-dom";
import { auth } from "../utils/firebaseConfig"
import { useAuthState } from "react-firebase-hooks/auth";

const ProtectedRoute = ({ element, ...rest }) => {
    const [user, loading] = useAuthState(auth);
    if(!user) {
        return <Navigate to="/" replace />;
    }

    if (loading) {
        return null;
    }

  return ( 
    <Route
    {...rest}
    element={element}
  />
  );
}

export default ProtectedRoute