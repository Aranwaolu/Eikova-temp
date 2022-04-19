import * as React from "react";
import { Box, Text } from "@chakra-ui/react";
import LandingFilter from "../molecules/landing-filter";
import HomeBanner from "../templates/home-banner";
import PictureGrid from "../templates/picture-grid";
import Button from "../atoms/button";
import { useFetchLandingPhotos } from "../../../hooks";

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  const { photos, loading, error, loadMore, reachedPageLimit } = useFetchLandingPhotos();

  return (
    <>
      <HomeBanner />
      <LandingFilter />
      <Box pt="42px" pb="161px" px="100px">
        {error ? (
          <Text>{error}</Text>
        ) : (
          <>
            <PictureGrid photos={photos.results} loading={loading} />
            {(!loading && !reachedPageLimit)&& (
              <Button
                variant="primary"
                bgColor="text.secondary"
                borderRadius="4px"
                mt="49px"
                color="#7B4B36"
                fontSize="14px"
                fontWeight="700"
                h="54px"
                onClick={loadMore}
              >
                LOAD MORE
              </Button>
            )}
          </>
        )}
      </Box>
    </>
  );
};

export default HomePage;
