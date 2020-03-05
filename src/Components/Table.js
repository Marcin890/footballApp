import React, { Component } from "react";
import Position from "./Position";

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

const aaa = ss => {
  return ss;
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
    console.log(aaa(this.state.sortPosition));

    const { data } = this.props;
    console.log(data);
    const { currentSort } = this.state;
    const teams = [...data]
      .sort(sortTypes(this.state.sortPosition)[currentSort].fn)
      .map(team => (
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

    return (
      <div>
        <h1>{this.props.name}</h1>
        <table>
          <thead>
            <tr>
              <td>Position</td>
              <td>Team</td>
              <td>Played Games</td>
              <td>Won</td>
              <td>Draw</td>
              <td>Lost</td>
              <td>Points</td>
              <td>Goals For</td>
              <td>Goals Against</td>
              <td>Goal Difference</td>
            </tr>
          </thead>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button onClick={() => this.onSortChange("draw")}>sort</button>
            </td>
            <td>
              <button onClick={() => this.onSortChange("lost")}>sort</button>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          {/* <Position data={this.props.data} /> */}
          <tbody>{teams}</tbody>
        </table>
      </div>
    );
  }
}

export default Table;
