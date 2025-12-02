'use client';

import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

/**
 * About Section Component
 * Company information and background
 */
export default function AboutSection() {
  return (
    <section id="about">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <div className="position-relative" style={{ height: '500px' }}>
              <Image
                src="https://images.unsplash.com/photo-1657558665549-bd7d82afed8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MzcxMzl8MHwxfHNlYXJjaHwxfHxwbHVtYmluZyUyMHRlYW18ZW58MHwwfHx8MTc2NDY3MzIwM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="PHD Services team"
                fill
                style={{ objectFit: 'cover', borderRadius: '12px' }}
                className="shadow"
              />
            </div>
          </Col>

          <Col lg={6}>
            <h2 className="section-title text-start">
              About PHD Services
            </h2>
            <h3 className="h4 mb-4" style={{ color: '#00B2FF' }}>
              Over 20 Years of Excellence in Shepperton
            </h3>
            <p className="text-secondary mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              PHD Services has been providing high-quality plumbing, heating, and electrical services to the Shepperton area for over 20 years. Our team of licensed and insured tradespeople are committed to delivering exceptional workmanship and customer service on every job, whether it's a routine maintenance task or a complex installation.
            </p>
            <p className="text-secondary mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              With 24/7 emergency services available, you can count on us to be there when you need us most. We pride ourselves on our reliability, professionalism, and the quality of our work.
            </p>

            <Row className="g-4 mt-4">
              <Col sm={6}>
                <div className="d-flex align-items-start">
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
                      fontSize: '1.5rem',
                    }}
                  >
                    ✓
                  </div>
                  <div>
                    <h5 style={{ color: '#002F7A' }}>Licensed & Insured</h5>
                    <p className="text-secondary mb-0">Fully qualified professionals</p>
                  </div>
                </div>
              </Col>
              <Col sm={6}>
                <div className="d-flex align-items-start">
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
                      fontSize: '1.5rem',
                    }}
                  >
                    ✓
                  </div>
                  <div>
                    <h5 style={{ color: '#002F7A' }}>24/7 Emergency</h5>
                    <p className="text-secondary mb-0">Always available when you need us</p>
                  </div>
                </div>
              </Col>
              <Col sm={6}>
                <div className="d-flex align-items-start">
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
                      fontSize: '1.5rem',
                    }}
                  >
                    ✓
                  </div>
                  <div>
                    <h5 style={{ color: '#002F7A' }}>20+ Years Experience</h5>
                    <p className="text-secondary mb-0">Trusted local experts</p>
                  </div>
                </div>
              </Col>
              <Col sm={6}>
                <div className="d-flex align-items-start">
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
                      fontSize: '1.5rem',
                    }}
                  >
                    ✓
                  </div>
                  <div>
                    <h5 style={{ color: '#002F7A' }}>Quality Guaranteed</h5>
                    <p className="text-secondary mb-0">Workmanship you can trust</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}