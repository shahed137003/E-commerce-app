
import './App.css'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import FeaturedProducts from './components/FeaturedProducts'
import Categories from './components/Categories'
import Footer from './components/Footer'
import Shop from './components/Shop'
import { Routes, Route } from 'react-router-dom'
import React from "react";
import Favorite from './components/Favorite'
import Cart from './components/Cart'

function App() {
  
  return (
    <div>
     
 <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <>
           <Herosection></Herosection>
           <FeaturedProducts></FeaturedProducts>
           <Categories></Categories>
           </>
          }
        /> 
        <Route path="/shop" element={<Shop />} />
           <Route path="/favorite" element={<Favorite />} />
                <Route path="/cart" element={<Cart />} />
      </Routes>
<Footer></Footer>

    </div>
  )
}

export default App
