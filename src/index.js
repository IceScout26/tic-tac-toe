import React from 'react';
import { createRoot } from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'; // Import Provider untuk Redux
import store from './store'; // Import store Redux yang telah dibuat
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
