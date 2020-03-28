import React, { Component } from "react";
// import Position from "./Position";

const sortTypes = arg => {
  const types = {
    up: {
      class: "sort-up",
      fn: (a, b) => a[arg] - b[arg]
    },
    down: {
      class: "sort-down",
      fn: (a, b) => b[arg] - a[arg]
    },
    default: {
      class: "sort",
      fn: (a, b) => a
    }
  };
  return types;
};

const tableHeader = [
  { text: "P", title: "Position", sort: "position" },
  { text: "Team Name", title: "Team Name", sort: "" },
  { text: "G", title: "Played Games", sort: "playedGames" },
  { text: "W", title: "Won", sort: "won" },
  { text: "D", title: "Draw", sort: "draw" },
  { text: "L", title: "Lost", sort: "lost" },
  { text: "P", title: "Points", sort: "points" },
  { text: "F", title: "Goals For", sort: "goalsFor" },
  { text: "A", title: "Goals Against", sort: "goalsAgainst" },
  { text: "GD", title: "Goal Difference", sort: "goalDifference" }
];

class Table extends Component {
  state = {
    currentSort: "default",
    sortPosition: ""
  };

  sortChange = types => {
    const { currentSort } = this.state;
    let nextSort;
    if (currentSort === "down") nextSort = "up";
    else if (currentSort === "up") nextSort = "default";
    else if (currentSort === "default") nextSort = "down";
    this.setState({
      currentSort: nextSort,
      sortPosition: types
    });
  };

  checkPosition = arg => {
    const { positions } = this.props;
    let className;
    positions.map(position =>
      position.position.map(pos =>
        pos === arg ? (className = position.class) : null
      )
    );
    return className;
  };

  render() {
    const { data } = this.props;
    console.log(data);
    const { currentSort, sortPosition } = this.state;
    const teams = [...data]
      .sort(sortTypes(sortPosition)[currentSort].fn)
      .map(team => (
        <tr>
          <td>
            <span
              className={`table__position table__position--${this.checkPosition(
                team.position
              )}`}
            >
              <span className="table__position-number">{team.position}</span>
            </span>
          </td>
          <td>{team.team.name} </td>
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

    return (
      <div>
        <h2 className="competition__title">{this.props.name}</h2>
        <table className="table">
          <thead>
            <tr>
              {tableHeader.map(t => (
                <td title={t.title}>{t.text}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="table__sort">
              {tableHeader.map(t => (
                <td>
                  <button
                    className="table__button"
                    title="Sort"
                    onClick={() => this.sortChange(t.sort)}
                  >
                    <span
                      className={`${sortTypes()[currentSort].class}`}
                    ></span>
                  </button>
                </td>
              ))}
            </tr>
            {teams}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
