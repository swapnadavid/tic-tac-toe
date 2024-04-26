import GameBoard from "./components/GameBoard";
import List from "./components/List";
import Player from "./components/Player";
import { useState } from "react";

function deriveActivePlayer(turns) {
  let currentPlayer = "X";
  if (turns.length > 0 && turns[0].currentPlayer == "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);
  function handleSquareSelect(rowIndex, colIndex) {
    setGameTurns((prevGameTurns) => {
      const currentPlayer = deriveActivePlayer(prevGameTurns);
      const newGameTurns = [
        { square: { row: rowIndex, col: colIndex }, currentPlayer },
        ...prevGameTurns,
      ];
      console.log(newGameTurns);
      return newGameTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Swapna" symbol="X" isActive={activePlayer == "X"} />
          <Player name="David" symbol="O" isActive={activePlayer == "O"} />
        </ol>
        <GameBoard
          handleSquareSelect={handleSquareSelect}
          activePlayer={activePlayer}
          gameTurns={gameTurns}
        />
        <List turns={gameTurns} />
      </div>
    </main>
  );
}

export default App;
