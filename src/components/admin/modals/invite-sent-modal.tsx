import {
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InviteSentModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal
        // preserveScrollBarGap
        blockScrollOnMount={true}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
        size="2xl"
      >
        <ModalOverlay
          background="rgba(196, 196, 196, 0.65)"
          backdropFilter="blur(4px)"
        />
        <ModalContent
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          padding="0"
        >
          <ModalCloseButton _focus={{ outline: "none" }} />
          <ModalBody
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            padding="0"
            margin="68px 0"
          >
            <Image src="/assets/images/svg_icons/check_icon.svg" mb="21px" />

            <Text
              fontWeight="500"
              fontSize="24px"
              lineHeight="31px"
              color="#262626"
              mb="8px"
            >
              Invite Sent!
            </Text>

            <Text
              fontWeight="400"
              fontSize="16px"
              lineHeight="21px"
              color="#666666"
            >
              User has been invited.
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default InviteSentModal;
