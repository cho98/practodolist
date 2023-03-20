import React from "react";
import "./CalenderModal.scss";
import { AiOutlineClose } from "react-icons/ai";

const CalenderModal = ({ setModalOpen }) => {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="container">
      <AiOutlineClose className="close" size="24" onClick={closeModal} />
      <div> 3월 25일(날씨)</div>
      <div className="profileform">
        <div className="imageform" />
      </div>
      <div className="modalcontent">
        <div>일정</div>
      </div>
    </div>
  );
};

export default CalenderModal;
