'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';
import Image from 'next/image';

/**
 * Services Section Component
 * Displays all services offered in a card grid layout
 */
export default function ServicesSection() {
  const services = [
    {
      title: 'Plumbing',
      description: 'Complete plumbing solutions for residential and commercial properties. From leak repairs to full installations.',
      icon: '🔧',
      image: 'https://images.unsplash.com/photo-1581166418878-11f0dde922c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MzcxMzl8MHwxfHNlYXJjaHwxfHxwbHVtYmluZyUyMHRvb2xzJTIwZXF1aXBtZW50fGVufDB8MHx8fDE3NjQ2NzMyMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Bathroom Installation',
      description: 'Professional bathroom design and installation services. Transform your bathroom into a modern sanctuary.',
      icon: '🚿',
      image: 'https://images.unsplash.com/photo-1731694411560-050e5b91e943?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MzcxMzl8MHwxfHNlYXJjaHwyfHxwbHVtYmluZyUyMHRvb2xzJTIwZXF1aXBtZW50fGVufDB8MHx8fDE3NjQ2NzMyMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Central Heating & Gas',
      description: 'Expert central heating installation, maintenance, and gas safety services for your peace of mind.',
      icon: '🔥',
      image: 'https://images.unsplash.com/photo-1620825141088-a824daf6a46b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MzcxMzl8MHwxfHNlYXJjaHwzfHxwbHVtYmluZyUyMHRvb2xzJTIwZXF1aXBtZW50fGVufDB8MHx8fDE3NjQ2NzMyMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Landlord Gas Certificates',
      description: 'Fast and reliable gas safety certificates for landlords. Fully compliant with current regulations.',
      icon: '📋',
      image: 'https://images.unsplash.com/photo-1581166397057-235af2b3c6dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MzcxMzl8MHwxfHNlYXJjaHw0fHxwbHVtYmluZyUyMHRvb2xzJTIwZXF1aXBtZW50fGVufDB8MHx8fDE3NjQ2NzMyMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Boiler Repair',
      description: 'Emergency boiler repairs and servicing. Keep your home warm and your boiler running efficiently.',
      icon: '⚙️',
      image: 'https://images.unsplash.com/photo-1657558665549-bd7d82afed8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MzcxMzl8MHwxfHNlYXJjaHw1fHxwbHVtYmluZyUyMHRvb2xzJTIwZXF1aXBtZW50fGVufDB8MHx8fDE3NjQ2NzMyMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Electrical',
      description: 'Comprehensive electrical services from installations to repairs. Certified electricians you can trust.',
      icon: '⚡',
      image: 'https://images.unsplash.com/photo-1581166418878-11f0dde922c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MzcxMzl8MHwxfHNlYXJjaHwxfHxwbHVtYmluZyUyMHRvb2xzJTIwZXF1aXBtZW50fGVufDB8MHx8fDE3NjQ2NzMyMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section id="services" className="bg-pattern">
      <Container>
        <h2 className="section-title">Our Services</h2>
        <p className="text-center text-secondary mb-5" style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
          Comprehensive plumbing, heating, and electrical solutions for residential and commercial properties
        </p>

        <Row className="g-4">
          {services.map((service, index) => (
            <Col key={index} md={6} lg={4}>
              <Card className="h-100 service-card">
                <div className="position-relative" style={{ height: '200px' }}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="card-img-top"
                  />
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(0,47,122,0.1), rgba(0,47,122,0.3))',
                    }}
                  />
                  <div
                    className="position-absolute top-50 start-50 translate-middle"
                    style={{
                      fontSize: '3rem',
                      background: 'white',
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    }}
                  >
                    {service.icon}
                  </div>
                </div>
                <Card.Body className="text-center p-4">
                  <Card.Title className="h4 mb-3" style={{ color: '#002F7A' }}>
                    {service.title}
                  </Card.Title>
                  <Card.Text className="text-secondary mb-4">
                    {service.description}
                  </Card.Text>
                  <a
                    href="#contact"
                    className="btn btn-outline-primary"
                    style={{ borderRadius: '25px' }}
                  >
                    Get a Quote
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Emergency Service Banner */}
        <Row className="mt-5">
          <Col>
            <div
              className="text-center p-5 rounded shadow"
              style={{
                background: 'linear-gradient(135deg, #002F7A 0%, #00B2FF 100%)',
                color: 'white',
              }}
            >
              <h3 className="h2 mb-3">24/7 Emergency Services Available</h3>
              <p className="lead mb-4">
                Plumbing or heating emergency? We're here to help, day or night.
              </p>
              <a
                href="tel:01932423197"
                className="btn btn-light btn-lg px-5 py-3 fw-bold"
              >
                📞 Call Now: 01932 423197
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}