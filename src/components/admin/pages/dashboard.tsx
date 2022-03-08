import AdminNav from "../organisms/admin-nav";
import {Box, Button as ChakraButton, Text} from "@chakra-ui/react";
import DashboardGrid from "../organisms/dashboard-grid";
import Button from "../../user/atoms/button";
import {useState} from "react";


const Dashboard: React.FC = () => {
  const images = ["/assets/images/picture-card-1.png", "/assets/images/picture-card-2.png",
    "/assets/images/picture-card-3.png", "/assets/images/picture-card-4.png",
    "/assets/images/picture-card-3.png", "/assets/images/picture-card-4.png",
    "/assets/images/picture-card-3.png", "/assets/images/picture-card-4.png", "/assets/images/picture-card-3.png"]
  const [activeTab, setActiveTab] = useState(0);
  return (<>
    <AdminNav/>
    <Box px="100px" pt="62px" pb="174px">
      <Text fontSize="36px" lineHeight="46px" color="#A0A0A0">Welcome! Let’s start contributing.</Text>
      <Text fontSize="24px" fontWeight="500" mt="48px" mb="36px">Photos</Text>
      <ChakraButton mr="24px" bgColor={activeTab === 0 ? "text.primary" : ""} fontWeight="500" fontSize="18px"
                    color={activeTab === 0? "white" : "#8F8F8F"} h="47px" border={activeTab === 0 ? "" : "1px solid #8F8F8F"}
                    w="85px" onClick={() => {setActiveTab(0)}}>All</ChakraButton>
      <ChakraButton color={activeTab=== 1 ? "white" : "#8F8F8F"} border={activeTab === 1 ? "" : "1px solid #8F8F8F"} h="47px"
                    w="213px" fontWeight="500" bgColor={activeTab === 1 ? "text.primary" : ""} fontSize="18px" onClick={() => {setActiveTab(1)}}>My
        Contributions</ChakraButton>
      <DashboardGrid images={images}/>
      <Button variant="primary" h="54px">LOAD MORE</Button>
    </Box>
  </>);
};

export default Dashboard;
