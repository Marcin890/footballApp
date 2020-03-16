import React from "react";
const MatchesTable = props => {
  const matches = props.matches.matches;
  const addToFavorite = props.addToFavorite;
  console.log(matches);

  const favoriteMatches = matches.filter(match => match.favorite);
  const allMatches = matches.filter(match => !match.favorite);

  const getMatchStatusClass = status => {
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
      case "POSTPONED":
        matchStatus = "match__status match__status--postponed";
        break;
      default:
        matchStatus = "match__status match__status--scheduled";
    }
    return matchStatus;
  };

  const favoriteList = favoriteMatches.map(match => (
    <tr>
      <td>
        <button onClick={() => addToFavorite(match.id)}>-</button>
      </td>
      <td>
        <span className={getMatchStatusClass(match.status)}></span>
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

  const allList = allMatches.map(match => (
    <tr>
      <td>
        <button className="btn--add" onClick={() => addToFavorite(match.id)}>
          +
        </button>
      </td>
      <td>
        <span className={getMatchStatusClass(match.status)}></span>
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

  return (
    <>
      <h3>{favoriteList.length > 0 ? "Favorite matches" : ""}</h3>
      <table>{favoriteList}</table>
      <h3>All matches</h3>
      <table>{allList}</table>
    </>
  );
};

export default MatchesTable;
