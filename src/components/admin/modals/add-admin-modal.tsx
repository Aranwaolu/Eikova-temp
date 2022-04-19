import {
  Box,
  Button as ChakraButton,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import InviteSentModal from "../modals/invite-sent-modal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddAdminModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [personObject, setPersonObject] = useState({
    fullName: "",
    email: "",
    department: "",
    role: "",
  });

  const {
    isOpen: isInviteSentModalOpen,
    onOpen: onInviteSentModalOpen,
    onClose: onInviteSentModalClose,
  } = useDisclosure();

  const handleFullNameInputChange = (e: any) => {
    setPersonObject((prevState) => ({
      ...prevState,
      fullName: e.target.value,
    }));
  };
  const handleEmailInputChange = (e: any) => {
    setPersonObject((prevState) => ({ ...prevState, email: e.target.value }));
  };

  const handleInviteAdminClick = () => {
    console.log(personObject);
    onClose();
    onInviteSentModalOpen();
  };

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
            justifyContent="flex-start"
            alignItems="center"
            width="435px"
            padding="0"
            margin="44px 0"
          >
            <Text
              fontWeight="500"
              fontSize="24px"
              lineHeight="31px"
              color="#262626"
              mb="8px"
            >
              Add Admin
            </Text>

            <Text
              fontWeight="400"
              fontSize="14px"
              lineHeight="19px"
              color="#A0A0A0"
              mb="15px"
            >
              *An admin can add or disable contributors and users
            </Text>

            <Box borderBottom="1px solid #E8E8E8" width="100%" mb="18px"></Box>

            <Text
              fontWeight="400"
              fontSize="14px"
              lineHeight="18px"
              color="#666666"
              mb="18px"
            >
              Provide a few details to invite
            </Text>

            <Input
              onChange={handleFullNameInputChange}
              placeholder="Full Name"
              height="60px"
              backgroundColor="#EAEAEA"
              borderRadius="6px"
              fontSize="18px"
              lineHeight="23px"
              marginBottom="24px"
            />
            <Input
              onChange={handleEmailInputChange}
              placeholder="Email"
              height="60px"
              backgroundColor="#EAEAEA"
              borderRadius="6px"
              fontSize="18px"
              lineHeight="23px"
            />

            <ChakraButton
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              borderRadius="6px"
              bgColor="#AD7F33"
              fontWeight="500"
              fontSize="18px"
              lineHeight="23px"
              color="#FFFFFF"
              mt="32px"
              h="60px"
              w="100%"
              _focus={{ outline: "none" }}
              onClick={() => handleInviteAdminClick()}
            >
              Invite Admin
            </ChakraButton>

            <Text
              marginTop="10px"
              fontSize="14px"
              lineHeight="19px"
              color="#A0A0A0"
            >
              A mail will be sent to this user for verification
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>

      <InviteSentModal
        isOpen={isInviteSentModalOpen}
        onClose={onInviteSentModalClose}
      />
    </>
  );
};

export default AddAdminModal;
