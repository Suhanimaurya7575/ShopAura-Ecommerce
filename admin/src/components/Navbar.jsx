import React from 'react';
import {assets} from "../assets/assets.js";

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between ' >
   
<img
  className="w-40 sm:w-48 md:w-56 h-auto object-contain"
  src={assets.logo}
  alt="ShopAura"
/>
    <button onClick={()=>setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm '>Logout</button>
    </div>
  )
}

export default Navbar