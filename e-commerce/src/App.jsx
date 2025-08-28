
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
import Category from './components/Category'
import ItemDetails from './components/ItemDetails'
import Login from './components/Login'
import Signup from './components/signup'
import AboutSection from './components/About'
import Checkout from './components/Checkout'
import Search from './components/Search'
import FullPageSpinner from './components/Spinner'
import  { useEffect, useState } from "react";
function App() {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate app initialization delay (e.g., fetching user data)
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

if (loading) return <FullPageSpinner />;
  return (
    <div>
     
 <Navbar></Navbar>
      <Routes>
        <Route
          path="/Velora-E-commerce-app"
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
                <Route path="/category/:category_name" element={<Category />} />
                <Route path="/itemDetails/:id" element={<ItemDetails />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/about" element={<AboutSection />} />
                <Route path="/checkout" element={<Checkout />} />
                 <Route path="/search/:title" element={<Search />} />
                 <Route path="/" element={   <>
           <Herosection></Herosection>
           <FeaturedProducts></FeaturedProducts>
           <Categories></Categories>
           </>} />
      </Routes>
<Footer></Footer>

    </div>
  )
}

export default App
