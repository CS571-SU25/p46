import PlayerSummary from "../../PlayerSummary";
import players from "../../../players.json";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Roster() {
  console.log(players);
  return (
    <Container>
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
          Team Roster
        </h1>
      </div>
      <Row className="justify-content-center">
        {players.map((player) => (
          <Col 
            key={player.id} 
            xs={12} sm={6} md={4} lg={3} 
            className="d-flex justify-content-center"
          >
            <PlayerSummary player={player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}