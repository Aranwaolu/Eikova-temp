import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { addAdmin } from "../services/auth";

const useAddAdmin = (onClose: () => void) => {
  const [personObject, setPersonObject] = useState({
    username: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const {
    isOpen: isInviteSentModalOpen,
    onOpen: onInviteSentModalOpen,
    onClose: onInviteSentModalClose,
  } = useDisclosure();

  const handleUsernameInputChange = (e: any) => {
    setPersonObject((prevState) => ({
      ...prevState,
      username: e.target.value,
    }));
  };
  const handleEmailInputChange = (e: any) => {
    setPersonObject((prevState) => ({ ...prevState, email: e.target.value }));
  };

  const handleInviteAdminClick = () => {
    if (!!personObject.email && !!personObject.username) {
      setError("");
      setLoading(true);
      console.log(personObject);
      addAdmin(personObject)
        .then((res) => {
          setLoading(false);
          if (res.status === 200) {
            onClose();
            onInviteSentModalOpen();
          } else {
            setError("An error occurred, please try again");
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log("error: ", err.response);
          if (399 < err.response.status && err.response.status < 500) {
            setError(err.response.data.message);
          } else {
            setError("An error occurred, please try again");
          }
        });
    } else {
      setError("Please add a username and email");
    }
  };
  return {
    loading,
    error,
    isInviteSentModalOpen,
    onInviteSentModalClose,
    handleUsernameInputChange,
    handleEmailInputChange,
    handleInviteAdminClick,
  };
};

export default useAddAdmin;
