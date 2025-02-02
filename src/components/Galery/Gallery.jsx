// src/components/Gallery/Gallery.jsx
import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import GalleryCard from "./GalleryCard";
import GalleryModal from "./GalleryModal";
import { galleryData } from "./galleryData";
import "./Gallery.css";

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (category, index) => {
    setCurrentCategory(category);
    setCurrentIndex(index);
    setShowModal(true);
  };

  const handleNext = () => {
    setCurrentIndex(
      (prev) => (prev + 1) % galleryData[currentCategory].images.length
    );
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + galleryData[currentCategory].images.length) %
        galleryData[currentCategory].images.length
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (showModal) {
        if (e.key === "ArrowLeft") handlePrev();
        if (e.key === "ArrowRight") handleNext();
        if (e.key === "Escape") setShowModal(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showModal, currentCategory]);

  return (
    <section className="services-section" id="services">
      <Container>
        <div className="section-header text-center">
          <h2 className="section-title mb-4">What We Offer</h2>
          <div className="section-divider mb-5"></div>
        </div>

        {/* First Row */}
        <Row className="g-4 mb-4">
          {Object.entries(galleryData)
            .slice(0, 2)
            .map(([category, data]) => (
              <GalleryCard
                key={category}
                category={category}
                data={data}
                onImageClick={() => handleImageClick(category, 0)}
              />
            ))}
        </Row>

        {/* Second Row */}
        <Row className="g-4">
          {Object.entries(galleryData)
            .slice(2)
            .map(([category, data]) => (
              <GalleryCard
                key={category}
                category={category}
                data={data}
                onImageClick={() => handleImageClick(category, 0)}
              />
            ))}
        </Row>

        <GalleryModal
          show={showModal}
          onHide={() => setShowModal(false)}
          currentImage={
            currentCategory
              ? galleryData[currentCategory].images[currentIndex]
              : ""
          }
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </Container>
    </section>
  );
};

export default Gallery;
