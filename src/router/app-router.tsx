import { Router, Switch, Route, Redirect } from "react-router-dom";
import SigninPage from "../components/pages/signin";
import HomePage from "../components/pages/index";
import { createBrowserHistory } from "history";
import SearchPage from "../components/pages/search";

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
          {/* <Redirect to="/not-found" /> */}
        </Switch>
      </>
    </Router>
  );
};

export default AppRouter;
