import { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { UserContext } from "../contexts/user-context";
import ProtectedRoute from "./protected-route";
import SuperAdminDashboard from "../components/admin/pages/super-admin/dashboard";
import CompleteRegistration from "../components/admin/pages/complete-registration";
import AdminSigninPage from "../components/contributor/pages/admin-signin";

interface IAdminRoutesProps {}

const AdminRoutes: React.FunctionComponent<IAdminRoutesProps> = (props) => {
  const { user } = useContext(UserContext);

  return (
    <Switch>
      <ProtectedRoute
        isAuthenticated={
          user.details.role === "admin" || user.details.role === "superadmin"
        }
        redirectPath="/signin"
        path="/"
        component={SuperAdminDashboard}
        exact={true}
      />
      <Route path="/signin" component={AdminSigninPage} exact={true} />
      <Route
        path="/complete-registration"
        component={CompleteRegistration}
        exact={true}
      />
      {/* <Redirect to="/not-found" /> */}
    </Switch>
  );
};

export default AdminRoutes;
