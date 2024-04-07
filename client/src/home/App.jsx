import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClientView from './components/ClientView';
import CrawlComponent from './components/CrawlComponent';
import Loader from './components/Loader';

const App = () => {
  
 const {isFetchingData } = useSelector((state) => state);
 console.log(isFetchingData)
  return (
    <>
      {isFetchingData && <Loader/>}
      <CrawlComponent/>
      <ClientView/>
    </>
  )
}

export default App;