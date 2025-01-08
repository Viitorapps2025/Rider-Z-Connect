import React from 'react';
import ReactDOM from 'react-dom/client'; // Note: Use react-dom/client
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css'; // Adjust the path as needed


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
