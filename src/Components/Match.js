import React from "react";
import "../Styles/Animations.css";

const Match = props => {
  const { matches, addToFavorite, getMatchStatusClass, symbol } = props;
  const allList = matches.map(match => (
    <tr key={match.id}>
      <td>
        <div className="match__status-wrapper">
          <div
            title={match.status.toLowerCase()}
            className={getMatchStatusClass(match.status)}
          ></div>
        </div>
      </td>
      <td className="match__start-time" title="start time">
        {match.utcDate.slice(-9, -4)}
      </td>

      <td>
        {match.homeTeam.name} <br /> {match.awayTeam.name}
      </td>
      <td>
        {match.score.fullTime.homeTeam} <br />
        {match.score.fullTime.awayTeam}
      </td>
      {/* 
      <td className="match__halftime">
        {match.score.halfTime.homeTeam !== null &&
          `(${match.score.halfTime.homeTeam} ${match.score.halfTime.awayTeam})`}
      </td> */}
      <td>
        <img
          title={match.competition.area.name}
          className="match__image"
          src={match.competition.area.ensignUrl}
          alt=""
        />
      </td>
      <td>
        <div className="match__favorite-wrapper">
          <button
            title="Add to favorite"
            className="match__addFavorite"
            onClick={() => addToFavorite(match.id)}
          >
            {symbol}
          </button>
        </div>
      </td>
    </tr>
  ));
  return <>{allList}</>;
};

export default Match;
