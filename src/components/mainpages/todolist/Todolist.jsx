import React from "react";
import "./TodoStyled.scss";
import writeIcon from "../../../asset/icon/writeIcon.svg";

const Todolist = () => {
  return (
    <div className="calendertodo">
      <div className="mantitle">
        <div className="manname">
          형준
          <image src={writeIcon} />
        </div>

        <div className="mancontent">
          <div className="profileImg"></div>
          <div className="content">
            <span>기분: 좋아요</span>
            <span>몸무게: 60kg</span>
            <span>일일목표: 공부</span>
          </div>
          <div className="galaxy"></div>
        </div>
      </div>
      <div className="girltitle">
        <div className="girlname">열정</div>
        <div className="girlcontent">
          <div className="profileImg"></div>
          <div className="content">
            <span>기분: 좋아요</span>
            <span>몸무게: 60kg</span>
            <span>일일목표: 공부</span>
          </div>
          <div className="iphon"></div>
        </div>
      </div>
    </div>
  );
};

export default Todolist;
