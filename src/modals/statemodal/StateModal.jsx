import React from "react";
import "./StateModal.scss";
import { AiOutlineClose } from "react-icons/ai";

const StateModal = ({ setModalOpen }) => {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="container">
      <AiOutlineClose className="close" size="24" onClick={closeModal} />

      <p>모달창니다.</p>
      <div className="profileform">
        <div className="imageform" />
      </div>
      <div className="modalcontent">
        <div>기분: 좋아요</div>
        <div>몸무게: 60kg</div>
        <div>일일목표: 공부</div>
      </div>
    </div>
  );
};

export default StateModal;
