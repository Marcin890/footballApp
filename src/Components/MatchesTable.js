import React from "react";
const MatchesTable = props => {
  const matches = props.matches.matches;
  console.log(matches);

  const getMatchStatus = status => {
    let matchStatus;
    switch (status) {
      case "IN_PLAY":
        matchStatus = "match__status match__status--active";
        break;
      case "SCHEDULED":
        matchStatus = "match__status match__status--scheduled";
        break;
      case "PAUSED":
        matchStatus = "match__status match__status--paused";
        break;
      case "FINISHED":
        matchStatus = "match__status match__status--finished";
        break;
      default:
        matchStatus = "match__status match__status--scheduled";
    }
    return matchStatus;
  };

  const matchList = matches.map(match => (
    <tr>
      {/* <td>{match.status}</td> */}
      <td>
        <span className={getMatchStatus(match.status)}></span>
      </td>
      <td>{match.utcDate.slice(-9, -4)}</td>

      <td>{match.homeTeam.name}</td>
      <td>{match.score.fullTime.homeTeam}</td>
      <td>:</td>
      <td>{match.score.fullTime.awayTeam}</td>
      <td>{match.awayTeam.name}</td>
      <td className="match__halftime">
        {match.score.halfTime.homeTeam !== null &&
          `(${match.score.halfTime.homeTeam} : ${match.score.halfTime.awayTeam})`}
      </td>
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
