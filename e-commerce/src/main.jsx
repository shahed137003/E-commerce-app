import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { FavoriteProvider } from './context/FavoriteData.jsx';
import CartData from './context/CartData.jsx'; // Import your provider
import './index.css';
import App from './App.jsx';
import React from 'react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartData>
        <FavoriteProvider>
          <App />
        </FavoriteProvider>
      </CartData>
    </BrowserRouter>
  </StrictMode>
);
