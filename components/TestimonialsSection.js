'use client';

import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';

/**
 * Testimonials Section Component
 * Customer reviews and testimonials carousel
 */
export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      location: 'Shepperton',
      rating: 5,
      text: 'PHD Services installed our new bathroom and the result is absolutely stunning. The team was professional, punctual, and the quality of work is exceptional. Highly recommended!',
      service: 'Bathroom Installation',
    },
    {
      name: 'David Thompson',
      location: 'Walton-on-Thames',
      rating: 5,
      text: 'Called PHD Services for an emergency boiler repair on a Sunday evening. They arrived within an hour and had it fixed quickly. Excellent service and very reasonable pricing.',
      service: 'Boiler Repair',
    },
    {
      name: 'Emma Roberts',
      location: 'Sunbury-on-Thames',
      rating: 5,
      text: 'We use PHD Services for all our rental properties. Their landlord gas certificates are always completed on time, and their service is reliable and professional. Great team!',
      service: 'Gas Certificates',
    },
    {
      name: 'James Wilson',
      location: 'Shepperton',
      rating: 5,
      text: 'Had PHD Services install our new central heating system. From start to finish, the experience was fantastic. The team explained everything clearly and the installation was seamless.',
      service: 'Central Heating',
    },
  ];

  return (
    <section id="testimonials" className="bg-pattern">
      <Container>
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="text-center text-secondary mb-5" style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
          Don't just take our word for it. See what our satisfied customers have to say about our services.
        </p>

        <Row>
          <Col lg={10} className="mx-auto">
            <Carousel
              indicators={true}
              controls={true}
              interval={5000}
              className="testimonial-carousel"
            >
              {testimonials.map((testimonial, index) => (
                <Carousel.Item key={index}>
                  <Card className="border-0 shadow-lg mx-auto" style={{ maxWidth: '800px' }}>
                    <Card.Body className="p-5">
                      <div className="text-center mb-4">
                        <div className="mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} style={{ color: '#FFD700', fontSize: '1.5rem' }}>
                              ★
                            </span>
                          ))}
                        </div>
                        <p
                          className="text-secondary mb-4"
                          style={{ fontSize: '1.2rem', lineHeight: '1.8', fontStyle: 'italic' }}
                        >
                          "{testimonial.text}"
                        </p>
                      </div>
                      <div className="text-center">
                        <h5 className="mb-1" style={{ color: '#002F7A' }}>
                          {testimonial.name}
                        </h5>
                        <p className="text-secondary mb-1">{testimonial.location}</p>
                        <p className="mb-0" style={{ color: '#00B2FF', fontWeight: '600' }}>
                          {testimonial.service}
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>

        {/* Trust Indicators */}
        <Row className="mt-5 g-4">
          <Col md={3} sm={6} className="text-center">
            <div className="display-4 fw-bold mb-2" style={{ color: '#00B2FF' }}>
              20+
            </div>
            <p className="text-secondary">Years Experience</p>
          </Col>
          <Col md={3} sm={6} className="text-center">
            <div className="display-4 fw-bold mb-2" style={{ color: '#00B2FF' }}>
              5000+
            </div>
            <p className="text-secondary">Jobs Completed</p>
          </Col>
          <Col md={3} sm={6} className="text-center">
            <div className="display-4 fw-bold mb-2" style={{ color: '#00B2FF' }}>
              100%
            </div>
            <p className="text-secondary">Customer Satisfaction</p>
          </Col>
          <Col md={3} sm={6} className="text-center">
            <div className="display-4 fw-bold mb-2" style={{ color: '#00B2FF' }}>
              24/7
            </div>
            <p className="text-secondary">Emergency Service</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}