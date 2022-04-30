import { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { UserContext } from "../contexts/user-context";
import ProtectedRoute from "./protected-route";
import Dashboard from "../components/contributor/pages/dashboard";
import Upload from "../components/contributor/pages/upload";
import UploadDetails from "../components/contributor/pages/upload-details";
import SigninPage from "../components/user/pages/signin";
import { PictureFilesContext } from "../contexts/pictures-files-context";

interface IContributorRoutesProps {}

const ContributorRoutes: React.FunctionComponent<IContributorRoutesProps> = (
  props
) => {
  const { user } = useContext(UserContext);
  const { pictures } = useContext(PictureFilesContext);

  return (
    <Switch>
      <ProtectedRoute
        isAuthenticated={user.details.role === "contributor"}
        redirectPath="/signin"
        path="/"
        component={Dashboard}
        exact={true}
      />
      <Route path="/signin" component={SigninPage} exact={true} />
      <Route path="/dashboard" component={Dashboard} exact={true} />
      <Route path="/upload" component={Upload} exact={true} />
      <ProtectedRoute
        isAuthenticated={!!pictures.files}
        path="/upload-details"
        redirectPath="/upload"
        component={UploadDetails}
        exact={true}
      />
      {/* <Redirect to="/not-found" /> */}
    </Switch>
  );
};

export default ContributorRoutes;
