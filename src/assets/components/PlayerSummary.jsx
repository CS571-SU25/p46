export default function PlayerSummary({ player }) {
  const { name, position, year, redshirt, height, home, image } = player;

  const formattedHeight =
    height.feet || height.inches
      ? `${height.feet}'${height.inches}"`
      : "";

  const formattedYear = redshirt && year ? `${year} (Redshirt)` : year;

  return (
    <div className="player-card">
      <img
        src={image || "/images/default.jpg"}
        alt={`${name.first} ${name.last}`}
      />
      <h3>{name.first} {name.last}</h3>

      <p>
        {[position, formattedYear, formattedHeight].filter(Boolean).join(" · ")}
      </p>

      <p>{home}</p>
    </div>
  );
}