import React from "react";

const ScoreTable = ({ players }) => (
    <table className="score-table">
      <thead>
        <tr>
          <th>Player</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player) => (
          <tr key={player.name}>
            <td>
              {player.name} ({player.sign})
            </td>
            <td>{player.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  
  

export default ScoreTable;
