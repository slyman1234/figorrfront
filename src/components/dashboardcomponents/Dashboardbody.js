import React, { useEffect, useState } from "react";
import axios from "axios";
import { apikey, url } from "../../api/Api";
import { Link } from "react-router-dom";

export default function Dashboardbody() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    handlepolicies();
  }, []);
  const handlepolicies = async () => {
    await axios
      .get(`${url}/products/viewproduct`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apikey.token}`,
        },
      })
      .then((response) => {
        // Process the successful response here
        setProducts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error responses here

        console.error("Error:", error.message);
      });
  };

  return (
    <div className="w-full h-full border-b-2  border-black grid pt-[50px] px-[30px]">
      <div>
        <h2 className="text-[30px] font-[800] text-[#213f7a]">
          Insurance Policies
        </h2>
        <div className="flex mt-[40px]">
          {products?.map((product, index) => (
            <Link to={`/viewsinglepolicy/${product._id}`}  key={index}>
              <div
               
                className="bg-gray-200  text-[#213f7a] uppercase ml-4 p-[50px] grid  rounded-md justify-items-center hover:bg-[#213f7a] hover:text-[#fff]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-[80px] h-[80px]  hover:text-[#fff]"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                    clipRule="evenodd"
                  />
                </svg>

                {product.producttype}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
