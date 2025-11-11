import { use } from "react";
import { AuthContext } from "../Context/AuthProvider/AuthContext";
import { Navigate, useLocation } from "react-router";
import LoadingSpinner from "../Component/LoadingSpinner/LoadingSpinner";

const PrivateRouter = ({ children }) => {
  const { user, authLoading } = use(AuthContext);
  const loaction=useLocation()
//   console.log(loaction)
  if (authLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={loaction.pathname} to="/login"></Navigate>;
};

export default PrivateRouter;
