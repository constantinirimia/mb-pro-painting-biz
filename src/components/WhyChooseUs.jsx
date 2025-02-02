// src/components/WhyChooseUs.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedal,
  faCertificate,
  faPaintRoller,
  faStar,
  faClock,
  faHandHoldingUsd,
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
  // Add the rest of your features here
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us py-5">
      <Container>
        <h2 className="text-center mb-5">
          Why Choose MB Pro Painting Services?
        </h2>
        <Row className="g-4">
          {features.map((feature, index) => (
            <Col md={4} key={index}>
              <div className="feature-card">
                <div className="feature-icon">
                  <FontAwesomeIcon icon={feature.icon} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
