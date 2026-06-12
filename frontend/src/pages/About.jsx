import React from 'react'
import Title from '../assets/components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../assets/components/NewsLetterBox'

const About = () => {
  return (
    <div>

       <div className='text-2xl text-center pt-8 border-t'>
          
       <Title text1={'ABOUT'} text2={'US'}/>
       </div>

       <div className='my-8 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px] ' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>
            Welcome to ShopAura, your trusted destination for quality products, modern trends, and an exceptional online shopping experience.
            We are passionate about bringing the latest trends and everyday essentials together in one place.
            
             
        </p>
        <p>
            At ShopAura, we believe that shopping should be simple, convenient, and enjoyable. Our mission is to provide customers with a carefully curated collection of products that combine quality, style, and affordability..
                 
        </p>
        <b>Our Misson</b>
        <p>
            We are passionate about bringing the latest trends and everyday essentials together in one place. Whether you're looking for fashion, accessories, lifestyle products, or unique finds, ShopAura is committed to helping you discover items that fit your needs and personality..

        </p>

        </div>

       </div>
       <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>

       </div>
       <div className='flex flex-col md:flex-row text-sm mb-20'>

  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b>Quality Assurance</b>
    <p className='text-gray-600'>
      We are committed to providing high-quality products and an exceptional shopping experience to our customers...
    </p>
  </div>

  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b>Convenience</b>
    <p className='text-gray-600'>
      We make online shopping simple, fast, and convenient. Customers can browse a wide range of products...
    </p>
  </div>

  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b>Exceptional Customer Service</b>
    <p className='text-gray-600'>
      Customer satisfaction is at the heart of everything we do. Our dedicated support team is always ready...
    </p>
  </div>
 

</div>
<NewsLetterBox/>
    </div>
  )
}

export default About