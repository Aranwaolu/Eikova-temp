import * as React from 'react';
import { Box, HStack, Text } from "@chakra-ui/react";
import NavigationBar from '../organisms/nav';


interface IHomePageProps {
}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  return <>
  <NavigationBar />
  </>;
};

export default HomePage;
