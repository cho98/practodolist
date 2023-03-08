import React from "react";
import styled from "styled-components";

const Statusappbar = () => {
  return (
    <Stappbar>
      <Sttitlediv>
        <Sttitle> TodoList </Sttitle>
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
  margin: 0 auto;
  padding-top: 15px;
  font-family: "NeoDunggeunmoPro-Regular";
  font-weight: 1000;
  font-size: 28px;
  line-height: 150%;
  color: #2d8b67;
`;

const Sttitlediv = styled.div`
  height: 45px;
  width: 100px;
  margin: 0 auto;
`;
