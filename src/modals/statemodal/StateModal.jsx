import React from "react";
import "./StateModal.scss";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const StateModal = ({ setModalOpen }) => {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="container">
      <AiOutlineClose className="close" size="24" onClick={closeModal} />

      <p>모달창입니다.</p>
    </div>
  );
};

export default StateModal;
