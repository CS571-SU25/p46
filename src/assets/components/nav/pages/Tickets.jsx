import { Container, Row, Col, Button } from "react-bootstrap";

export default function Tickets() {
  return (
    <Container style={{ paddingTop: "80px" }}>
      <div style={{ textAlign: "center", margin: "1.5rem 0" }}>
        <h1
          style={{
            display: "inline-block",
            backgroundColor: "#ffe6f0",
            borderRadius: "12px",
            padding: "10px 20px",
            fontWeight: "bold",
          }}
        >
          Schedule/Tickets
        </h1>
      </div>
      <Row className="align-items-center">
        <Col md={6} className="text-center mb-4 mb-md-0">
          <img
            src="/images/schedule.jpg"
            alt="2025 Volleyball Schedule"
            style={{
              maxWidth: "100%",
              height: "400px",
              borderRadius: "12px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
            }}
          />
        </Col>
        <Col md={6} className="text-center">
          <p className="mb-4" style={{ fontSize: "1.2rem" }}>
            Click below to purchase your tickets to see the Wisconsin Badgers in action!
          </p>
          <Button
            href="https://uwbadgers.evenue.net/signin?uf=SR&continue=%2Fcgi-bin%2Fncommerce3%2FGetApps%3FlinkID%3Dwisc%26caller%3DappList"
            target="_blank"
            rel="noopener noreferrer"
            variant="danger"
            size="lg"
          >
            Buy Tickets
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
