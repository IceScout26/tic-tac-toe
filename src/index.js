import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'; // Import Provider untuk Redux
import store from './store'; // Import store Redux yang telah dibuat
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from "@chakra-ui/react";

const root = createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </ChakraProvider>
);

reportWebVitals();
