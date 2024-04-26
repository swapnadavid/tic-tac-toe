export default function List({ turns = [] }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.currentPlayer} selected {turn.square.row}, {turn.square.col}
        </li>
      ))}
    </ol>
  );
}
