import { Center, Spinner, Text } from '@chakra-ui/react';

const ModernLoader = () => {
  return (
    <Center position={"absolute"} margin="auto" top={"0"} left="0" right="0" bottom="0" display={"flex"} flexDirection="column">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
      <Text>Loading...</Text>
    </Center>
  );
};

export default ModernLoader;
