import PlayerSummary from "../../PlayerSummary";
import players from "../../../players.json";

export default function Roster() {
    console.log(players);
  return (
    <div>
      <h2>Team Roster</h2>
      <div>
        {players.map((player) => (
          <PlayerSummary key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
}