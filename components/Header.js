'use client';

import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';

/**
 * Header Component
 * Sticky navigation header with mobile responsive menu
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={setExpanded}
      className={`${scrolled ? 'shadow-sm' : ''}`}
      style={{
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : '#fff',
        transition: 'all 0.3s ease',
        borderBottom: '1px solid rgba(0, 47, 122, 0.1)',
      }}
    >
      <Container>
        <Navbar.Brand href="#home" className="fw-bold" style={{ color: '#002F7A', fontSize: '1.5rem' }}>
          PHD Services
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" onClick={handleNavClick} className="mx-2 fw-semibold">
              Home
            </Nav.Link>
            <Nav.Link href="#services" onClick={handleNavClick} className="mx-2 fw-semibold">
              Services
            </Nav.Link>
            <Nav.Link href="#about" onClick={handleNavClick} className="mx-2 fw-semibold">
              About
            </Nav.Link>
            <Nav.Link href="#testimonials" onClick={handleNavClick} className="mx-2 fw-semibold">
              Testimonials
            </Nav.Link>
            <Nav.Link href="#contact" onClick={handleNavClick} className="mx-2 fw-semibold">
              Contact
            </Nav.Link>
          </Nav>
          <a
            href="tel:01932423197"
            className="btn btn-primary ms-lg-3 mt-2 mt-lg-0"
            style={{ whiteSpace: 'nowrap' }}
          >
            📞 01932 423197
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}