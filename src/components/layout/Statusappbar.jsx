import React, { useState } from "react";
import Weather from "../../weather/Weather";
import styled from "styled-components";

const Statusappbar = () => {
  const [timer, setTimer] = useState("00:00:00");

  const currentTimer = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    setTimer(`${hours}:${minutes}:${seconds}`);
  };
  const startTimer = () => {
    setInterval(currentTimer, 1000);
  };

  startTimer();
  return (
    <Stappbar>
      <Sttitlediv>
        <StTimer>{timer}</StTimer>
        <Sttitle> TodoList </Sttitle>
        <Weather />
      </Sttitlediv>
    </Stappbar>
  );
};

export default Statusappbar;

const Stappbar = styled.div`
  top: 0%;
  width: 100%;
  height: 70px;
  border-bottom-style: double;
  border-bottom-color: gray;
`;

const Sttitle = styled.span`
  display: flex;
  padding-top: 15px;
  margin-left: 420px;
  font-family: "NeoDunggeunmoPro-Regular";
  font-weight: 1000;
  font-size: 28px;
  line-height: 150%;
  color: #2d8b67;
`;

const Sttitlediv = styled.div`
  height: 65px;
  width: 1100px;
  margin: 0 auto;

  display: flex;
`;

const StTimer = styled.div`
  padding-top: 22px;
  width: 100px;
  height: 30px;
  font-family: "NeoDunggeunmoPro-Regular";
  font-size: 28px;
  float: left;
`;
