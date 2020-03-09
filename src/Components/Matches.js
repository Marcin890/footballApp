import React, { Component } from "react";
import MatchesTable from "./MatchesTable";

const API = "http://api.football-data.org/v2/matches";
// const API = "http://api.football-data.org/v2/matches?status=SCHEDULED";
const APIKey = "25c6ef44df8547c99cd22e9b0d9f9841";
class Matches extends Component {
  state = {
    matches: { id: "ll" },
    isLoaded: false,
    matchDay: ""
  };

  changeDate = e => {
    this.setState({
      matchDay: e.target.value
    });
  };

  getData = () => {
    const { matchDay } = this.state;
    const apiUrl =
      API + (matchDay ? `?dateFrom=${matchDay}&dateTo=${matchDay}` : "");
    fetch(apiUrl, {
      headers: {
        "X-Auth-Token": APIKey
      }
    })
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then(response => response.json())
      .then(matches => {
        console.log(matches);
        this.setState({
          matches,
          isLoaded: true
        });
      })
      .catch(error => console.log(error + "Something wrong"));
  };

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.matchDay !== this.state.matchDay) {
      this.getData();
    }
  }
  render() {
    const { matches } = this.state;
    console.log(this.matches);
    return (
      <>
        <input type="date" onChange={this.changeDate} />
        <h1>{this.state.matchDay}</h1>
        {this.state.isLoaded ? <MatchesTable matches={matches} /> : "Loading"}
      </>
    );
  }
}

export default Matches;
