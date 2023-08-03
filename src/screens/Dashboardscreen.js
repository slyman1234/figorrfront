import React from "react";
import Dashboardaside from "../components/dashboardcomponents/Dashboardaside";
import Dashboardheader from "../components/dashboardcomponents/Dashboardheader";
import Dashboardbody from "../components/dashboardcomponents/Dashboardbody";

export default function Dashboardscreen() {
  return (
    <div className="flex ">
      <Dashboardaside />
      <div className="w-full">
        <Dashboardheader />
        <Dashboardbody />
      </div>
    </div>
  );
}
