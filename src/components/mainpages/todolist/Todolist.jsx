import React from "react";
import "./TodoStyled.scss";
import StateModal from "../../../modals/statemodal/StateModal";
import { AiOutlineEdit } from "react-icons/ai";
import { useState } from "react";

const Todolist = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div className="calendertodo">
      <div className="mantitle">
        <div className="manname">
          <span>형준</span>
          <div>
            <div className="editicon" onClick={showModal}>
              <AiOutlineEdit size="21" float="right" />
            </div>
            {modalOpen && <StateModal setModalOpen={setModalOpen} />}
          </div>
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
