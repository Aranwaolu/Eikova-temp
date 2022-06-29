import { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { UserContext } from "../contexts/user-context";
import SearchPage from "../components/user/pages/search";
import SigninPage from "../components/user/pages/signin";
import HomePage from "../components/user/pages/index";
import ProtectedRoute from "./protected-route";
import VerifyInvitePage from "../components/user/pages/verify-invite";
interface IUserRoutesProps {}

const UserRoutes: React.FunctionComponent<IUserRoutesProps> = (props) => {
  const { user } = useContext(UserContext);
  const isAuthenticated =
    //   user.isLoggedIn &&
    user.details.role === "user" ||
    user.details.role === "contributor" ||
    user.details.role === "admin" ||
    user.details.role === "superadmin";
    // auth/verify
  return (
    <Switch>
      <Route path="/signin" component={SigninPage} exact={true} />
      <Route path="/auth/verify-invite" component={VerifyInvitePage} exact={true} />
      <ProtectedRoute
        isAuthenticated={isAuthenticated}
        redirectPath="/signin"
        path="/"
        component={HomePage}
        exact={true}
      />
      <ProtectedRoute
        isAuthenticated={isAuthenticated}
        redirectPath="/signin"
        path="/search"
        component={SearchPage}
        exact={true}
      />
      {/* <Redirect to="/not-found" /> */}
    </Switch>
  );
};

export default UserRoutes;
