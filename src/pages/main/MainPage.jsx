import React from "react";
import Statusappbar from "../../components/layout/Statusappbar";
import { Calender } from "../../components/mainpages/calender/Calender";
import Todolist from "../../components/mainpages/todolist/Todolist";
import "./Main.scss";
const MainPage = () => {
  return (
    <div>
      <Statusappbar />
      <div className="first">
        <Calender />
        <Todolist />
      </div>
    </div>
  );
};

export default MainPage;
