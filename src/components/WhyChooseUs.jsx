// src/components/WhyChooseUs.jsx
import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedal,
  faCertificate,
  faPaintRoller,
  faStar,
  faClock,
  faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    icon: faMedal,
    title: "Decade of Excellence",
    description:
      "With over 10 years serving the Chicago area, our experienced team has successfully completed thousands of painting projects, delivering consistent quality and customer satisfaction.",
  },
  {
    icon: faCertificate,
    title: "Licensed & Insured",
    description:
      "We are fully licensed, bonded, and insured in Illinois, giving you complete peace of mind. Our professional team follows all industry standards and safety protocols.",
  },
  {
    icon: faHandHoldingDollar,
    title: "Competitive Pricing",
    description:
      "We provide detailed, transparent quotes with no hidden fees. Our competitive pricing reflects the value and quality we deliver to every project.",
  },
  {
    icon: faPaintRoller,
    title: "Comprehensive Services",
    description:
      "We use only premium paints and materials, combined with expert preparation and application techniques, ensuring lasting results that exceed expectations.",
  },
  {
    icon: faStar,
    title: "Superior Quality",
    description:
      "We provide detailed, transparent quotes with no hidden fees. Our competitive pricing reflects the value and quality we deliver to every project.",
  },
  {
    icon: faClock,
    title: "Timely Completion",
    description:
      "We respect your time and property, completing projects efficiently while maintaining our high standards. Clear communication and punctuality are our priorities.",
  },
];

const WhyChooseUs = () => {
  const [visibleFeatures, setVisibleFeatures] = useState(0); // Start by showing the first 3 features

  // Function to go to the next set of features
  const nextFeatures = () => {
    if (visibleFeatures + 3 < features.length) {
      setVisibleFeatures(visibleFeatures + 3);
    }
  };

  // Function to go to the previous set of features
  const prevFeatures = () => {
    if (visibleFeatures - 3 >= 0) {
      setVisibleFeatures(visibleFeatures - 3);
    }
  };

  return (
    <section className="testimonials-section py-5" id="whychooseus">
      <Container>
        <div className="section-header text-center">
          <h2 className="section-title mb-4">
            Why choose MB Pro Painting Services?
          </h2>
          <div className="section-divider mb-5"></div>
        </div>

        <Row className="g-4">
          {/* Display the current set of 3 features */}
          {features
            .slice(visibleFeatures, visibleFeatures + 3)
            .map((feature, index) => (
              <Col md={4} key={index}>
                <div className="feature-card">
                  <div className="feature-icon">
                    <FontAwesomeIcon icon={feature.icon} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  {/* Left and Right Arrows on the Card */}
                  {index === 0 && (
                    <Button
                      variant="link"
                      onClick={prevFeatures}
                      disabled={visibleFeatures === 0}
                      className="carousel-arrow carousel-left"
                    >
                      ←
                    </Button>
                  )}
                  {index === 2 && (
                    <Button
                      variant="link"
                      onClick={nextFeatures}
                      disabled={visibleFeatures + 3 >= features.length}
                      className="carousel-arrow carousel-right"
                    >
                      →
                    </Button>
                  )}
                </div>
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
