import React from "react";
import { HiCheckCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

function Emailsuccess() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <HiCheckCircle className="text-green-500 text-6xl mb-4" />
      <h1 className="text-3xl font-bold mb-4">Email Verification Successful</h1>
      <p className="text-lg mb-8">
        Your account has been successfully verified!
      </p>

      <Link to="/login" className="bg-[#213f7a] rounded-md px-6 py-3 text-white font-semibold">
        Continue
      </Link>
    </div>
  );
}

export default Emailsuccess;
