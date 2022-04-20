import AdminNav from "../../../contributor/organisms/admin-nav";
import {
  Button as ChakraButton,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";

import PeopleColorCodes from "../../molecules/people-color-codes";
import AddAdminModal from "../../modals/add-admin-modal";
import InviteSentModal from "../../modals/invite-sent-modal";
import AddContributorModal from "../../modals/add-contributor-modal";
import PeopleNavBar from "../../molecules/people-nav-bar";
import AddPersonDropdown from "../../molecules/add-person-dropdown";
import { useSuperAdminDashboard } from "../../../../hooks/";
import DashboardTable from "../../organisms/dashboard-table";

const Dashboard: React.FC = () => {
  const {
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
  } = useSuperAdminDashboard();
  return (
    <>
      <AdminNav />
      <Flex
        px="100px"
        pt="62px"
        pb="174px"
        color="#A2A2A2"
        direction="column"
        justify="space-between"
        align="flex-start"
      >
        <Text fontSize="36px" lineHeight="47px" color="#A0A0A0">
          Welcome!
        </Text>
        <Flex mt="30px" direction="row" justify="space-between" align="center">
          <AddPersonDropdown handleCustomState={handleAddPeopleItemClick} />
          <ChakraButton
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            p="15px 30px"
            borderRadius="5px"
            bgColor="#EAEAEA"
            fontWeight="500"
            fontSize="18px"
            lineHeight="23px"
            color="#262626"
            h="60px"
            onClick={onInviteSentModalOpen}
            _focus={{ outline: "none" }}
          >
            <Image src="/assets/images/svg_icons/user_add.svg" mr="16px" />
            Add Category
          </ChakraButton>
        </Flex>
        <Text
          fontSize="24px"
          lineHeight="31px"
          color="#262626"
          mt="43px"
          mb="26px"
        >
          Your People
        </Text>
        <Flex w="100%" direction="row" justify="space-between" align="center">
          <PeopleNavBar setRole={setRole} />

          <PeopleColorCodes />
        </Flex>
        <DashboardTable
          allChecked={allChecked}
          isIndeterminate={isIndeterminate}
          setCheckedItems={setCheckedItems}
          checkedItems={checkedItems}
          people={people}
          loading={loading}
          error={error}
        />
      </Flex>

      <AddAdminModal isOpen={isAddAdminOpen} onClose={onAddAdminClose} />
      <AddContributorModal
        isOpen={isAddContributorModalOpen}
        onClose={onAddContributorModalClose}
      />
      <InviteSentModal
        isOpen={isInviteSentModalOpen}
        onClose={onInviteSentModalClose}
      />
    </>
  );
};

export default Dashboard;
