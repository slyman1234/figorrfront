import React from "react";
import DataTable from "react-data-table-component";

export default function Viewsinglebody({ products }) {
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
    products.data,
    // Add more data as needed
  ];


  //   commissiononpolicy
  // :
  // "10%"
  // createdAt
  // :
  // "2023-07-30T17:54:21.591Z"
  // currenttat
  // :
  // "5 hours"
  // insurer
  // :
  // "AXA"
  // policydescription
  // :
  // "Covers for damages that affects 3rd Party property and vehicle"
  // policyname
  // :
  // "3rd Party Motor Insurance"
  // premiumcale
  // :
  // "15000 Flat fee for saloon and Suvs"
  // producttype
  // :
  // "MOTOR Insur"

  return (
    <div className="w-full h-full border-b-2  border-black grid pt-[50px] px-[30px]">
      <div>
        <h2 className="text-[30px] font-[800] text-[#213f7a]">
          Insurance Policies
        </h2>
        <DataTable
          title="User Data Table"
          columns={columns}
          data={data}
          pagination
          selectableRows
          responsive={true}
          striped={true}
        />
      </div>
    </div>
  );
}
