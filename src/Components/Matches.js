import React, { Component } from "react";
import MatchesTable from "./MatchesTable";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const API = "https://api.football-data.org/v2/matches";
// const API = "http://api.football-data.org/v2/matches?status=SCHEDULED";
const APIKey = "25c6ef44df8547c99cd22e9b0d9f9841";

class Matches extends Component {
  state = {
    matches: {},
    isLoaded: false,
    startDate: new Date(),
    viewport: ""
  };

  desktopViewport = window.matchMedia("screen and (min-width:640px)");

  changeVieport = () => {
    this.setState({
      viewport: this.desktopViewport.matches
    });
  };

  getData = () => {
    const { startDate } = this.state;
    const date = startDate.toISOString().slice(0, 10);
    const apiUrl = API + (date ? `?dateFrom=${date}&dateTo=${date}` : "");
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
    if (prevState.startDate !== this.state.startDate) {
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

    dateString.split("").reverse();
    return dateString;
  };

  addToFavorite = id => {
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

  changeDate = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    this.desktopViewport.addListener(this.changeVieport);
    const { matches } = this.state;

    return (
      <>
        <h1>
          <DatePicker
            className="myDatePicker"
            selected={this.state.startDate}
            onChange={this.changeDate}
            monthsShown={this.desktopViewport.matches ? 2 : 1}
          />
        </h1>

        {this.state.isLoaded ? (
          matches.matches.length !== 0 ? (
            <MatchesTable
              matches={matches}
              addToFavorite={this.addToFavorite}
            />
          ) : (
            <>
              <h2>There are no matches on this day. May choose another day</h2>
              <img className="match__no-match" src="no_matches.svg" alt="" />
            </>
          )
        ) : (
          "Loading"
        )}
      </>
    );
  }
}

export default Matches;
