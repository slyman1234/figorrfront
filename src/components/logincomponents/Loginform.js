import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from "../../api/Api";

const Loginform = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, seterrorStatus] = useState("");
  const navigate = useNavigate();

  console.log(error);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(`${url}/signin`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // Process the successful response here

        localStorage.setItem("userdata", JSON.stringify(response.data));

        navigate("/dashboard");
      })
      .catch((error) => {
        // Handle error responses here
        if (error.response) {
          if (error.response.status === 401) {
            seterrorStatus("Invalid email or password");
          } else if (error.response.status === 422) {
            localStorage.setItem("useridkey", error.response.data.userid);

            navigate("/emailverifycode");
          } else {
            seterrorStatus("Unknown error exist while submiting form");
          }
        } else {
          console.error("Error:", error.message);
        }
      });
  };

  return (
    <div className="flex flex-col  justify-center min-h-screen bg-gray-100 w-full">
      <div className="justify-center w-full grid ">
        <h1 className="text-3xl font-bold mb-4 text-[#213f7a] ">Login </h1>
        <p className="pb-[20px]">Welcome back! continue.</p>
        <form onSubmit={handleSubmit} className="justify-center w-full grid">
          {error && <h2 className="text-red-500"> {error}</h2>}
          <input
            className="border-[#213f7a]   w-80 px-4 py-2 mb-4 border-b-2"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <Link to="/forgot" className="text-[12px] underline text-[#213f7a] ">
            Forgot password?
          </Link>
          <input
            className="border-[#213f7a]  w-80 px-4 py-2 mb-4 border-b-2"
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-[#213f7a] rounded-md px-6 py-3 text-green-500 font-semibold w-80"
          >
            Login
          </button>
        </form>

        <p className="mt-[15px]">
          {" "}
          Don't have an account ?
          <Link to="/register" className="text-[#213f7a] font-[800]">
            Register
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Loginform;
