import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './home/App';
import { ChakraProvider } from '@chakra-ui/react';
import Footer from './components/Footer';
import { Box } from '@chakra-ui/react';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './home/store/home.store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
     <ChakraProvider>
          <Header/>
            <Box minHeight="100vh" bg="gray.100">
              <App/>
            </Box>
          <Footer/>
    </ChakraProvider>
    </Provider>
);
