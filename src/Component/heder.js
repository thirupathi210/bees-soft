import React from "react";
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";


const Header = () => {
  return (
    <div className="header-wrapper py-2 shadow-sm">
  <Container fluid className="d-flex align-items-center justify-content-between px-3">
    {/* Logo */}
    <img src="./images/cd.png" alt="Logo" className="logo-clod" />

    {/* Desktop Navbar and Button */}
    <div className="d-none d-lg-flex align-items-center flex-grow-1 justify-content-between ms-4 me-4">
      <Navbar expand="lg" bg="white" className="rounded-pill px-3 py-2 w-100 shadow-sm">
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home" className="fw-bold text-primary">Home</Nav.Link>
            <NavDropdown title="Company" id="company-dropdown">
              <NavDropdown.Item href="#about">About</NavDropdown.Item>
              <NavDropdown.Item href="#team">Team</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Products" id="portfolio-dropdown">
              <NavDropdown.Item href="#projects">Projects</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Services" id="services-dropdown">
              <NavDropdown.Item href="#dev">Development</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Clients" id="pages-dropdown">
              <NavDropdown.Item href="#blog">Blog</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Get Started Button */}
      <Button variant="primary" className="get-started-btn rounded-pill px-4 ms-3">
        Get Started →
      </Button>
    </div>

    {/* Mobile Navbar */}
    <div className="d-lg-none">
      <Navbar expand="lg" bg="white" className="rounded shadow-sm px-3 py-2">
        <Navbar.Toggle aria-controls="mobile-navbar" />
        <Navbar.Collapse id="mobile-navbar">
          <Nav className="flex-column text-center mt-3">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#dev">Services</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  </Container>
</div>
  );
};

export default Header;
