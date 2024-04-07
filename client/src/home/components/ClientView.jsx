import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getAllClientsData,  deleteAllClient } from '../actions/home.action';
import SearchBar from './SearchBar';
import { Button , Flex, Heading, Box, useToast} from "@chakra-ui/react";
import ClientInfotuple from "./ClientInfoTuples";

const ClientView = () => {
  const {deleteAllMessage } = useSelector((state) => state);
 const dispatch = useDispatch();

 const getClients = () =>{
    dispatch(getAllClientsData());
 }

 const deleteAllClientsData = () => {
  dispatch(deleteAllClient());
 }

 const toast = useToast();

 useEffect(() =>{
  if(deleteAllMessage){
    toast({
      title: "deleted all data from DB",
      description: deleteAllMessage,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  }
 },[deleteAllMessage])

  return (
    <Box textAlign="center" bg="gray.100" borderRadius="md" >
    <Heading as="h1" mb={6} fontSize="2xl">CLIENTS INFO</Heading>
    <Flex alignItems={"center"} gap="1.5rem" ml="1rem" mb="2rem">
        <Button colorScheme="blue" onClick={getClients}>Load all client Data</Button>
        <Button colorScheme="red" onClick={deleteAllClientsData}>Clear all client data</Button>
        <SearchBar/>
     </Flex>
     <ClientInfotuple/>
    </Box>
  )
}

export default ClientView