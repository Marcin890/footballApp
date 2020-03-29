import React from "react";
import Match from "./Match";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const MatchesTable = props => {
  const { matches } = props.matches;
  const addToFavorite = props.addToFavorite;

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

  const favoriteList = (
    <Match
      matches={favoriteMatches}
      addToFavorite={addToFavorite}
      getMatchStatusClass={getMatchStatusClass}
      symbol="-"
    />
  );

  const allList2 = (
    <Match
      matches={allMatches}
      addToFavorite={addToFavorite}
      getMatchStatusClass={getMatchStatusClass}
      symbol="+"
    />
  );

  const favoriteTitle = <h2>Favorite matches</h2>;

  return (
    <>
      {favoriteMatches.length > 0 ? favoriteTitle : ""}
      <table className="matches">
        <tbody>{favoriteList}</tbody>
      </table>
      <h2>All matches</h2>
      <TransitionGroup>
        <CSSTransition
          appear={true}
          timeout={600}
          classNames="fade"
          key={props.matches.filters.dateFrom}
        >
          <table className="matches">
            <tbody>{allList2}</tbody>
          </table>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default MatchesTable;
