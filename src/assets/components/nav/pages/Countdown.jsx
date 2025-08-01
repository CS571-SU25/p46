import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Countdown() {
  const gameDate = new Date("2025-08-29T00:00:00");
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  // Generate filenames dynamically
  const candidImages = Array.from({ length: 8 }, (_, i) => `candid${i + 1}.jpg`);

  function getTimeRemaining() {
    const total = gameDate - new Date();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return { total, days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Container style={{ paddingTop: "80px", textAlign: "center" }}>
      <h1
        style={{
          backgroundColor: "#ffe6f0",
          borderRadius: "12px",
          padding: "10px 20px",
          display: "inline-block",
          fontWeight: "bold",
        }}
      >
        Countdown to the First Match vs. Kentucky – August 29, 2025
      </h1>

      {timeLeft.total > 0 ? (
        <h2 style={{ marginTop: "2rem", marginBottom: "4rem", fontSize: "2rem" }}>
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </h2>
      ) : (
        <h2 style={{ marginTop: "2rem", fontSize: "2rem" }}>
          Game Day is Here! Go Badgers!
        </h2>
      )}

      <Row>
        {candidImages.map((filename, idx) => (
          <Col key={idx} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <img
              src={`/images/candids/${filename}`}
              alt={`Candid ${idx + 1}`}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "12px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
              }}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}