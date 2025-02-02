// src/components/Hero.jsx
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaPhone, FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={7}>
            <div className="hero-content">
              <h1 className="hero-title">
                Bringing Your Vision to Life with
                <span className="text-highlight">
                  {" "}
                  Expert Painting Services
                </span>
              </h1>
              <p className="hero-text">
                Welcome to MB Pro Painting Services, where your home gets the
                perfect finish. With over 10 years of experience, we specialize
                in interior and exterior painting, cabinet refinishing, and deck
                & fence painting. Trust us to bring craftsmanship and quality to
                every project.
              </p>
              <div className="hero-buttons">
                <Button
                  href="#contact"
                  variant="primary"
                  size="lg"
                  className="btn-learn-more"
                >
                  Learn More <FaArrowRight className="ms-2" />
                </Button>
                <Button
                  href="tel:3605054676"
                  variant="light"
                  size="lg"
                  className="btn-quote"
                >
                  Get Free Quote
                </Button>
              </div>
              <div className="phone-banner">
                <FaPhone className="phone-icon" />
                <div className="phone-content">
                  <span className="phone-label">
                    Call Us Now for a FREE Estimate
                  </span>
                  <a href="tel:3605054676" className="phone-number">
                    +1 773-673-0161
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
