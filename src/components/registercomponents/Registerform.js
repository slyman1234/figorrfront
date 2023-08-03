import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { url } from "../../api/Api";
import axios from "axios";

const Registerform = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
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
      .post(`${url}/register`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // Process the successful response here

        localStorage.setItem("useridkey", response.data.userid);

        navigate("/emailverifycode");
      })
      .catch((error) => {
        // Handle error responses here
        if (error.response) {
          if (error.response.status === 422) {
            seterrorStatus("User email already exist");
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
        <h1 className="text-3xl font-bold mb-4 text-[#213f7a] ">
          Become a Partner
        </h1>
        <p className="pb-[20px]">Register below to get started.</p>
        <form onSubmit={handleSubmit} className="justify-center w-full grid">
          {error && <h2 className="text-red-500"> {error}</h2>}
          <input
            className=" border-[#213f7a]  w-80 px-4 py-2 mb-4 border-b-2 "
            type="text"
            placeholder="Firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
          <input
            className="border-[#213f7a]   w-80 px-4 py-2 mb-4 border-b-2"
            type="text"
            placeholder="Lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
          <input
            className="border-[#213f7a]   w-80 px-4 py-2 mb-4 border-b-2"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
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
            Become a partner
          </button>
        </form>
        <p className="mt-[15px]">
          {" "}
          Already have an account ?
          <Link to="/login" className="text-[#213f7a] font-[800]">
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Registerform;
