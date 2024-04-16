import React from 'react'
// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClientView from './components/ClientView';
// import CrawlComponent from './components/CrawlComponent';
import Loader from './components/Loader';
import Crawler from './components/CrawlComponent';
import {getAllClientsData, startCrawling } from './actions/home.action';

const App = () => {
  const dispatch = useDispatch();
 const {isFetchingData } = useSelector((state) => state);
 console.log(isFetchingData)
  return (
    <>
    <Crawler getAllClientsData={getAllClientsData} startCrawling={startCrawling} dispatch={dispatch}/>
      {isFetchingData && <Loader/>}
      {/* <CrawlComponent/> */}
      <ClientView/>
    </>
  )
}

export default App;