const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ handleSquareSelect, gameTurns }) {
  let gameBoard = initialGameBoard;
  for (const turn of gameTurns) {
    console.log("TURN", turn);

    const {
      square: { row, col },
      currentPlayer,
    } = turn;
    gameBoard[row][col] = currentPlayer;
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => handleSquareSelect(rowIndex, colIndex)}
                  disabled={symbol}
                >
                  {symbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
