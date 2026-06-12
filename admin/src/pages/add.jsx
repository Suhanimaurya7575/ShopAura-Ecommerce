import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const SIZES = ["S", "M", "L", "XL", "XXL"];

const Add = () => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestSeller, setBestseller] = useState(false);

  
  const [sizes, setSizes] = useState(
    SIZES.map((s) => ({ size: s, quantity: 0 }))
  );

  const toggleSize = (size) => {
    setSizes((prev) =>
      prev.map((item) =>
        item.size === size
          ? { ...item, quantity: item.quantity === 0 ? 1 : 0 }
          : item
      )
    );
  };

  const updateQuantity = (size, value) => {
    const qty = Math.max(0, Number(value));
    setSizes((prev) =>
      prev.map((item) => (item.size === size ? { ...item, quantity: qty } : item))
    );
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      // Only send sizes that have quantity > 0
      const activeSizes = sizes.filter((s) => s.quantity > 0);

      if (activeSizes.length === 0) {
        toast.error("Please add at least one size with quantity");
        return;
      }

      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestSeller", bestSeller);
      formData.append("sizes", JSON.stringify(activeSizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const token = localStorage.getItem("token");

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setPrice("");
        setSizes(SIZES.map((s) => ({ size: s, quantity: 0 })));
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-full items-start gap-3"
    >
      <div>
        <p className="mb-2">Upload Image</p>
        <div className="flex gap-2">
          {[
            [image1, setImage1, "image1"],
            [image2, setImage2, "image2"],
            [image3, setImage3, "image3"],
            [image4, setImage4, "image4"],
          ].map(([img, setImg, id]) => (
            <label htmlFor={id} key={id}>
              <img
                className="w-20"
                src={!img ? assets.upload_area : URL.createObjectURL(img)}
                alt=""
              />
              <input
                onChange={(e) => setImg(e.target.files[0])}
                type="file"
                id={id}
                hidden
              />
            </label>
          ))}
        </div>
      </div>

      <div className="w-full">
        <p className="mb-2">Product Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Type here"
          required
        />
      </div>

      <div className="w-full">
        <p className="mb-2">Product Description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full max-w-[500px] px-3 py-2"
          placeholder="Write content here"
          required
        />
      </div>

      <div className="flex flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Product Category</p>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2"
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Sub Category</p>
          <select
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            className="w-full px-3 py-2"
          >
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winter">Winter</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Product Price</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="w-full px-3 py-2 sm:w-[120px]"
            type="number"
            placeholder="25"
          />
        </div>
      </div>

     
      <div>
        <p className="mb-2">Product Sizes & Stock Quantity</p>
        <div className="flex flex-wrap gap-4">
          {sizes.map(({ size, quantity }) => (
            <div key={size} className="flex flex-col items-center gap-1">
              <div
                onClick={() => toggleSize(size)}
                className={`px-4 py-2 cursor-pointer border font-medium select-none ${
                  quantity > 0
                    ? "bg-purple-100 border-purple-400"
                    : "bg-slate-200 border-slate-300"
                }`}
              >
                {size}
              </div>
              {quantity > 0 && (
                <input
                  type="number"
                  min={1}
                  value={quantity}
                  onChange={(e) => updateQuantity(size, e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                  className="w-16 border px-2 py-1 text-sm text-center"
                  placeholder="Qty"
                />
              )}
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-1">
          Click a size to enable it, then enter stock quantity.
        </p>
      </div>

      <div className="flex gap-2 mt-2">
        <input
          type="checkbox"
          id="bestseller"
          checked={bestSeller}
          onChange={() => setBestseller((prev) => !prev)}
        />
        <label htmlFor="bestseller" className="cursor-pointer">
          Add to bestseller
        </label>
      </div>

      <button className="w-28 py-3 mt-4 bg-black text-white" type="submit">
        ADD
      </button>
    </form>
  );
};

export default Add;