// src/components/Gallery/GalleryModal.jsx
import React from "react";
import { Modal } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

const GalleryModal = ({ show, onHide, currentImage, onPrev, onNext }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      size="xl"
      className="gallery-modal"
    >
      <Modal.Body className="p-0 position-relative">
        <button className="close-button" onClick={onHide} aria-label="Close">
          <FaTimes />
        </button>

        <img src={currentImage} alt="" className="modal-image" />

        <button className="nav-button prev" onClick={onPrev}>
          <FaChevronLeft />
        </button>
        <button className="nav-button next" onClick={onNext}>
          <FaChevronRight />
        </button>
      </Modal.Body>
    </Modal>
  );
};

export default GalleryModal;
