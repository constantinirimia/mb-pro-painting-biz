// src/components/QuoteModal.jsx
import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

const QuoteModal = ({ show, onHide, onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    service: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mvgzaejy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        onSubmitSuccess();
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          service: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      size="lg"
      className="quote-modal"
    >
      <div className="modal-content">
        <p className="text-center mb-4">Request a FREE Estimate!</p>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Your name"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              required
            />
          </Form.Group>

          <div className="row mb-3">
            <div className="col-md-6">
              <Form.Control
                type="tel"
                placeholder="Phone number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
              />
            </div>
          </div>

          <Form.Group className="mb-3">
            <Form.Select
              value={formData.service}
              onChange={(e) =>
                setFormData({ ...formData, service: e.target.value })
              }
              required
            >
              <option value="">I'm interested in...</option>
              <option value="interior">Interior Painting</option>
              <option value="exterior">Exterior Painting</option>
              <option value="commercial">Cabinet Painting</option>
              <option value="commercial">Deck & Fence Painting</option>
              <option value="commercial">Something else</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              rows={3} // You can adjust the number of rows for the height of the textarea
              placeholder="Your message ... "
              value={formData.text}
              onChange={(e) =>
                setFormData({ ...formData, text: e.target.value })
              }
            />
          </Form.Group>

          <Button type="submit" className="w-100">
            Submit
          </Button>
        </Form>
      </div>
    </Modal>
  );
};

export default QuoteModal;
