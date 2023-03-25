import React from 'react';
import Confetti from 'react-confetti';
import Popup from './components/Popup';
import Board from './components/Board';
import ScoreTable from './components/ScoreTable';
import ResultPopup from './components/ResultPopup';
import './App.css';

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

const App = () => {
  const [showPopup, setShowPopup] = React.useState(true);
  const [showResult, setShowResult] = React.useState(false);
  const [players, setPlayers] = React.useState([]);
  const [board, setBoard] = React.useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = React.useState(true);
  const [winner, setWinner] = React.useState(null);

  const handleStartGame = (player1, player2) => {
    setShowPopup(false);
    setPlayers([
      { name: player1, score: 0, sign: 'X' },
      { name: player2, score: 0, sign: 'O' },
    ]);
  };

  const handleClick = (i) => {
    const newBoard = [...board];
    if (newBoard[i] || winner) return;
    newBoard[i] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  React.useEffect(() => {
    const winner = calculateWinner(board);
    const isDraw = !winner && !board.some((square) => square === null);

    if (winner || isDraw) {
      setWinner(winner);
      setShowResult(true);
      updateScore(winner);
      setTimeout(() => {
        setBoard(Array(9).fill(null));
        setWinner(null);
        setShowResult(false);
      }, 3000);
    }
  }, [board]);

  const updateScore = (winner) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) => {
        if (player.sign === winner) {
          return { ...player, score: player.score + 1 };
        }
        return player;
      })
    );
  };

  return (
    <div className="app">
      {showPopup && <Popup onSubmit={handleStartGame} />}
      {showResult && <ResultPopup winner={winner} onClose={() => setShowResult(false)} />}
      <ScoreTable players={players} />
      <Board squares={board} onClick={handleClick} />
      {winner && <Confetti />}
    </div>
  );
};

export default App;
