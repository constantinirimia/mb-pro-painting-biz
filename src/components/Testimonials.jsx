// src/components/Testimonials.jsx
import React from "react";
import { Container, Carousel, Row, Col } from "react-bootstrap";
import { FaStar, FaQuoteLeft } from "react-icons/fa"; // Add react-icons to your project

const testimonials = [
  {
    name: "Sarah M.",
    location: "Lincoln Park, Chicago",
    text: "MB Pro Painting transformed our living room and kitchen with their exceptional interior painting service. The attention to detail was remarkable, and the team was professional throughout. They completed the job ahead of schedule and left everything spotless!",
    rating: 5,
  },
  {
    name: "Michael R.",
    location: "Wicker Park, Chicago",
    text: "Exceptional work on our deck and fence! The team was meticulous in their preparation and application. The new stain has completely refreshed our outdoor space, and their expertise in selecting weather-resistant products was invaluable.",
    rating: 5,
  },
  {
    name: "Jennifer L.",
    location: "Lakeview, Chicago",
    text: "Our kitchen cabinets look brand new! MB Pro's cabinet painting service was exactly what we needed. They were thorough in their prep work, and the finish is flawless. Great value compared to full cabinet replacement.",
    rating: 5,
  },
  {
    name: "David W.",
    location: "Oak Park, Chicago",
    text: "The exterior painting job exceeded our expectations. They handled our historic home with care and expertise. The prep work was thorough, and the final result has dramatically improved our curb appeal.",
    rating: 5,
  },
  {
    name: "Robert K.",
    location: "Loop, Chicago",
    text: "MB Pro painted our entire office space over the weekend to minimize business disruption. Their team was efficient, professional, and the quality of work was outstanding. Highly recommend for commercial projects!",
    rating: 5,
  },
  {
    name: "Patricia M.",
    location: "Evanston, Chicago",
    text: "From start to finish, working with MB Pro was a pleasure. They transformed our dated kitchen cabinets into a modern masterpiece. Their attention to detail and cleanliness during the project was impressive.",
    rating: 5,
  },
  {
    name: "Thomas H.",
    location: "Lincoln Square, Chicago",
    text: "Our deck looks amazing after MB Pro's treatment. They were knowledgeable about the best products for Chicago weather and provided great advice. The finish has held up beautifully through all seasons.",
    rating: 5,
  },
  {
    name: "Emily R.",
    location: "Bucktown, Chicago",
    text: "Best painting service in Chicago! They did an amazing job on our interior walls and trim. The team was punctual, professional, and the pricing was very competitive. Would hire again in a heartbeat!",
    rating: 5,
  },
  {
    name: "James B.",
    location: "Rogers Park, Chicago",
    text: "The fence painting project was completed perfectly. They used high-quality materials and their preparation work was thorough. The team was respectful of our property and neighbors throughout the process.",
    rating: 5,
  },
];

const StarRating = () => (
  <div className="stars d-flex gap-1 mb-3">
    {[...Array(5)].map((_, i) => (
      <FaStar key={i} className="star-icon" />
    ))}
  </div>
);

const TestimonialCard = ({ testimonial }) => (
  <div className="review-card">
    <div className="quote-icon">
      <FaQuoteLeft />
    </div>
    <StarRating />
    <p className="review-text">{testimonial.text}</p>
    <div className="reviewer-info">
      <p className="reviewer-name">{testimonial.name}</p>
      <p className="location">{testimonial.location}</p>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="testimonials-section py-5" id="testimonials">
      <Container>
        <div className="section-header text-center mb-5">
          <h6 className="text-primary text-uppercase fw-bold">Testimonials</h6>
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="section-divider"></div>
        </div>

        <Carousel
          indicators={true}
          controls={true}
          interval={5000}
          className="testimonials-carousel"
        >
          {Array.from({ length: Math.ceil(testimonials.length / 3) }).map(
            (_, slideIndex) => (
              <Carousel.Item key={slideIndex}>
                <Row className="g-4">
                  {testimonials
                    .slice(slideIndex * 3, (slideIndex + 1) * 3)
                    .map((testimonial, index) => (
                      <Col md={4} key={index}>
                        <TestimonialCard testimonial={testimonial} />
                      </Col>
                    ))}
                </Row>
              </Carousel.Item>
            )
          )}
        </Carousel>
      </Container>
    </section>
  );
};

export default Testimonials;
