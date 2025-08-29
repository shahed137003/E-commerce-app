import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { FavoriteProvider } from './context/FavoriteData.jsx';
import CartData from './context/CartData.jsx'; 
import './index.css';
import App from './App.jsx';
import React from 'react';
import UserData from './context/userData.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/Velora-E-commerce-app">
      <UserData>
        <CartData>
          <FavoriteProvider>
            <App />
          </FavoriteProvider>
        </CartData>
      </UserData>
    </BrowserRouter>
  </StrictMode>
);
