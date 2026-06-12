import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Placeorder from './pages/Placeorder'
import Product from './pages/Product'
import Login from './pages/Login'
import Orders from './pages/Orders'
import Navbar from './assets/components/Navbar'
import Footer from './assets/components/Footer'
import SearchBar from './assets/components/SearchBar'
 import { ToastContainer, toast } from 'react-toastify';
 import Verify from "./pages/Verify";
 
 




const App = () => {
  return (
  <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
    <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Routes>
      <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/cart" element={<Cart />} />
     <Route path="/collection" element={<Collection />} />
     <Route path="/contact" element={<Contact />} />
    <Route path="/placeorder" element={<Placeorder />} />
     <Route path="/product/:productId" element={<Product />} />
     <Route path="/login" element={<Login />} />
     <Route path="/orders" element={<Orders />} />
     <Route path="/verify" element={<Verify />} />
      </Routes>
      <Footer/>
     

    </div>
  )
}

export default App
