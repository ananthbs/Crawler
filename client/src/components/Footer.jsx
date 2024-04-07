import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="blue.900" color="white" py={4} textAlign="center">
      <Text fontSize="md">© 2024 Company crwaler. All rights reserved.</Text>
      <Text fontSize="sm" mt={2}>Terms of Service | Privacy Policy</Text>
    </Box>
  );
};

export default Footer;
