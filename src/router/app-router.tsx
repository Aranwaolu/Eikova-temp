import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useContext, useEffect } from "react";
import { PictureFilesContext } from "../contexts/pictures-files-context";
import { PicturesDetailsContext } from "../contexts/pictures-details-context";
import AdminRoutes from "./admin-route";
import ContributorRoutes from "./contributor-routes";
import UserRoutes from "./user-routes";

const history = createBrowserHistory()

const AppRouter = () => {
  const { pictures } = useContext(PictureFilesContext);
  const { setPictureDetails } = useContext(PicturesDetailsContext);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pictures]);
  // Check subdomain
  const host = window.location.host;
  const subdomain = host.split(".")[0];
  return (
    <Router history={history}>
      <>
        {/* <ScrollToTop /> */}
        {subdomain === "admin" && <AdminRoutes />}
        {subdomain === "contributor" && <ContributorRoutes />}
        {subdomain !== "admin" && subdomain !== "contributor" && <UserRoutes />}
      </>
    </Router>
  );
};

export default AppRouter
