import React, { Component } from "react";
import MatchesTable from "./MatchesTable";

const API = "http://api.football-data.org/v2/matches";
const APIKey = "25c6ef44df8547c99cd22e9b0d9f9841";
class Matches extends Component {
  state = {
    matches: { id: "ll" },
    isLoaded: false
  };

  getData = () => {
    const apiUrl = API;
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

  render() {
    const { matches } = this.state;
    console.log(this.matches);
    return (
      <>
        <h1>Today's matches</h1>
        {this.state.isLoaded ? <MatchesTable matches={matches} /> : "Loading"}
      </>
    );
  }
}

export default Matches;
