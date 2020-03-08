import React from "react";
const MatchesTable = props => {
  const matches = props.matches.matches;
  console.log(matches);
  const matchList = matches.map(match => (
    <tr>
      <td>{match.utcDate.slice(-9, -4)}</td>
      <td>{match.homeTeam.name}</td>
      <td>{match.score.fullTime.homeTeam}</td>
      <td>:</td>
      <td>{match.score.fullTime.awayTeam}</td>
      <td>{match.awayTeam.name}</td>
      <td>
        <img
          class="match__image"
          src={match.competition.area.ensignUrl}
          alt=""
        />
      </td>
    </tr>
  ));

  return <table>{matchList}</table>;
};

export default MatchesTable;
