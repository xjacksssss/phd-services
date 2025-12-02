'use client';

import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

/**
 * Hero Section Component
 * Main landing section with hero image and call-to-action
 */
export default function HeroSection() {
  return (
    <section
      id="home"
      className="position-relative d-flex align-items-center"
      style={{
        minHeight: '100vh',
        paddingTop: '80px',
        backgroundColor: '#002F7A',
        overflow: 'hidden',
      }}
    >
      {/* Background Image with Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        <Image
          src="https://images.unsplash.com/photo-1553265381-674034b34554?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MzcxMzl8MHwxfHNlYXJjaHwxfHxwbHVtYmluZyUyMHByb2Zlc3Npb25hbCUyMHdvcmt8ZW58MHwwfHx8MTc2NDY3MzIwM3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Professional plumbing services"
          fill
          style={{ objectFit: 'cover' }}
          priority
          quality={90}
        />
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 47, 122, 0.95) 0%, rgba(0, 178, 255, 0.85) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <Container className="position-relative" style={{ zIndex: 2 }}>
        <Row className="align-items-center">
          <Col lg={8} className="text-white">
            <div className="fade-in-up">
              <h1 className="display-3 fw-bold mb-4" style={{ color: 'white' }}>
                Trusted Plumbing, Heating, and Electrical Services in Shepperton
              </h1>
              <p className="lead mb-4" style={{ fontSize: '1.5rem', color: 'rgba(255, 255, 255, 0.95)' }}>
                Over 20 years of experience serving the local community with professional, reliable service
              </p>
              <ul className="list-unstyled mb-5" style={{ fontSize: '1.1rem' }}>
                <li className="mb-2">✓ Fully Licensed and Insured Tradespeople</li>
                <li className="mb-2">✓ 24/7 Emergency Services Available</li>
                <li className="mb-2">✓ Competitive Pricing with Free Quotes</li>
                <li className="mb-2">✓ Quality Workmanship Guaranteed</li>
              </ul>
              <div className="d-flex flex-wrap gap-3">
                <a href="#contact" className="btn btn-light btn-lg px-4 py-3 fw-bold">
                  Get a Free Quote
                </a>
                <a href="tel:01932423197" className="btn btn-outline-light btn-lg px-4 py-3 fw-bold">
                  📞 Call Us Today
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}