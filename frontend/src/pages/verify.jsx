import React, { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { ShopContext } from "../context/ShopContext";

const Verify = () => {
  const [searchParams] = useSearchParams();

  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const {
    backendUrl,
    token,
    navigate,
    setCartItems
  } = useContext(ShopContext);

  const verifyPayment = async () => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/verifyStripe",
        {
          success,
          orderId,
        },
        {
          headers: { token },
        }
      );

      if (response.data.success) {
        setCartItems({});
        navigate("/orders");
      } else {
        navigate("/cart");
      }
    } catch (error) {
      console.log(error);
      navigate("/cart");
    }
  };

  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <p className="text-lg font-medium">
        Verifying Payment...
      </p>
    </div>
  );
};

export default Verify;