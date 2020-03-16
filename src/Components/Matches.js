import React, { Component } from "react";
import MatchesTable from "./MatchesTable";

const API = "http://api.football-data.org/v2/matches";
// const API = "http://api.football-data.org/v2/matches?status=SCHEDULED";
const APIKey = "25c6ef44df8547c99cd22e9b0d9f9841";
class Matches extends Component {
  state = {
    matches: {},
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

  getToday = () => {
    const date = new Date();
    const dateString = new Date(
      date.getTime() - date.getTimezoneOffset() * 60000
    )
      .toISOString()
      .split("T")[0];
    return dateString;
  };

  addToFavorite = id => {
    console.log(id);
    const matchesList = Array.from(this.state.matches.matches);
    matchesList.forEach(match => {
      if (match.id === id) {
        match.favorite = !match.favorite;
      }
    });

    const matches = this.state.matches;
    matches.matches = matchesList;
    this.setState({
      matches
    });
  };

  render() {
    const { matches } = this.state;

    return (
      <>
        <form action="">
          <label htmlFor="matchDay">Choose Match Day</label>
          <input
            type="date"
            onChange={this.changeDate}
            defaultValue={this.getToday()}
            id="matchDay"
          />
        </form>

        <h1>
          Match list:{" "}
          {this.state.matchDay ? this.state.matchDay : this.getToday()}
        </h1>
        {this.state.isLoaded ? (
          matches.matches.length !== 0 ? (
            <MatchesTable
              matches={matches}
              addToFavorite={this.addToFavorite}
            />
          ) : (
            <h2>No Matches</h2>
          )
        ) : (
          "Loading"
        )}
      </>
    );
  }
}

export default Matches;
