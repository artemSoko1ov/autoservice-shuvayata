import React from "react";
import "./Modal.scss";
import ModalForm from "../ModalForm";
import { useModalStore } from "../../store/modalStore.jsx";

const Modal = () => {
  const { isModalOpen, closeModal } = useModalStore();

  if (!isModalOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <button className="modal__close" onClick={closeModal}>
          ✕
        </button>
        <h2 className="modal__title">Записаться на сервис</h2>
        <ModalForm onSuccess={closeModal} />
      </div>
    </div>
  );
};

export default Modal;
