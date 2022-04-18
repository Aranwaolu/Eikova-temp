import * as React from "react";
import { Box } from "@chakra-ui/react";
import LandingFilter from "../molecules/landing-filter";
import HomeBanner from "../templates/home-banner";
import PictureGrid from "../templates/picture-grid";
import Button from "../atoms/button";
import { getUserFromLocal } from "../../../utils";

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  // console.log(getUserFromLocal());
  
  return (
    <>
      <HomeBanner />
      <LandingFilter />
      <Box pt="42px" pb="161px" px="100px">
        <PictureGrid />
        <Button
          variant="primary"
          bgColor="text.secondary"
          borderRadius="4px"
          mt="49px"
          color="#7B4B36"
          fontSize="14px"
          fontWeight="700"
          h="54px"
        >
          LOAD MORE
        </Button>
      </Box>
    </>
  );
};

export default HomePage;
