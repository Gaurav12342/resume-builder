import { Navigate } from "react-router-dom";
import {routeConstant} from './constant';

const PrivateRoute = (props:any) => {
  const { children } = props;
  const userToken = localStorage.getItem("user-token");
  if (!userToken) {
    return <Navigate to={routeConstant.signIn} replace />;
  }
  return children;
};

export default PrivateRoute
