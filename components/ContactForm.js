'use client';

import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

/**
 * Contact Form Component
 * Client-side form with validation that submits to API route
 */
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const services = [
    'Plumbing',
    'Bathroom Installation',
    'Central Heating & Gas',
    'Landlord Gas Certificates',
    'Boiler Repair',
    'Electrical',
    'Other',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you for your message! We will get back to you shortly.',
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
        setValidated(false);
      } else {
        setStatus({
          type: 'danger',
          message: data.error || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      setStatus({
        type: 'danger',
        message: 'Failed to send message. Please try again or call us directly.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-light p-4 p-lg-5 rounded shadow">
      <h3 className="h4 mb-4" style={{ color: '#002F7A' }}>
        Send Us a Message
      </h3>

      {status.message && (
        <Alert variant={status.type} onClose={() => setStatus({ type: '', message: '' })} dismissible>
          {status.message}
        </Alert>
      )}

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Full Name *</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            disabled={loading}
          />
          <Form.Control.Feedback type="invalid">Please provide your name.</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email Address *</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            required
            disabled={loading}
          />
          <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Label>Phone Number *</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="01932 123456"
            required
            disabled={loading}
          />
          <Form.Control.Feedback type="invalid">Please provide your phone number.</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formService">
          <Form.Label>Service Required *</Form.Label>
          <Form.Select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            disabled={loading}
          >
            <option value="">Select a service...</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </Form.Select>
          <Form.Control.Feedback type="invalid">Please select a service.</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-4" controlId="formMessage">
          <Form.Label>Message *</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your requirements..."
            required
            disabled={loading}
          />
          <Form.Control.Feedback type="invalid">Please provide a message.</Form.Control.Feedback>
        </Form.Group>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-100"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </Button>

        <p className="text-center text-secondary mt-3 mb-0" style={{ fontSize: '0.875rem' }}>
          * Required fields
        </p>
      </Form>
    </div>
  );
}