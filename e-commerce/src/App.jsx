import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import Card from './components/Card'
import FeaturedProducts from './components/FeaturedProducts'
import Categories from './components/Categories'
function App() {
  

  return (
    <>
    <Navbar></Navbar>
     <Herosection></Herosection>
     <FeaturedProducts></FeaturedProducts>
   {/* <Card></Card> */}
   <Categories></Categories>
    </>
  )
}

export default App
