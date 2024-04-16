import React, { useState } from 'react';
import { Box, Heading, Input, Button, useToast, Flex, Divider } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import {getAllClientsData, startCrawling } from '../actions/home.action';
import { connect } from "react-redux";

class Crawler extends React.Component {
constructor(props){
  super(props);
  this.props = props;
}

 

componentDidMount(){
  this.onClickCrawl();
  console.log(this.props)
}

componentWillReceiveProps(newProps){
  debugger
  if(!this.props.state?.crawlingStatus?.success && newProps.state?.crawlingStatus?.success){
    this.props.dispatch(this.props.getAllClientsData())
  }
}

onClickCrawl(){
  this.props.dispatch(this.props.startCrawling(10));
  // toast({
  //     title: "crawling started it will take sometime",
  //     description: `crawling and adding ${10} data to DB`,
  //     status: "success",
  //     duration: 2000,
  //     isClosable: true,
  //   });
};

  render(){
    // const {crawlingStatus ,isCrawling } = this.props.useSelector((state) => state);
    // const dispatch = useDispatch();
  // const [size, setSize] = useState('10');
  // const toast = useToast();

  // useEffect(() => {
  //   onClickCrawl()
  // },[]);

  


  // useEffect(() =>{
  //   if(crawlingStatus && crawlingStatus.message){
  //       if(crawlingStatus.success){
  //           toast({
  //               title: "crawling done successfully",
  //               description: crawlingStatus.message,
  //               status: "success",
  //               duration: 3000,
  //               isClosable: true,
  //             });
  //             dispatch(getAllClientsData()); 
  //       }
  //       else{
  //           toast({
  //               title: "crawling failed",
  //               description: crawlingStatus.message,
  //               status: "error",
  //               duration: 3000,
  //               isClosable: true,
  //             });
  //       }
  //   }
  // },[crawlingStatus]);

  return (
    <Box textAlign="center" p={8} bg="gray.100" borderRadius="md">
      {/* <Heading as="h1" mb={6} fontSize="xl">Clicking below Button will scrape all the data, which will take long time to avoid that please restrict the number of data</Heading> */}
      {/* <form onSubmit={onClickCrawl}>
        <Flex alignItems={"center"} gap="1rem" justifyContent={"center"} mb="4rem">
          <Input
            type="number"
            value={size}
            onChange={(event) => setSize(event.target.value)}
            placeholder="Enter size of data to be inserted"
            size="lg"
            borderRadius="md"
            width="30rem"
          />
          <Button type="submit" colorScheme="blue" size="lg" disabled={isCrawling}>Crawl</Button>
        </Flex>
      </form> */}
      <Divider colorScheme={"grey.500"} border=".5px solid grey"/>
    </Box>
  );
  }
};



const mapStateToProps = (state) => ({
  state: state
});

const mapDispatchToProps = {  };// not able to add actions as they were async, addition of thunk fails other files

export default connect(mapStateToProps, mapDispatchToProps)(Crawler);