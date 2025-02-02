// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import {
  Container,
  Navbar as BootstrapNavbar,
  Nav,
  Button,
  Modal,
} from "react-bootstrap";
import { FaPhone } from "react-icons/fa";
import QuoteModal from "./QuoteModal";

const Navbar = () => {
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmitSuccess = () => {
    setShowQuoteModal(false);
    setShowThankYouModal(true);
  };

  return (
    <>
      <BootstrapNavbar
        expand="lg"
        fixed="top"
        className={`navbar ${isScrolled ? "scrolled" : ""}`}
      >
        <Container>
          <BootstrapNavbar.Brand href="#home">
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/logo/logo-154x149.png`}
              alt="MB Pro Painting Services"
              className="navbar-logo"
            />
          </BootstrapNavbar.Brand>

          <BootstrapNavbar.Toggle aria-controls="navbarNav" />

          <BootstrapNavbar.Collapse id="navbarNav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link href="#home" className="nav-item">
                Home
              </Nav.Link>
              <Nav.Link href="#whychooseus" className="nav-item">
                About Us
              </Nav.Link>
              <Nav.Link href="#services" className="nav-item">
                Our Services
              </Nav.Link>

              <Nav.Link
                onClick={() => setShowQuoteModal(true)}
                className="nav-item quote-btn"
              >
                Get Free Quote
              </Nav.Link>

              <Nav.Link href="tel:3605054676" className="contact-btn">
                <FaPhone className="me-2" />
                +1 (773) 673-0161
              </Nav.Link>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>

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
          <p>
            Thank you for contacting us. We will get back to you as soon as
            possible!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowThankYouModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Navbar;
