import React from 'react'
import Title from '../assets/components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../assets/components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
      <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600' >Our Store</p>
          <p className='text-gray-500' ><br />ShopAura Headquarters
ShopAura E-Commerce Pvt. Ltd.
Innovation Hub, Tech Park Road
Hyderabad, Telangana 500081
India</p>
          <p className='text-gray-500' >Tel: 2234-4444 <br /> Email: contact@shopaura.com</p>
          <p className='font-semibold text-xl text-gray-600'> Careers at ShopAura</p>
           <p className='text-gray-500' ><br />We value diversity, teamwork, and a customer-first mindset. Our team works together to create exceptional shopping experiences while driving the future of online retail.</p>
           <button className='border border-black px-4 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500' >Explore</button>

        </div>

      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default Contact