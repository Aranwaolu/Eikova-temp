import { Box } from "@chakra-ui/react";

const PeopleColorCodes: React.FC = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          mr="26px"
        >
          <Box
            as="span"
            height="16px"
            width="16px"
            backgroundColor="#FFCE7C"
            borderRadius="20px"
            marginRight="9px"
          ></Box>
          Admin
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          mr="26px"
        >
          <Box
            as="span"
            height="16px"
            width="16px"
            backgroundColor="#FFEED1"
            borderRadius="20px"
            marginRight="9px"
          ></Box>
          Contributor
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          mr="26px"
        >
          <Box
            as="span"
            height="16px"
            width="16px"
            backgroundColor="#E3E3E3"
            borderRadius="20px"
            marginRight="9px"
          ></Box>
          User
        </Box>
      </Box>
    </>
  );
};

export default PeopleColorCodes;
