import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router";

export default function WiscoNavbar(props) {
  return (
    <Navbar
      
      variant = "dark"
      style={{ backgroundColor: "#b71c1c" }}
    >
      <Container fluid>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand as={Link} to="/">
          Wisconsin Volleyball 2025
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav" className="me-auto">
          <Nav>
            <Nav.Link as={Link} to="/" style={{ color: "white" }}>Home</Nav.Link>
            <Nav.Link as={Link} to="/countdown" style={{ color: "white" }}>Countdown</Nav.Link>
            <Nav.Link as={Link} to="/roster" style={{ color: "white" }}>Roster</Nav.Link>
            <Nav.Link as={Link} to="/tickets" style={{ color: "white" }}>Schedule/Tickets</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}