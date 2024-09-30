import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  const goldMode = "#FFB200";
  const blueMode = "#102C57";
  const darkMode = "#000000";
  const blueBody = "#F5F5F5";
  const goldBody = "#FFEAC5";
  const darkBody = "#021526";

  const [mode, setMode] = useState(goldMode);

  function theme(mode) {
    setMode(mode);
    if (mode === blueMode) {
      document.body.style.background = blueBody;
    } else if (mode === goldMode) {
      document.body.style.background = goldBody;
    } else {
      document.body.style.background = darkBody;
    }
  }

  return (
    <Navbar expand="lg" style={{ background: mode }}>
      <Container>
        <div
          onMouseEnter={() => theme(goldMode)}
          role="button"
          style={{
            background: "#FFB200",
            border: "1px solid white",
            width: "25px",
            height: "25px",
            borderRadius: "50%",
            marginRight: "10px",
          }}
        ></div>
        <div
          onMouseEnter={() => theme(blueMode)}
          role="button"
          style={{
            background: "#102C57",
            border: "1px solid white",
            width: "25px",
            height: "25px",
            borderRadius: "50%",
            marginRight: "10px",
          }}
        ></div>
        <div
          onMouseEnter={() => theme(darkMode)}
          role="button"
          style={{
            background: "#000000",
            border: "1px solid white",
            width: "25px",
            height: "25px",
            borderRadius: "50%",
            marginRight: "50px",
          }}
        ></div>
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
      <span className="text-white mx-5">Cart</span>
    </Navbar>
  );
}

export default Header;
