import React from "react";
import Position from "./Position";
const Table = props => {
  return (
    <div>
      <h1>{props.data.competition.name}</h1>
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
        <Position data={props.data.standings[0].table} />
      </table>
    </div>
  );
};

export default Table;
