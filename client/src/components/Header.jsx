// Header.jsx
import { Heading, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <Heading boxShadow={"0 86px 34px rgba(0,0,0,.01),0 48px 29px rgba(0,0,0,.03),0 5px 12px rgba(0,0,0,.05),0 0 0 rgba(0,0,0,.05)"} >
      <Text as="h1" fontFamily="Montserrat" fontSize="3xl" textAlign="center" py={4}>Crawler</Text> 
    </Heading>
  );
};

export default Header;
