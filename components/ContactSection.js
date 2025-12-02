'use client';

import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from './ContactForm';

/**
 * Contact Section Component
 * Contact information and form
 */
export default function ContactSection() {
  return (
    <section id="contact">
      <Container>
        <h2 className="section-title">Get In Touch</h2>
        <p className="text-center text-secondary mb-5" style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
          Ready to get started? Contact us today for a free quote or to discuss your requirements.
        </p>

        <Row className="g-5">
          {/* Contact Information */}
          <Col lg={5}>
            <div className="h-100">
              <h3 className="h4 mb-4" style={{ color: '#002F7A' }}>
                Contact Information
              </h3>

              <div className="mb-4">
                <div className="d-flex align-items-start mb-3">
                  <div
                    className="flex-shrink-0 me-3"
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #00B2FF, #94BDFF)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1.25rem',
                    }}
                  >
                    📞
                  </div>
                  <div>
                    <h5 style={{ color: '#002F7A' }}>Phone</h5>
                    <a
                      href="tel:01932423197"
                      className="text-decoration-none"
                      style={{ color: '#00B2FF', fontSize: '1.1rem' }}
                    >
                      01932 423197
                    </a>
                    <p className="text-secondary mb-0 mt-1">Available 24/7 for emergencies</p>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-3">
                  <div
                    className="flex-shrink-0 me-3"
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #00B2FF, #94BDFF)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1.25rem',
                    }}
                  >
                    ✉️
                  </div>
                  <div>
                    <h5 style={{ color: '#002F7A' }}>Email</h5>
                    <a
                      href="mailto:phd@plumbingheatingsurrey.co.uk"
                      className="text-decoration-none"
                      style={{ color: '#00B2FF', fontSize: '1.1rem', wordBreak: 'break-all' }}
                    >
                      phd@plumbingheatingsurrey.co.uk
                    </a>
                    <p className="text-secondary mb-0 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-3">
                  <div
                    className="flex-shrink-0 me-3"
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #00B2FF, #94BDFF)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1.25rem',
                    }}
                  >
                    📍
                  </div>
                  <div>
                    <h5 style={{ color: '#002F7A' }}>Service Area</h5>
                    <p className="text-secondary mb-0">
                      Shepperton and surrounding areas
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <h4 className="h5 mb-3" style={{ color: '#002F7A' }}>
                  Business Hours
                </h4>
                <div className="text-secondary">
                  <p className="mb-2">
                    <strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM
                  </p>
                  <p className="mb-2">
                    <strong>Saturday:</strong> 9:00 AM - 4:00 PM
                  </p>
                  <p className="mb-2">
                    <strong>Sunday:</strong> Emergency calls only
                  </p>
                  <p className="mb-0 mt-3">
                    <strong style={{ color: '#00B2FF' }}>24/7 Emergency Service Available</strong>
                  </p>
                </div>
              </div>
            </div>
          </Col>

          {/* Contact Form */}
          <Col lg={7}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
}