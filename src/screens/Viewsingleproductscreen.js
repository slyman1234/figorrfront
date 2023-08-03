import React, { useEffect, useState } from "react";
import Dashboardaside from "../components/dashboardcomponents/Dashboardaside";
import Dashboardheader from "../components/dashboardcomponents/Dashboardheader";
import axios from "axios";
import { useParams } from "react-router-dom";
import { apikey, url } from "../api/Api";
import Viewsinglebody from "../components/Viewsinglebody";
import DataTable from "react-data-table-component";

import { CSVLink } from "react-csv";
import { saveAs } from "file-saver";

export default function Viewsingleproductscreen() {
  const { productid } = useParams();
  console.log(productid);
  localStorage.setItem("productid", productid);

  const [products, setProducts] = useState([]);
  const productidd = localStorage.getItem("productid");
  console.log(productid);
  console.log(products);
  useEffect(() => {
    handlepolicies();
  }, []);
  const handlepolicies = async () => {
    await axios
      .get(`${url}/products/viewsingleproduct/${productidd}`, {
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

  const columns = [
    {
      name: "INSURER",
      selector: "insurer",
      sortable: true,
    },
    {
      name: "POLICY TYPE",
      selector: "producttype",
      sortable: true,
    },
    {
      name: "POLICY NAME",
      selector: "policyname",
      sortable: true,
    },
    {},
    {
      name: "COMMISSION ON POLICY",
      selector: "commissiononpolicy",
      sortable: true,
    },
    {
      name: "COMMISSION  TAT",
      selector: "currenttat",
      sortable: true,
    },
    {
      name: "PREMIUM CALE",
      selector: "premiumcale",
      sortable: true,
    },
  ];

  const data = [
    products?.data,
    // Add more data as needed
  ];
  const [searchText, setSearchText] = useState("");

  const filteredData = data.filter((item) =>
    item?.producttype.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleExportToExcel = () => {
    const csvData = filteredData.map((item) => ({
      INSURER: item.insurer,
      POLICY_TYPE: item.producttype,
      COMMISSION_ON_POLICY: item.commissiononpolicy,
    }));

    const blob = new Blob([parseDataToCSV(csvData)], {
      type: "text/csv;charset=utf-8",
    });
    saveAs(blob, "data.xlsx");
  };

  const parseDataToCSV = (data) => {
    const header = Object.keys(data[0]).join(",") + "\n";
    const rows = data.map((row) => Object.values(row).join(",") + "\n");
    return header + rows.join("");
  };

  return (
    <div className="flex ">
      <Dashboardaside />
      <div className="w-full">
        <Dashboardheader />
        <div className="w-full h-full border-b-2  border-black grid pt-[50px] px-[30px]">
          <div>
            <h2 className="text-[30px] font-[800] text-[#213f7a]">
              Insurance Policies
            </h2>
            {products.data ? (
              <>
                <input
                  type="text"
                  placeholder="Search by Name"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <DataTable
                  title="User Data Table"
                  columns={columns}
                  data={data}
                  pagination
                  selectableRows
                  responsive={true}
                  striped={true}
                />
                <button onClick={handleExportToExcel}>Export to Excel</button>
              </>
            ) : (
              <h2> Loading ...</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
