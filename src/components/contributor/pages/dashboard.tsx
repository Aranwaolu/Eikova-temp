import AdminNav from "../organisms/admin-nav";
import {
  Box,
  Button as ChakraButton,
  Flex,
  Spinner,
  Text,
} from "@chakra-ui/react";
import DashboardGrid from "../organisms/dashboard-grid";
import Button from "../../user/atoms/button";
import { useEffect, useState } from "react";
import {
  useFetchContributorPhotos,
  useFetchLandingPhotos,
} from "../../../hooks";

const Dashboard: React.FC = () => {
  const { photos, loading, error, loadMore, reachedPageLimit, loadingMore } =
    useFetchLandingPhotos();
  const {
    contributorPhotos,
    contributorLoading,
    contributorError,
    contributorLoadMore,
    contributorReachedPageLimit,
    contributorLoadingMore,
  } = useFetchContributorPhotos();
  const placeholderPhotos = [
    {
      url: "/assets/images/picture-card-1.png",
      thumbnail: "/assets/images/picture-card-1.png",
      id: "",
      user: { username: "" },
    },
    {
      url: "/assets/images/picture-card-1.png",
      thumbnail: "/assets/images/picture-card-1.png",
      id: "",
      user: { username: "" },
    },
    {
      url: "/assets/images/picture-card-1.png",
      thumbnail: "/assets/images/picture-card-1.png",
      id: "",
      user: { username: "" },
    },
    {
      url: "/assets/images/picture-card-1.png",
      thumbnail: "/assets/images/picture-card-1.png",
      id: "",
      user: { username: "" },
    },
    {
      url: "/assets/images/picture-card-1.png",
      thumbnail: "/assets/images/picture-card-1.png",
      id: "",
      user: { username: "" },
    },
    {
      url: "/assets/images/picture-card-1.png",
      thumbnail: "/assets/images/picture-card-1.png",
      id: "",
      user: { username: "" },
    },
    {
      url: "/assets/images/picture-card-1.png",
      thumbnail: "/assets/images/picture-card-1.png",
      id: "",
      user: { username: "" },
    },
    {
      url: "/assets/images/picture-card-1.png",
      thumbnail: "/assets/images/picture-card-1.png",
      id: "",
      user: { username: "" },
    },
  ];
  const [activeTab, setActiveTab] = useState<"all" | "contributions">("all");

  useEffect(() => {
    document.title = "Dashboad - Eikova";
  }, []);
  return (
    <>
      <AdminNav />
      <Box px="100px" pt="62px" pb="174px">
        <Text fontSize="36px" lineHeight="46px" color="#A0A0A0">
          Welcome! Let’s start contributing.
        </Text>
        <Text fontSize="24px" fontWeight="500" mt="48px" mb="36px">
          Photos
        </Text>
        <ChakraButton
          mr="24px"
          bgColor={activeTab === "all" ? "text.primary" : ""}
          fontWeight="500"
          fontSize="18px"
          color={activeTab === "all" ? "white" : "#8F8F8F"}
          h="47px"
          border={activeTab === "all" ? "" : "1px solid #8F8F8F"}
          w="85px"
          onClick={() => {
            setActiveTab("all");
          }}
        >
          All
        </ChakraButton>
        <ChakraButton
          color={activeTab === "contributions" ? "white" : "#8F8F8F"}
          border={activeTab === "contributions" ? "" : "1px solid #8F8F8F"}
          h="47px"
          w="213px"
          fontWeight="500"
          bgColor={activeTab === "contributions" ? "text.primary" : ""}
          fontSize="18px"
          onClick={() => {
            setActiveTab("contributions");
          }}
        >
          My Contributions
        </ChakraButton>
        {activeTab === "all" ? (
          <>
            {error ? (
              <p>{error}</p>
            ) : (
              <>
                <DashboardGrid
                  category={activeTab}
                  loading={loading}
                  images={loading ? placeholderPhotos : photos.results}
                />
                {loadingMore && (
                  <Flex
                    justifyContent="center"
                    alignItems="center"
                    h="400px"
                    w="100%"
                  >
                    <Spinner h="50px" w="50px" thickness="7px" />
                  </Flex>
                )}
                {!reachedPageLimit && !loading ? (
                  <Button variant="primary" h="54px" onClick={loadMore}>
                    LOAD MORE
                  </Button>
                ) : (
                  ""
                )}
              </>
            )}
          </>
        ) : (
          <>
            {contributorError ? (
              <p>{contributorError}</p>
            ) : (
              <>
                <DashboardGrid
                  category={activeTab}
                  loading={contributorLoading}
                  images={
                    contributorLoading
                      ? placeholderPhotos
                      : contributorPhotos.results
                  }
                />
                {contributorLoadingMore && (
                  <Flex
                    justifyContent="center"
                    alignItems="center"
                    h="400px"
                    w="100%"
                  >
                    <Spinner h="50px" w="50px" thickness="7px" />
                  </Flex>
                )}
                {!contributorReachedPageLimit && !contributorLoading ? (
                  <Button
                    variant="primary"
                    h="54px"
                    onClick={contributorLoadMore}
                  >
                    LOAD MORE
                  </Button>
                ) : (
                  ""
                )}
              </>
            )}
          </>
        )}
      </Box>
    </>
  );
};

export default Dashboard;
