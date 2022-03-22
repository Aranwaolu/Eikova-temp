import { Box, Flex } from "@chakra-ui/react";

interface IUploadArrowProps {
  onPrevClick: () => void;
  onNexClick: () => void;
  prevDisable: boolean;
  nextDisable: boolean;
}
const UploadArrow: React.FC<IUploadArrowProps> = ({
  onPrevClick,
  onNexClick,
  prevDisable,
  nextDisable,
}) => {
  return (
    <Flex>
      <Box
        pos="absolute"
        left="0"
        top="240px"
        opacity={prevDisable ? "0.5" : "1"}
        css={{ svg: { transform: "rotate(180deg)" } }}
        onClick={onPrevClick}
        cursor="pointer"
      >
        <svg
          width="41"
          height="41"
          viewBox="0 0 41 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M28.91 40.7021H12.57C5.51 40.7021 0.75 36.1601 0.75 29.3821V12.0421C0.75 5.26215 5.51 0.702148 12.57 0.702148H28.91C35.99 0.702148 40.75 5.26215 40.75 12.0421V29.3821C40.75 36.1601 35.99 40.7021 28.91 40.7021ZM25.29 19.2021H12.59C11.75 19.2021 11.09 19.8821 11.09 20.7021C11.09 21.5421 11.75 22.2021 12.59 22.2021H25.29L20.33 27.1421C20.05 27.4221 19.89 27.8221 19.89 28.2021C19.89 28.5801 20.05 28.9621 20.33 29.2621C20.91 29.8421 21.87 29.8421 22.45 29.2621L29.99 21.7621C30.55 21.2021 30.55 20.2021 29.99 19.6421L22.45 12.1421C21.87 11.5621 20.91 11.5621 20.33 12.1421C19.75 12.7421 19.75 13.6821 20.33 14.2821L25.29 19.2021Z"
            fill="#200E32"
          />
        </svg>
      </Box>
      <Box
        pos="absolute"
        right="0"
        top="240px"
        opacity={nextDisable ? "0.5" : "1"}
        onClick={onNexClick}
        cursor="pointer"
      >
        <svg
          width="41"
          height="41"
          viewBox="0 0 41 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M28.91 40.7021H12.57C5.51 40.7021 0.75 36.1601 0.75 29.3821V12.0421C0.75 5.26215 5.51 0.702148 12.57 0.702148H28.91C35.99 0.702148 40.75 5.26215 40.75 12.0421V29.3821C40.75 36.1601 35.99 40.7021 28.91 40.7021ZM25.29 19.2021H12.59C11.75 19.2021 11.09 19.8821 11.09 20.7021C11.09 21.5421 11.75 22.2021 12.59 22.2021H25.29L20.33 27.1421C20.05 27.4221 19.89 27.8221 19.89 28.2021C19.89 28.5801 20.05 28.9621 20.33 29.2621C20.91 29.8421 21.87 29.8421 22.45 29.2621L29.99 21.7621C30.55 21.2021 30.55 20.2021 29.99 19.6421L22.45 12.1421C21.87 11.5621 20.91 11.5621 20.33 12.1421C19.75 12.7421 19.75 13.6821 20.33 14.2821L25.29 19.2021Z"
            fill="#200E32"
          />
        </svg>
      </Box>
    </Flex>
  );
};

export default UploadArrow;
