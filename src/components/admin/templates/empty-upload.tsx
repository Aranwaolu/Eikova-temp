import { Box, Text } from "@chakra-ui/react";
import DragDrop from "../organisms/drag-drop";

const EmptyUpload: React.FC = () => (
  <Box mt="50px">
    <Text textAlign="center" fontWeight="700" fontSize="36px" lineHeight="46px">
      What are you uploading?
    </Text>
    <Text color="text.gray100" fontSize="18px" textAlign="center" mt="8px">
      Upload your images here. This will also be used as the thumbnail in the
      feeds.
    </Text>
    <DragDrop />
  </Box>
);
export default EmptyUpload;
