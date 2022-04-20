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
  Spinner,
} from "@chakra-ui/react";
import { useAddAdmin } from "../../../hooks";
import InviteSentModal from "../modals/invite-sent-modal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddAdminModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const {
    loading,
    error,
    isInviteSentModalOpen,
    onInviteSentModalClose,
    handleUsernameInputChange,
    handleEmailInputChange,
    handleInviteAdminClick,
  } = useAddAdmin(onClose);

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
            as="form"
            onSubmit={(e) => {
              e.preventDefault();
            }}
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
              onChange={handleUsernameInputChange}
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
              type="email"
              name="email"
              height="60px"
              backgroundColor="#EAEAEA"
              borderRadius="6px"
              fontSize="18px"
              lineHeight="23px"
            />
            {!!error && (
              <Text color="red" mt="16px">
                {error}
              </Text>
            )}
            <ChakraButton
              display="flex"
              gap="20px"
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
              type="submit"
              _hover={{
                color: "text.primary",
                border: "1px solid #AD7F33",
                bgColor: "white",
              }}
              onClick={handleInviteAdminClick}
            >
              {loading ? "Inviting admin" : "Invite Admin"}
              {loading && <Spinner />}
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
