// src/components/About.jsx
import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <section className="about py-5" id="about">
      <Container>
        <div className="section-header text-center mb-5">
          <h2 className="section-title">About Us</h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-content text-center">
          <p>
            MB Pro Painting Services is a full service painting company serving
            Chicago and its suburbs. We specialize in both Interior and Exterior
            Painting along with providing residential and commercial services.
            Our mission is customer satisfaction, therefore every single project
            that we take on is expected to be done with perfection. Our work is
            100% guaranteed. We work to transform homes by taking care of each
            detail, giving homes a new feel again. We will always work to assure
            that the work is done on time at a professional level that will
            exceed our customer's expectations.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default About;
