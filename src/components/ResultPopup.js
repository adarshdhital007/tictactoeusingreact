import React from 'react';

const ResultPopup = ({ winner, onClose }) => {
  const message = winner ? `${winner} has won the game!` : "It's a draw!";

  return (
    <div className="popup">
      <div className="result-popup">
        <h2>{message}</h2>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ResultPopup;
