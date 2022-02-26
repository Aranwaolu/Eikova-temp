import { Redirect, Route } from "react-router-dom";

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  component: React.FC;
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return isAuthenticated ? (
    <Route component={Component} exact={true} {...rest} />
  ) : (
    <Redirect to="/signin" />
  );
};
export default ProtectedRoute;
