import React from "react";
import Statusappbar from "../../components/layout/Statusappbar";
import { Calender } from "../../components/mainpages/calender/Calender";

const MainPage = () => {
  return (
    <div>
      <Statusappbar />
      <Calender />
    </div>
  );
};

export default MainPage;
