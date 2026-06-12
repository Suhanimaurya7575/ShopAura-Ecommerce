import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../context/ShopContext'
import Title from "./Title.jsx";
import ProductItems from "./ProductItems";

const BestSeller = () => {

  const { products } = useContext(ShopContext);
  const [bestseller, setBestseller] = useState([]);

  useEffect(() => {
    const filteredProducts = products.filter(
      (item) => item.bestSeller
    );

    setBestseller(filteredProducts.slice(0, 5));
  }, [products]);



  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLER'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Discover the products that customers can't stop buying – our top-rated bestsellers, handpicked just for you.
            </p>

        </div>
         <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                bestseller.map((item,index)=>(
                    <ProductItems key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                ))
            }
             </div>
    </div>
  );
};

export default BestSeller;




 