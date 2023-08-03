import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from "../../api/Api";

const Enternewpassword = () => {
  const userid = localStorage.getItem("useridkey");

  console.log(userid);

  const [formData, setFormData] = useState({
    password: "",
    cpassword: "",
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

    if (formData.password !== formData.cpassword) {
      seterrorStatus("Password and confirm password field don't match");
    } else {
      await axios
        .patch(`${url}/updatepassword/${userid}`, formData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          // Process the successful response here

          localStorage.clear("useridkey");

          navigate("/changepasssuccess");
        })
        .catch((error) => {
          // Handle error responses here
          if (error.response) {
            if (error.response.status === 404) {
              seterrorStatus(error.response.data);
            } else if (error.response.status === 422) {
              seterrorStatus(error.response.data);
            } else {
              seterrorStatus("Unknown error exist while submiting form");
            }
          } else {
            console.error("Error:", error.message);
          }
        });
    }
  };

  return (
    <div className="flex flex-col  justify-center min-h-screen bg-gray-100 w-full">
      <div className="justify-center w-full grid ">
        <h1 className="text-3xl font-bold mb-4 text-[#213f7a] ">
          Change password
        </h1>
        <p className="pb-[20px]">Enter new password below</p>
        <form onSubmit={handleSubmit} className="justify-center w-full grid">
          {error && <h2 className="text-red-500"> {error}</h2>}
          <input
            className="border-[#213f7a]  w-80 px-4 py-2 mb-4 border-b-2"
            type="password"
            placeholder="Enter password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <input
            className="border-[#213f7a]  w-80 px-4 py-2 mb-4 border-b-2"
            type="password"
            placeholder="Enter Confirm password"
            name="cpassword"
            value={formData.cpassword}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-[#213f7a] rounded-md px-6 py-3 text-green-500 font-semibold w-80"
          >
            Change password
          </button>
        </form>
      </div>
    </div>
  );
};

export default Enternewpassword;
