import { useState } from "react";

export default function Player({ name, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {isEditing && (
          <input
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
        )}
        {!isEditing && <span className="player-name">{playerName}</span>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button
        onClick={() => {
          setIsEditing((editing) => !editing);
        }}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
