import { Router, Switch, Route } from "react-router-dom";
import SigninPage from "../components/user/pages/signin";
import HomePage from "../components/user/pages/index";
import { createBrowserHistory } from "history";
import SearchPage from "../components/user/pages/search";
import Dashboard from "../components/contributor/pages/dashboard";
import Upload from "../components/contributor/pages/upload";
import UploadDetails from "../components/contributor/pages/upload-details";
import ProtectedRoute from "./protected-route";
import { useContext, useEffect } from "react";
import { PictureFilesContext } from "../contexts/pictures-files-context";
import { PicturesDetailsContext } from "../contexts/pictures-details-context";

import SuperAdminDashboard from "../components/admin/pages/super-admin/dashboard";
import AdminDashboard from "../components/admin/pages/admin/dashboard";
import CompleteRegistration from "../components/admin/pages/complete-registration";
import { UserContext } from "../contexts/user-context";

const history = createBrowserHistory();

const AppRouter = () => {
  const { pictures } = useContext(PictureFilesContext);
  const { setPictureDetails } = useContext(PicturesDetailsContext);
  const { user } = useContext(UserContext);
  useEffect(() => {
    if (pictures.files) {
      const defaultDetails = pictures.files.map((file) => ({
        title: "",
        description: "",
        tags: "",
        meeting: "",
        location: "",
        date: "",
        minister: "",
        songMinister: "",
      }));
      setPictureDetails(defaultDetails);
    }
  }, [pictures]);

  return (
    <Router history={history}>
      <>
        {/* <ScrollToTop /> */}
        <Switch>
          <ProtectedRoute
            isAuthenticated={user.isLoggedIn}
            redirectPath="/signin"
            path="/"
            component={HomePage}
            exact={true}
          />
          <Route path="/signin" component={SigninPage} exact={true} />
          <Route path="/search" component={SearchPage} exact={true} />
          <Route path="/dashboard" component={Dashboard} exact={true} />
          <Route path="/upload" component={Upload} exact={true} />
          <ProtectedRoute
            isAuthenticated={!!pictures.files}
            path="/upload-details"
            redirectPath="/upload"
            component={UploadDetails}
            exact={true}
          />
          <Route
            path="/super-admin/dashboard"
            component={SuperAdminDashboard}
            exact={true}
          />
          <Route
            path="/admin/dashboard"
            component={AdminDashboard}
            exact={true}
          />
          <Route
            path="/admin/complete-registration"
            component={CompleteRegistration}
            exact={true}
          />
          {/* <Redirect to="/not-found" /> */}
        </Switch>
      </>
    </Router>
  );
};

export default AppRouter;
