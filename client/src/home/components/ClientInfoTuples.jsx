import { useState } from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Button, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Tooltip, Text, Flex, useToast } from '@chakra-ui/react';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { deleteClient, updateClientData } from '../actions/home.action';

const ClientInfoTuples = () => {
    const {clientsData } = useSelector((state) => state);
  const [data, setData] = useState([]);

  const [updateData, SetUpdateData] = useState({})
  const [isOpen, setIsOpen] = useState(false);

  const toast = useToast();
  const dispatch = useDispatch();
  useEffect(()=> {
    setData(clientsData);
  },[clientsData]);

  const handleEdit = (index) => {
    SetUpdateData(data[index]);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    SetUpdateData({})
  };

  const handleUpdate = () => {
    if(updateData && updateData.id && updateData.name && updateData?.cin?.length ==21 && updateData?.pin?.toString().length ==6 && updateData.email){
      dispatch(updateClientData(updateData));
      setIsOpen(false);
      SetUpdateData({})
    }
    else{
      toast({
        title: "Please enter all data correctly",
        description: `cin should be 21 length and pin should 6 digit`,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
    
  };

  const handleDelete = (id) => {
    dispatch(deleteClient(id));
  }

  const handleInputChange = (e, key) => {
    const newData = {...updateData};
    newData[key] = e.target.value;
    SetUpdateData(newData);
  };

  return (
    <Box maxH="50rem" overflowY="scroll" minH={"20rem"} margin="2rem 2rem 0 2rem">
      {data.length > 0 ?<Table variant="simple" background={"#fff"}>
        <Thead>
          <Tr>
            <Th fontSize={"md"}>ID</Th>
            <Th fontSize={"md"}>Name</Th>
            <Th fontSize={"md"}>Email</Th>
            <Th fontSize={"md"}>CIN</Th>
            <Th fontSize={"md"}>PIN</Th>
            <Th fontSize={"md"}>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, index) => (
            <Tr key={index}>
              <Td>{item.id}</Td>
              <Td maxW="400px" overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
                <Tooltip label={item.name} aria-label="name">{item.name}</Tooltip></Td>
              <Td maxW="200px" overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
              <Tooltip label={item.email} aria-label="email">{item.email}</Tooltip></Td>
              <Td maxW="200px" overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
              <Tooltip label={item.cin} aria-label="cin">{item.cin}</Tooltip></Td>
              <Td>{item.pin}</Td>
              <Td>
                <Button colorScheme="blue" variant="outline" mr={2} onClick={() => handleEdit(index)}>Edit</Button>
                <Button colorScheme="red" variant="outline" onClick={() => handleDelete(item.id)}>Delete</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table> : <Text fontWeight={"600"} fontSize={"xl"} colorScheme="grey.200" mt="3rem">No data found. Please try fecting data...</Text>}
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Company Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody display={"flex"} gap="1rem" flexDirection={"column"}>
            <Input type="text" value={updateData?.name} onChange={(e) => handleInputChange(e, 'name')} />
            <Input type="email" value={updateData?.email} onChange={(e) => handleInputChange(e, 'email')} />
            <Input type="text" value={updateData?.cin} onChange={(e) => handleInputChange(e, 'cin')} />
            <Input type="number" value={updateData?.pin} onChange={(e) => handleInputChange(e, 'pin')} />
            <Flex justifyContent={"center"} gap="2.5rem" alignItems={"center"} mb="1rem">
              <Button colorScheme="green"  onClick={() => handleUpdate()}>Update</Button>
              <Button colorScheme="red" onClick={handleClose}>Cancel</Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ClientInfoTuples;
