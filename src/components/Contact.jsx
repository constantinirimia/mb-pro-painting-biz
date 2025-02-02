import React, { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import QuoteModal from "./QuoteModal";

const Contact = () => {
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);

  const handleSubmitSuccess = () => {
    setShowQuoteModal(false);
    setShowThankYouModal(true);
  };

  return (
    <section className="contact py-5" id="contact">
      <Container>
        <Row>
          <Col md={6}>
            <h2>Contact Us</h2>
            <p>Email: mbpropaintingservices.@outlook.com</p>
            <p>Phone: +1 (773) 673-0161</p>
          </Col>
          <Col md={6}>
            <div className="contact-form bg-white p-4 rounded shadow">
              <h3>Schedule an Estimate</h3>
              <p>Get your free quote today!</p>
              <Button
                variant="primary"
                className="w-100"
                onClick={() => setShowQuoteModal(true)}
              >
                Request Free Estimate
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <QuoteModal
        show={showQuoteModal}
        onHide={() => setShowQuoteModal(false)}
        onSubmitSuccess={handleSubmitSuccess}
      />

      <Modal
        show={showThankYouModal}
        onHide={() => setShowThankYouModal(false)}
        centered
        className="thank-you-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Thank You!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Thank you for contacting us. We will get back to you shortly.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowThankYouModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Contact;
