import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const Orders = ({ token }) => {

  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {

    if (!token) {
      return
    }

    try {
      const response = await axios.post(
        backendUrl + '/api/order/list',
        {},
        {
          headers: { token }
        }
      )

      if (response.data.success) {
        setOrders(response.data.orders.reverse())
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

const statusHandler = async (event, orderId) => {
  try {

    console.log("Order ID:", orderId);
    console.log("New Status:", event.target.value);

    const response = await axios.post(
      backendUrl + '/api/order/status',
      {
        orderId,
        status: event.target.value
      },
      {
        headers: { token }
      }
    );

    console.log("Status Response:", response.data);

    if (response.data.success) {
      await fetchAllOrders();
      toast.success("Status Updated");
    } else {
      toast.error(response.data.message);
    }

  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
}

  useEffect(() => {
    fetchAllOrders()
  }, [token])
return (
  <div className="w-full">
    <h3 className="text-2xl font-semibold mb-6 text-purple-600 ">Orders</h3>

    <div className="space-y-4">
      {orders.map((order, index) => (
        <div
          key={index}
          className="bg-white border rounded-lg shadow-sm p-5 flex flex-col lg:flex-row gap-6"
        >
          {/* Icon */}
          <div className="flex justify-center lg:justify-start">
            <img
              className="w-16 h-16 object-contain"
              src={assets.parcel_icon}
              alt="Parcel"
            />
          </div>

          {/* Products */}
          <div className="flex-1">
            <h4 className="font-semibold text-gray-800 mb-2">
              Order Items
            </h4>

            {order.items.map((item, itemIndex) => (
              <p key={itemIndex} className="text-gray-700 text-sm">
                <span className="font-medium">{item.name}</span>
                {" "}× {item.quantity}
                <span className="ml-2 px-2 py-1 bg-gray-100 rounded text-xs">
                  {item.size}
                </span>
              </p>
            ))}
          </div>

          {/* Address */}
          <div className="flex-1">
            <h4 className="font-semibold text-gray-800 mb-2">
              Customer Details
            </h4>

            <p className="font-medium">
              {order.address.firstName} {order.address.lastName}
            </p>

            <p className="text-sm text-gray-600">
              {order.address.street}
            </p>

            <p className="text-sm text-gray-600">
              {order.address.city}, {order.address.state}
            </p>

            <p className="text-sm text-gray-600">
              {order.address.country}
            </p>

            <p className="text-sm text-gray-600">
              {order.address.phone}
            </p>
          </div>

          {/* Order Info */}
          <div className="flex-1">
            <h4 className="font-semibold text-gray-800 mb-2">
              Order Details
            </h4>

            <p className="text-sm">
              <span className="font-medium">Items:</span>{" "}
              {order.items.length}
            </p>

            <p className="text-sm">
              <span className="font-medium">Method:</span>{" "}
              {order.paymentMethod}
            </p>

            <p className="text-sm">
              <span className="font-medium">Payment:</span>{" "}
              {order.payment ? "Done" : "Pending"}
            </p>

            <p className="text-sm">
              <span className="font-medium">Date:</span>{" "}
              {new Date(order.date).toDateString()}
            </p>

            <p className="text-lg font-bold mt-2">
              ₹{order.amount}
            </p>
          </div>

          {/* Status */}
          <div className="flex flex-col justify-center min-w-[180px]">
            <select  onChange={(event)=>statusHandler(event, order._id)}
              value={order.status}
              className="border rounded-md p-2 font-medium focus:outline-none"
            >
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        </div>
      ))}
    </div>
  </div>
)
}

export default Orders