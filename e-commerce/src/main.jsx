import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // <-- use HashRouter
import { FavoriteProvider } from './context/FavoriteData.jsx';
import CartData from './context/CartData.jsx'; 
import './index.css';
import App from './App.jsx';
import React from 'react';
import UserData from './context/userData.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <UserData>
        <CartData>
          <FavoriteProvider>
            <App />
          </FavoriteProvider>
        </CartData>
      </UserData>
    </HashRouter>
  </StrictMode>
);
