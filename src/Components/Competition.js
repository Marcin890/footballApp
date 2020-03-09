import React, { Component } from "react";
import Table from "./Table";
import Tabs from "./Tabs";

const API = "http://api.football-data.org/v2/competitions/";
const APIKey = "25c6ef44df8547c99cd22e9b0d9f9841";

class Competition extends Component {
  state = {
    data: [],
    isLoaded: false,
    standingType: "total"
  };

  getData = () => {
    const id = this.props.match.params.id;
    const apiUrl = API + id + "/standings";
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
      .then(data => {
        this.setState({
          data,
          isLoaded: true
        });
      })
      .catch(error => console.log(error + "Something wrong"));
  };

  componentDidMount() {
    this.getData();
  }

  // componentDidUpdate(prevProps) {
  //   console.log("update");
  //   if (prevProps.match.params.id !== this.props.match.params.id) {
  //     this.getData();
  //   }
  // }

  changeTableType = type => {
    this.setState({
      standingType: type
    });
  };

  render() {
    const { data } = this.state;
    let standings;
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
      <div className="competition">
        <Tabs click={this.changeTableType} />

        {this.state.isLoaded ? (
          <Table name={data.competition.name} data={standings} />
        ) : (
          "Loading"
        )}
      </div>
    );
  }
}

export default Competition;
