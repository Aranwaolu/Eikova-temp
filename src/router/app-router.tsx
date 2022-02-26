import { Router, Switch, Route, Redirect } from "react-router-dom";
import SigninPage from "../components/pages/signin";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <>
        {/* <ScrollToTop /> */}
        <Switch>
          <Route path="/signin" component={SigninPage} exact={true} />
          <Redirect to="/not-found" />
        </Switch>
      </>
    </Router>
  );
};

export default AppRouter;
