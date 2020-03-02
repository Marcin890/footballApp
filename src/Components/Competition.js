import React, { Component } from "react";
import Table from "./Table";

const API = "http://api.football-data.org/v2/competitions/";
const APIKey = "25c6ef44df8547c99cd22e9b0d9f9841";

class Competition extends Component {
  state = {
    data: [],
    isLoaded: false,
    id: ""
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

  componentDidMount = () => {
    console.log("Mount");
    this.getData();
  };

  render() {
    const { data } = this.state;
    return <>{this.state.isLoaded ? <Table data={data} /> : "Wczytuje"}</>;
  }
}

export default Competition;
