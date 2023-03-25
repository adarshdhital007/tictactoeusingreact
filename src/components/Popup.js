import React from "react";

const Popup = ({ onSubmit }) => {
  const [player1, setPlayer1] = React.useState("");
  const [player2, setPlayer2] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(player1, player2);
  };

  return (
    <div className="popup">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Player 1"
          value={player1}
          onChange={(e) => setPlayer1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Player 2"
          value={player2}
          onChange={(e) => setPlayer2(e.target.value)}
        />
        <button type="submit">Start</button>
      </form>
    </div>
  );
};

export default Popup;
