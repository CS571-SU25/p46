import Card from "react-bootstrap/Card";

export default function PlayerSummary({ player }) {
  const { id, name, position, year, redshirt, height, home, image } = player;

  console.log("Image src:", image);

  const formattedHeight =
    height.feet || height.inches
      ? `${height.feet}'${height.inches}"`
      : "";

  const formattedYear = redshirt && year ? `${year} (Redshirt)` : year;

  return (
    <Card
      className="player-card mb-4"
      style={{ borderRadius: "15px", backgroundColor: "#ffe6f0", width: "250px" }}
    >
      <Card.Img
        variant="top"
        src={image || `/images/${name.last.toLowerCase()}.jpg`}
        alt={`${name.first} ${name.last}`}
        style={{ 
          height: "250px",
          objectFit: "cover",
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px"
        }}
      />
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold", fontStyle: "italic" }}>#{id}  {name.first} {name.last}</Card.Title>
        <Card.Text>
          {[position, formattedYear, formattedHeight].filter(Boolean).join(" · ")}
        </Card.Text>
        <Card.Text>{home}</Card.Text>
      </Card.Body>
    </Card>
  );
}