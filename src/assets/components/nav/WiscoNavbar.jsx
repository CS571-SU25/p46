
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router";


export default function WiscoNavbar(props) {
    return <Navbar>
        <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Brand as={Link} to="/">
                Wisconsin Volleyball 2025
            </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav" className="me-auto">
                <Nav>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/countdown">Countdown</Nav.Link>
                    <Nav.Link as={Link} to="/roster">Roster</Nav.Link>
                    <Nav.Link as={Link} to="/schedule">Schedule</Nav.Link>
                    <Nav.Link as={Link} to="/tickets">Tickets</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}