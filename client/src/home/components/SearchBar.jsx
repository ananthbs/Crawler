import { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button, Flex, Text } from '@chakra-ui/react';
import { getClientById, queryClientData } from '../actions/home.action';
import { useDispatch, useSelector } from 'react-redux';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchId, setSearchId] = useState('');
  const [showQuerySearchError, setQuerySearchError] = useState(false);
  const [showIdSearchError, setShowIdSearchError] = useState(false);
  const dispatch = useDispatch();
  const handleSearch = () => {
    if(searchQuery == ''){
      setQuerySearchError(true);
    }
    else{
      setQuerySearchError(false);
      dispatch(queryClientData(searchQuery));
    }
  };

  const onClickClientByID = () => {
    if(searchId == ''){
      setShowIdSearchError(true);
    }
    else{
      setShowIdSearchError(false);
      dispatch(getClientById(searchId));
    }
  } 
  return (
    <Box p={4} display="flex" gap={"1.5rem"}>
      <FormControl>
        <Flex>
          <Box>
          <Input
            width="30rem"
            type="text"
            placeholder="Search clients by Id, Cin, Pin, email, name"
            value={searchQuery}
            onChange={(e) => {setSearchQuery(e.target.value); showQuerySearchError && setQuerySearchError(false)}}
            mr={2}
            border={"1px solid"}
            borderColor="grey"
          />
          {showQuerySearchError && <Text position={"absolute"} color="red.500">Please enter a value</Text>}
          </Box>
          <Button colorScheme="blue" onClick={handleSearch}>Search</Button>
        </Flex>
      </FormControl>
      <FormControl>
        <Flex>
          <Box>
            <Input
              width="13rem"
              type="number"
              placeholder="Search clients by Id"
              value={searchId}
              onChange={(e) => {setSearchId(e.target.value); showIdSearchError && setShowIdSearchError(false)}}
              mr={2}
              border={"1px solid"}
              borderColor="grey"
            />
            {showIdSearchError && <Text position={"absolute"} color="red.500">Please enter a ID</Text>}
          </Box>
          <Button colorScheme="blue" onClick={onClickClientByID}>Search</Button>
        </Flex>
      </FormControl>
    </Box>
  );
};

export default SearchBar;
