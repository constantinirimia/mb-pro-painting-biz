// src/components/Gallery/GalleryCard.jsx
import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

const GalleryCard = ({ category, data, onImageClick }) => {
  return (
    <Col md={6}>
      <Card className="service-card h-100">
        <div className="image-wrapper">
          <Card.Img
            variant="top"
            src={data.images[0]}
            alt={data.title}
            className="service-image"
            onClick={onImageClick}
          />
          <div className="image-overlay">
            <Button variant="light" onClick={onImageClick}>
              View Gallery
            </Button>
          </div>
        </div>

        <Card.Body>
          <Card.Title as="h3">{data.title}</Card.Title>
          <Card.Text>{data.description}</Card.Text>

          <div className="services-list">
            <h4>Services Include:</h4>
            <ul className="services-list-left">
              {data.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          {/* <Button
            variant="primary"
            className="mt-3 w-100 d-flex align-items-center justify-content-center"
            onClick={onImageClick}
          >
            See Our Gallery <FaArrowRight className="ms-2" />
          </Button> */}

          <Button
            variant="primary"
            className="mt-3 w-100 d-flex align-items-center justify-content-center gallery-btn"
            onClick={onImageClick}
          >
            See Our Gallery <FaArrowRight className="ms-2" />
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default GalleryCard;
