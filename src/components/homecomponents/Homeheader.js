import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.svg";
const Homeheader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full flex justify-between  h-[100px] p-[20px]">
      <div>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>

        {isMenuOpen && (
          <div className="md:hidden mt-[20px]">
            <ul className="">
              <li className="pb-[20px]">Api Docs</li>
              <li className="pb-[20px]">
                <Link to="/login" className="bg-[#213f7a] p-[10px] text-[green] rounded-[5px]">
                  Login
                </Link>
              </li>
              <li className="pb-[20px]">
                {" "}
                <Link
                  to="/register"
                  className="bg-[#000] p-[10px] text-[#fff] rounded-[5px]"
                >
                  Become a partner{" "}
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="w-[25%] md:flex hidden">
        <ul className="flex justify-between w-full">
          <li>Api Docs</li>
          <li>
            <Link to="/login" className="bg-[#213f7a] p-[10px] text-[green] rounded-[5px]">
              Login
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/register"
              className="bg-[#000] p-[10px] text-[#fff] rounded-[5px]"
            >
              Become a pertner{" "}
            </Link>
          </li>
        </ul>
      </div>
      {!isMenuOpen ? (
        <div className=" md:hidden flex" onClick={handleMenuToggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-green-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      ) : (
        <div className=" md:hidden flex" onClick={handleMenuToggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-green-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Homeheader;
