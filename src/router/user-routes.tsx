import { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { UserContext } from "../contexts/user-context";
import SearchPage from "../components/user/pages/search";
import SigninPage from "../components/user/pages/signin";
import HomePage from "../components/user/pages/index";
import ProtectedRoute from "./protected-route";
interface IUserRoutesProps {}

const UserRoutes: React.FunctionComponent<IUserRoutesProps> = (props) => {
  const { user } = useContext(UserContext);

  return (
    <Switch>
      <ProtectedRoute
        isAuthenticated={user.details.role === "user"}
        redirectPath="/signin"
        path="/"
        component={HomePage}
        exact={true}
      />
      <Route path="/signin" component={SigninPage} exact={true} />
      <Route path="/search" component={SearchPage} exact={true} />
      {/* <Redirect to="/not-found" /> */}
    </Switch>
  );
};

export default UserRoutes;
