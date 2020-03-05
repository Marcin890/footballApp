import React, { Component } from "react";
import Table from "./Table";

const API = "http://api.football-data.org/v2/competitions/";
const APIKey = "25c6ef44df8547c99cd22e9b0d9f9841";

class Competition extends Component {
  state = {
    data: [],
    isLoaded: false,
    id: "",
    standingType: "total"
  };

  getData = () => {
    const id = this.props.location.idComp;

    const apiUrl = API + id + "/standings";
    fetch(apiUrl, {
      headers: {
        "X-Auth-Token": APIKey
      }
    })
      .then(response => {
        if (response.ok) {
          // console.log(response);
          return response;
        }
        throw Error(response.status);
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          data,
          isLoaded: true,
          id
        });
      })
      .catch(error => console.log(error + " coś nie tak"));
  };

  componentDidMount() {
    console.log("Mount");
    this.getData();
  }

  changeStandingType = type => {
    this.setState({
      standingType: type
    });
  };

  render() {
    const { data } = this.state;
    let standings;
    console.log(data);
    if (this.state.isLoaded) {
      switch (this.state.standingType) {
        case "total":
          standings = data.standings[0].table;
          break;
        case "home":
          standings = data.standings[1].table;
          break;
        case "away":
          standings = data.standings[2].table;
          break;
        default:
          standings = data.standings[0].table;
      }
    }

    return (
      <>
        <button onClick={() => this.changeStandingType("total")}>Total</button>
        <button onClick={() => this.changeStandingType("home")}>Home</button>
        <button onClick={() => this.changeStandingType("away")}>Away</button>
        {this.state.isLoaded ? (
          <Table name={data.competition.name} data={standings} />
        ) : (
          "Wczytuje"
        )}
      </>
    );
  }
}

export default Competition;
