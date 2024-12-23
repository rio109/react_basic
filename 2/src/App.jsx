
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { useState } from "react"
import { WINNING_COMBINATIONS } from "./components/Winning-combination";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];


function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer
}


function App() {
  const [gameTurns, setGameTruns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns)
  // const [activePlayer, setActivePlayer] = useState("X");

  let gameBoard = [...initialGameBoard.map(array => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const first = gameBoard[combination[0].row][combination[0].column]
    const second = gameBoard[combination[1].row][combination[1].column]
    const third = gameBoard[combination[2].row][combination[2].column]
    if (first && first === second && first === third) {
      winner = first;
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;


  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => curActivePlayer === "X" ? "O" : "X");
    setGameTruns((prevTurns) => {
      let currentPlayer = deriveActivePlayer(prevTurns)

      const updatedTruns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns,
      ];

      return updatedTruns

    })
  }

  function handleRestart() {
    setGameTruns([]);

  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol >
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
        <GameBoard turns={gameTurns} onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
