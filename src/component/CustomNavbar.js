import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
function CustomNavbar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="">About</Nav.Link>
            <Nav.Link href="">News</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
