import {
  Grid,
  Box,
  Img,
  Text,
  Skeleton,
  HStack,
  Button,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

interface IDashboardGridProps {
  images: {
    thumbnail: string;
    url: string;
    id: string;
    user: { username: string };
  }[];
  loading: boolean;
  category: "all" | "contributions";
}

const DashboardGrid: React.FC<IDashboardGridProps> = ({
  images,
  loading,
  category,
}) => {
  const history = useHistory();
  return (
    <Grid templateColumns="repeat(4, 1fr)" mt="36px" mb="40px" gap="20px">
      {images.map((image, index) => (
        <Skeleton key={image.thumbnail + index} isLoaded={!loading}>
          <Box
            key={image.thumbnail}
            pos="relative"
            role="group"
            h="100%"
            borderRadius="3.75831px"
            overflow="hidden"
          >
            <Img h="100%" objectFit="cover" src={image.url} w="100%" />
            <Box
              display="none"
              background="linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 50%)"
              h="100%"
              w="100%"
              pos="absolute"
              left="0"
              top="0"
              _groupHover={{ display: "block" }}
            ></Box>
            {category === "all" ? (
              <HStack
                justifyContent="space-between"
                w="89%"
                pos="absolute"
                bottom="12px"
                left="16px"
                display="none"
                _groupHover={{ display: "flex" }}
                color="white"
                fontSize="14px"
              >
                <Text>{image.user.username}</Text>
                <Box
                  as="button"
                  onClick={() => {
                    history.push(`/edit/${image.id}`);
                  }}
                >
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.7" filter="url(#filter0_b_4_166)">
                      <rect
                        y="0.184082"
                        width="31.9456"
                        height="31.9456"
                        rx="6.55295"
                        fill="black"
                      />
                    </g>
                    <path
                      d="M15.4651 6.94632H11.7261C8.65111 6.94632 6.72311 9.12332 6.72311 12.2053V20.5193C6.72311 23.6013 8.64211 25.7783 11.7261 25.7783H20.5501C23.6351 25.7783 25.5541 23.6013 25.5541 20.5193V16.4913"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.8006 15.0782L20.2736 7.60521C21.2046 6.67521 22.7136 6.67521 23.6446 7.60521L24.8616 8.82221C25.7926 9.75321 25.7926 11.2632 24.8616 12.1932L17.3526 19.7022C16.9456 20.1092 16.3936 20.3382 15.8176 20.3382H12.0716L12.1656 16.5582C12.1796 16.0022 12.4066 15.4722 12.8006 15.0782Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.138 8.75981L23.704 13.3258"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <filter
                        id="filter0_b_4_166"
                        x="-3.27647"
                        y="-3.09239"
                        width="38.4986"
                        height="38.4986"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood
                          floodOpacity="0"
                          result="BackgroundImageFix"
                        />
                        <feGaussianBlur
                          in="BackgroundImage"
                          stdDeviation="1.63824"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_4_166"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_4_166"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </Box>
              </HStack>
            ) : (
              <HStack
                justifyContent="center"
                pos="absolute"
                bottom="12px"
                display="none"
                _groupHover={{ display: "flex" }}
                color="white"
                fontSize="14px"
                left="50%"
                transform="translateX(-50%)"
              >
                <Button
                  display="flex"
                  gap="10px"
                  background="rgba(0, 0, 0, 0.5)"
                  borderRadius="7px"
                  backdropFilter="blur(3.27647px)"
                  _hover={{}}
                >
                  Delete
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.7977 9.62509C19.7977 9.62509 19.2547 16.3601 18.9397 19.1971C18.7897 20.5521 17.9527 21.3461 16.5817 21.3711C13.9727 21.4181 11.3607 21.4211 8.75271 21.3661C7.43371 21.3391 6.61071 20.5351 6.46371 19.2041C6.14671 16.3421 5.60671 9.62509 5.60671 9.62509"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21.181 6.39659H4.22301"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.9134 6.39659C17.1284 6.39659 16.4524 5.84159 16.2984 5.07259L16.0554 3.85659C15.9054 3.29559 15.3974 2.90759 14.8184 2.90759H10.5854C10.0064 2.90759 9.49841 3.29559 9.34841 3.85659L9.10541 5.07259C8.95141 5.84159 8.27541 6.39659 7.49041 6.39659"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
                <Button
                  background="rgba(0, 0, 0, 0.5)"
                  borderRadius="7px"
                  backdropFilter="blur(3.27647px)"
                  display="flex"
                  gap="10px"
                  _hover={{}}
                  onClick={() => {
                    history.push(`/edit/${image.id}`);
                  }}
                >
                  Edit
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9651 2.94598H8.22611C5.15111 2.94598 3.22311 5.12298 3.22311 8.20498V16.519C3.22311 19.601 5.14211 21.778 8.22611 21.778H17.0501C20.1351 21.778 22.0541 19.601 22.0541 16.519V12.491"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.30062 11.0779L16.7736 3.60488C17.7046 2.67488 19.2136 2.67488 20.1446 3.60488L21.3616 4.82188C22.2926 5.75288 22.2926 7.26288 21.3616 8.19288L13.8526 15.7019C13.4456 16.1089 12.8936 16.3379 12.3176 16.3379H8.57162L8.66562 12.5579C8.67962 12.0019 8.90662 11.4719 9.30062 11.0779Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.638 4.75948L20.204 9.32548"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </HStack>
            )}
          </Box>
        </Skeleton>
      ))}
    </Grid>
  );
};
export default DashboardGrid;
