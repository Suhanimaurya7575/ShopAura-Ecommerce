import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");

  const {
    token,
    setToken,
    navigate,
    backendUrl,
  } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      let response;

      if (currentState === "Sign Up") {
        response = await axios.post(
          backendUrl + "/api/user/register",
          {
            name,
            email,
            password,
          }
        );
      } else {
        response = await axios.post(
          backendUrl + "/api/user/login",
          {
            email,
            password,
          }
        );
      }

      if (response.data.success) {
        localStorage.setItem(
          "token",
          response.data.token
        );

        setToken(response.data.token);

        toast.success(
          currentState === "Login"
            ? "Login Successful"
            : "Account Created Successfully"
        );

        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message ||
          error.message
      );
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-8 mt-10">
        <p className="prata-regular text-3xl">
          {currentState}
        </p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      <div className="w-full flex flex-col gap-4">
        {currentState === "Sign Up" && (
          <input
            type="text"
            placeholder="Name"
            className="w-full px-3 py-2 border border-gray-800"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            required
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full px-3 py-2 border border-gray-800"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-3 py-2 border border-gray-800"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          required
        />
      </div>

      <div className="w-full flex justify-between text-sm mt-4">
        <p className="cursor-pointer">
          Forgot Password?
        </p>

        {currentState === "Login" ? (
          <p
            className="cursor-pointer"
            onClick={() =>
              setCurrentState("Sign Up")
            }
          >
            Create Account
          </p>
        ) : (
          <p
            className="cursor-pointer  "
            onClick={() =>
              setCurrentState("Login")
            }
          >
            Login Here
          </p>
        )}
      </div>

      <button
        type="submit"
        className="bg-black text-white font-light px-8 py-2 mt-4"
      >
        {currentState === "Login"
          ? "Sign In"
          : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;