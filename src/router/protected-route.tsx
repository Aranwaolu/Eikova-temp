import { Redirect, Route, RouteProps } from "react-router-dom";

interface ProtectedRouteProps extends RouteProps {
  isAuthenticated: boolean;
  component: React.FC;
  redirectPath: string;
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isAuthenticated,
  component: Component,
  redirectPath,
  ...rest
}) => {
  return isAuthenticated ? (
    <Route component={Component} exact={true} {...rest} />
  ) : (
    <Redirect to={redirectPath} />
  );
};
export default ProtectedRoute;
