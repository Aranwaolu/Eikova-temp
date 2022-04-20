import { useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getAllUsers } from "../services/users";

interface Person {
  id: string;
  username: string;
  email: string;
  department: string;
  role: string;
  status: string;
}

const useSuperAdminDashboard = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [checkedItems, setCheckedItems] = useState([false]);
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const {
    isOpen: isAddAdminOpen,
    onOpen: onAddAdminOpen,
    onClose: onAddAdminClose,
  } = useDisclosure();
  const {
    isOpen: isAddContributorModalOpen,
    onOpen: onAddContributorModalOpen,
    onClose: onAddContributorModalClose,
  } = useDisclosure();

  const {
    isOpen: isInviteSentModalOpen,
    onOpen: onInviteSentModalOpen,
    onClose: onInviteSentModalClose,
  } = useDisclosure();

  useEffect(() => {
    document.title = "Admin Dashboad - Eikova";
    setLoading(true);
    getAllUsers(role)
      .then((res) => {
        setPeople(res.data.results);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setError("An error occurred, please try again");
      });
  }, [role]);

  useEffect(() => {
    setCheckedItems(Array(people.length).fill(false));
  }, [people]);

  const handleAddPeopleItemClick = (e: string) => {
    if (e === "admin") {
      onAddAdminOpen();
    } else if (e === "user") {
      onInviteSentModalOpen();
    } else if (e === "contributor") {
      onAddContributorModalOpen();
    }
  };

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;
  return {
    handleAddPeopleItemClick,
    onInviteSentModalOpen,
    allChecked,
    isIndeterminate,
    setCheckedItems,
    checkedItems,
    people,
    isAddAdminOpen,
    onAddAdminClose,
    isAddContributorModalOpen,
    onAddContributorModalClose,
    isInviteSentModalOpen,
    onInviteSentModalClose,
    setRole,
    loading,
    error,
  };
};
export default useSuperAdminDashboard;
