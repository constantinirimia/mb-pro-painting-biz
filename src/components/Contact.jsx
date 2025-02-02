import React, { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa"; // Icons for email and phone
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
        <div className="section-header text-center mb-5">
          <h2 className="section-title">Get a FREE Quote</h2>
          <div className="section-divider"></div>
        </div>
        <div className="contact-form bg-white p-4 rounded shadow">
          <p>Get your free quote today!</p>
          <Button
            variant="primary"
            className="w-100 free-estimate-btn"
            onClick={() => setShowQuoteModal(true)}
          >
            Request Free Estimate
          </Button>
        </div>
      </Container>

      <Container>
        {/* Contact Info with Icons */}
        <div className="contact-info"></div>
        {/* Footer with Copyright */}
        <div className="footer">
          <p></p>
          <p>© 2025 MB Pro Painting Services. All Rights Reserved.</p>
        </div>
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
