import * as React from "react";
import LandingFilter from "../molecules/landing-filter";
import HomeBanner from "../templates/home-banner";

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  return (
    <>
      <HomeBanner />
      <LandingFilter />
    </>
  );
};

export default HomePage;
