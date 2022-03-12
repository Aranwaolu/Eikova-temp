import { Router, Switch, Route, Redirect } from "react-router-dom";
import SigninPage from "../components/user/pages/signin";
import HomePage from "../components/user/pages/index";
import { createBrowserHistory } from "history";
import SearchPage from "../components/user/pages/search";
import Dashboard from "../components/admin/pages/dashboard";
import Upload from "../components/admin/pages/upload";
import UploadDetails from "../components/admin/pages/upload-details";

const history = createBrowserHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <>
        {/* <ScrollToTop /> */}
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/signin" component={SigninPage} exact={true} />
          <Route path="/search" component={SearchPage} exact={true} />
          <Route path="/dashboard" component={Dashboard} exact={true} />
          <Route path="/upload" component={Upload} exact={true} />
          <Route
            path="/upload-details"
            component={UploadDetails}
            exact={true}
          />
          {/* <Redirect to="/not-found" /> */}
        </Switch>
      </>
    </Router>
  );
};

export default AppRouter;
