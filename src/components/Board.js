import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick }) => {
  const renderSquare = (i) => <Square value={squares[i]} onClick={() => onClick(i)} />;

  return (
    <div className="board">
      {Array(9)
        .fill(null)
        .map((_, i) => renderSquare(i))}
    </div>
  );
};

export default Board;
