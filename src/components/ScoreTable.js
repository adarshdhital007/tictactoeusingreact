import React from "react";

const ScoreTable = ({ players }) => {
  const sortedPlayers = players.sort((a, b) => b.score - a.score);

  return (
    <table className="score-table">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Player</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {sortedPlayers.map((player, index) => (
          <tr key={player.name}>
            <td>{index + 1}</td>
            <td>
              {player.name} ({player.sign})
            </td>
            <td>{player.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

  

export default ScoreTable;
