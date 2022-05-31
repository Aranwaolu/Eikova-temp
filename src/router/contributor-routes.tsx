import { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { UserContext } from "../contexts/user-context";
import ProtectedRoute from "./protected-route";
import Dashboard from "../components/contributor/pages/dashboard";
import Upload from "../components/contributor/pages/upload";
import UploadDetails from "../components/contributor/pages/upload-details";
import AdminSigninPage from "../components/contributor/pages/admin-signin";
import CompleteRegistration from "../components/admin/pages/complete-registration";
import { PictureFilesContext } from "../contexts/pictures-files-context";
import EditPhoto from "../components/contributor/pages/edit";

interface IContributorRoutesProps {}

const ContributorRoutes: React.FunctionComponent<IContributorRoutesProps> = (
  props
) => {
  const { user } = useContext(UserContext);
  const { pictures } = useContext(PictureFilesContext);
  const isAuthenticated =
    // user.isLoggedIn &&
    user.details.role === "contributor" ||
    user.details.role === "admin" ||
    user.details.role === "superadmin";

  return (
    <Switch>
      <Route path="/signin" component={AdminSigninPage} exact={true} />
      <Route
        path="/verify-invite"
        component={CompleteRegistration}
        exact={true}
      />
      <ProtectedRoute
        isAuthenticated={isAuthenticated}
        redirectPath="/signin"
        path="/"
        component={Dashboard}
        exact={true}
      />
      <ProtectedRoute
        isAuthenticated={isAuthenticated}
        redirectPath="/signin"
        path="/dashboard"
        component={Dashboard}
        exact={true}
      />
      <ProtectedRoute
        isAuthenticated={isAuthenticated}
        redirectPath="/signin"
        path="/upload"
        component={Upload}
        exact={true}
      />
      <ProtectedRoute
        isAuthenticated={pictures.files !== null && pictures.files.length > 0}
        path="/upload-details"
        redirectPath="/upload"
        component={UploadDetails}
        exact={true}
      />
      <ProtectedRoute
        isAuthenticated={isAuthenticated}
        path="/edit/:image"
        redirectPath="/upload"
        component={EditPhoto}
        exact={true}
      />
      {/* <Redirect to="/not-found" /> */}
    </Switch>
  );
};

export default ContributorRoutes;
