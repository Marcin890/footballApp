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

class Table extends Component {
  state = {
    currentSort: "default",
    sortPosition: "ppp"
  };

  onSortChange = typs => {
    console.log("click");
    const { currentSort } = this.state;
    let nextSort;
    if (currentSort === "down") nextSort = "up";
    else if (currentSort === "up") nextSort = "default";
    else if (currentSort === "default") nextSort = "down";
    this.setState({
      currentSort: nextSort,
      sortPosition: typs
    });
  };

  render() {
    const { data } = this.props;
    console.log(data);
    const { currentSort } = this.state;
    const teams = [...data]
      .sort(sortTypes(this.state.sortPosition)[currentSort].fn)
      .map(team => (
        <tr>
          <td>{team.position}</td>
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
        <h1 className="competition__title">{this.props.name}</h1>
        <table>
          <thead>
            <tr>
              <td>Position</td>
              <td>Team Name</td>
              <td>P</td>
              <td>W</td>
              <td>D</td>
              <td>L</td>
              <td>P</td>
              <td>F</td>
              <td>A</td>
              <td>GD</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <button onClick={() => this.onSortChange("playedGames")}>
                  <span className={`${sortTypes()[currentSort].class}`}></span>
                </button>
              </td>
              <td></td>
              <td>
                <button onClick={() => this.onSortChange("playedGames")}>
                  <span className={`${sortTypes()[currentSort].class}`}></span>
                </button>
              </td>
              <td>
                <button onClick={() => this.onSortChange("won")}>
                  <span className={`${sortTypes()[currentSort].class}`}></span>
                </button>
              </td>
              <td>
                <button onClick={() => this.onSortChange("draw")}>
                  <span className={`${sortTypes()[currentSort].class}`}></span>
                </button>
              </td>
              <td>
                <button onClick={() => this.onSortChange("lost")}>
                  <span className={`${sortTypes()[currentSort].class}`}></span>
                </button>
              </td>
              <td>
                <button onClick={() => this.onSortChange("points")}>
                  <span className={`${sortTypes()[currentSort].class}`}></span>
                </button>
              </td>
              <td>
                <button onClick={() => this.onSortChange("goalsFor")}>
                  <span className={`${sortTypes()[currentSort].class}`}></span>
                </button>
              </td>
              <td>
                <button onClick={() => this.onSortChange("goalsAgainst")}>
                  <span className={`${sortTypes()[currentSort].class}`}></span>
                </button>
              </td>
              <td>
                <button onClick={() => this.onSortChange("goalDifference")}>
                  <span className={`${sortTypes()[currentSort].class}`}></span>
                </button>
              </td>
            </tr>

            {teams}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
