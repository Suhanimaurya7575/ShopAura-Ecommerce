import React from 'react'
import { assets } from '../assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div >
              <img src={assets.logo} className='mb-5 w-32' alt="" />
              <p className='w-full md:2/3 text-gray-600'>
              Discover the latest trends and everyday essentials with ShopAura.
We are committed to delivering quality you can trust.
Shop with confidence through our secure platform.
Making online shopping simple, convenient, and enjoyable.
              </p>
            </div>


            <div>
            <p className='text-xl font-medium mb-5 text-purple-600 '>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
             <li>Home</li>
             <li>About Us</li>
             <li>Delivery</li>
             <li>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5 text-purple-600 '>
                GET IN TOUCH
            </p>
            <ul className='flex flex-col gap-1 text-gray-600'>
           <li>+1-123-234-2342</li>
           <li>contact@ShopAura.com</li>
            </ul>
        </div>

        </div>
        <div>
            <hr/>
            <p className='py-5 text-sm text-center'> Copyright 2026@ShopAura.com - All right reserved </p>
        </div>
        
    </div>
  )
}

export default Footer