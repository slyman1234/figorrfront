import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from "../../api/Api";
const Emailverificationform = () => {
  const [formData, setFormData] = useState({
    code: "",
  });

  const [error, seterrorStatus] = useState("");
  const navigate = useNavigate();
  const userid = localStorage.getItem("useridkey");

  console.log(userid);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const urll = `${url}/verifyemail/${userid}`;
  console.log(urll);
  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(urll, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // Process the successful response here

        navigate("/emailsuccess");
      })
      .catch((error) => {
        // Handle error responses here
        if (error.response) {
          if (error.response.status === 422) {
            seterrorStatus("Code does not exist");
          } else {
            seterrorStatus("Unknown error exist while submiting form");
          }

          console.error("Error:", error.message);
        } else {
          console.error("Error:", error.message);
        }
      });
  };
  return (
    <div className="flex flex-col  justify-center min-h-screen bg-gray-100 w-full">
      <div className="justify-center w-full grid ">
        <h1 className="text-3xl font-bold mb-4 text-[#213f7a] ">
          Enter verification code{" "}
        </h1>
        <p className="pb-[20px]">
          Input the verification <br />
          code below.
        </p>

        <form onSubmit={handleSubmit} className="justify-center w-full grid">
          {error && <h2 className="text-red-500"> {error}</h2>}
          <input
            className="border-[#213f7a]   w-80 px-4 py-2 mb-4 border-b-2"
            type="text"
            placeholder="Enter Verification code"
            name="code"
            value={formData.code}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-[#213f7a] rounded-md px-6 py-3 text-green-500 font-semibold w-80"
          >
            Verify code
          </button>
        </form>

        <div className="text-[#213f7a] font-[800] mt-[30px] flex ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>

          <Link to="/" className="text-[#213f7a] font-[800] ">
            Go back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Emailverificationform;
