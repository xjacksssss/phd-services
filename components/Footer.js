'use client';

import { Container, Row, Col } from 'react-bootstrap';

/**
 * Footer Component
 * Site footer with company information, quick links, and attribution
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#002F7A', color: 'white', paddingTop: '3rem', paddingBottom: '1rem' }}>
      <Container>
        <Row className="g-4">
          {/* Company Info */}
          <Col lg={4} md={6}>
            <h5 className="mb-3 fw-bold">PHD Services</h5>
            <p className="mb-2">
              Professional plumbing, heating, and electrical services in Shepperton and surrounding areas.
            </p>
            <p className="mb-1">
              <strong>Over 20 years of experience</strong>
            </p>
            <p className="mb-0">Fully licensed and insured</p>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6}>
            <h5 className="mb-3 fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#home" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#services" className="text-white text-decoration-none">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#about" className="text-white text-decoration-none">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          {/* Services */}
          <Col lg={3} md={6}>
            <h5 className="mb-3 fw-bold">Our Services</h5>
            <ul className="list-unstyled">
              <li className="mb-2">Plumbing</li>
              <li className="mb-2">Bathroom Installation</li>
              <li className="mb-2">Central Heating & Gas</li>
              <li className="mb-2">Boiler Repair</li>
              <li className="mb-2">Gas Certificates</li>
              <li className="mb-2">Electrical</li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col lg={3} md={6}>
            <h5 className="mb-3 fw-bold">Contact Us</h5>
            <p className="mb-2">
              <strong>Phone:</strong>
              <br />
              <a href="tel:01932423197" className="text-white text-decoration-none">
                01932 423197
              </a>
            </p>
            <p className="mb-2">
              <strong>Email:</strong>
              <br />
              <a href="mailto:phd@plumbingheatingsurrey.co.uk" className="text-white text-decoration-none">
                phd@plumbingheatingsurrey.co.uk
              </a>
            </p>
            <p className="mb-2">
              <strong>Service Area:</strong>
              <br />
              Shepperton & Surrounding Areas
            </p>
          </Col>
        </Row>

        <hr className="my-4" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }} />

        <Row>
          <Col className="text-center">
            <p className="mb-0" style={{ fontSize: '0.9rem' }}>
              © {currentYear} PHD Services. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}