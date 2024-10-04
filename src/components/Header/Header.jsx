import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Badge } from "react-bootstrap";

function Header() {
  const cartProductCount = useSelector((state) => state.cart.cartProductCount);

  return (
    <Navbar expand="lg" style={{ background: "#000000" }}>
      <Container>
        <Navbar.Brand className="text-white" href="#home">
          Rangoli
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-white" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="text-white" href="#link">
              Shop
            </Nav.Link>
            <Nav.Link className="text-white" href="#link">
              Orders
            </Nav.Link>
            <Nav.Link className="text-white" href="#link">
              Account
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div className="mx-3">
        <div className="mx-2">
          <Badge bg="secondary">{cartProductCount}</Badge>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          fill="white"
          class="bi bi-cart"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
        </svg>
      </div>
    </Navbar>
  );
}

export default Header;
