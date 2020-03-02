import React from "react";

const Position = props => {
  const teams = props.data.map(team => (
    <tr>
      <td>{team.position}</td>
      <td>{team.team.name}</td>
      <td>{team.playedGames}</td>
      <td>{team.won}</td>
      <td>{team.draw}</td>
      <td>{team.lost}</td>
      <td>{team.points}</td>
      <td>{team.goalsFor}</td>
      <td>{team.goalsAgainst}</td>
      <td>{team.goalDifference}</td>
    </tr>
  ));

  return <tbody>{teams}</tbody>;
};

export default Position;
