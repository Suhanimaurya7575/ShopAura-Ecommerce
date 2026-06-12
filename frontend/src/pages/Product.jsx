import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProduct from "../assets/components/RelatedProduct";
const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    const found = products.find((item) => item._id === productId);

    if (found) {
      setProductData(found);

      if (found.image && found.image.length > 0) {
        setImage(found.image[0]);
      }

      setSize("");
    }
  }, [productId, products]);

  if (!productData) {
    return <div className="opacity-0"></div>;
  }

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">

        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">

          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                onClick={() => setImage(img)}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>

          <div className="w-full sm:w-[80%]">
            <img
              className="w-full h-auto"
              src={image}
              alt={productData.name}
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">
            {productData.name}
          </h1>

          <div className="flex items-center gap-1 mt-2">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src={assets.star_icon}
                alt=""
                className="w-3.5"
              />
            ))}

            <img
              src={assets.star_dull_icon}
              alt=""
              className="w-3.5"
            />

            <p className="pl-2">(122)</p>
          </div>

          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>

          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>

          {/* Sizes */}
          <div className="flex flex-col gap-4 my-8">
            <p className="font-medium">Select Size</p>

            <div className="flex gap-2 flex-wrap">
              {productData.sizes?.map((sizeObj) => {
                const outOfStock = sizeObj.quantity === 0;
                const isSelected = size === sizeObj.size;

                return (
                  <div
                    key={sizeObj.size}
                    className="relative group"
                  >
                    <button
                      onClick={() =>
                        !outOfStock &&
                        setSize(sizeObj.size)
                      }
                      disabled={outOfStock}
                      className={`px-4 py-2 border text-sm font-medium transition-all
                      ${
                        outOfStock
                          ? "bg-gray-100 text-gray-300 border-gray-200 cursor-not-allowed line-through"
                          : isSelected
                          ? "border-orange-500 bg-orange-50"
                          : "border-gray-300 hover:border-gray-500 cursor-pointer"
                      }`}
                    >
                      {sizeObj.size}
                    </button>

                    {!outOfStock && (
                      <span className="hidden group-hover:block absolute -top-7 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-0.5 rounded whitespace-nowrap z-10">
                        {sizeObj.quantity} in stock
                      </span>
                    )}

                    {outOfStock && (
                      <span className="hidden group-hover:block absolute -top-7 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded whitespace-nowrap z-10">
                        Out of stock
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>

          <hr className="mt-8 sm:w-4/5" />

          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy Return and Exchange Policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Related Products */}
    <RelatedProduct
  category={productData.category}
  subCategory={productData.subCategory}
/>
    </div>
  );
};

export default Product;