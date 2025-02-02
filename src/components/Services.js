// src/components/Services.js
import React from "react";
import { galleryData } from "./Gallery/galleryData"; // Import the data

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container text-center">
          <h1>Our Professional Services</h1>
          <p>
            Providing top-quality painting services for interiors, exteriors,
            cabinets, decks, and fences.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <div className="container">
        {/* First Row */}
        <div className="row">
          {Object.entries(galleryData)
            .slice(0, 2)
            .map(([key, service], index) => (
              <div
                key={index}
                className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4"
              >
                <div className="card">
                  <img
                    src={service.images[0]}
                    className="card-img-top"
                    alt={service.title}
                    data-bs-toggle="modal"
                    data-bs-target="#imageModal"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{service.title}</h5>
                    <p className="card-text">{service.description}</p>
                    <ul>
                      {service.services.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                    <button
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#estimateModal"
                    >
                      GET ESTIMATE
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Second Row */}
        <div className="row">
          {Object.entries(galleryData)
            .slice(2)
            .map(([key, service], index) => (
              <div
                key={index}
                className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4"
              >
                <div className="card">
                  <img
                    src={service.images[0]}
                    className="card-img-top"
                    alt={service.title}
                    data-bs-toggle="modal"
                    data-bs-target="#imageModal"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{service.title}</h5>
                    <p className="card-text">{service.description}</p>
                    <ul>
                      {service.services.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                    <button
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#estimateModal"
                    >
                      GET ESTIMATE
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
