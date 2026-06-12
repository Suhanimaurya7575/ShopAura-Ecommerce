import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SideBar from "./components/sideBar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/add";
import List from "./pages/list";
import Orders from "./pages/orders";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency ='$'

const App = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />

      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navbar setToken={setToken} />
          <hr />

          <div className="flex w-full">
            <SideBar />

            <div className="w-[70%] mx-auto ml-[max(5vw,15px)] my-8 text-gray-600 text-base">
              <Routes>
                <Route path="/" element={<Add token={token} />} />
                <Route path="/add" element={<Add token={token} />} />
                <Route path="/list" element={<List token={token} />} />
                <Route path="/orders" element={<Orders token={token} />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;