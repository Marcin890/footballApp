import React, { Component } from "react";
import Table from "./Table";
import Tabs from "./Tabs";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const API = "https://api.football-data.org/v2/competitions/";
const APIKey = "25c6ef44df8547c99cd22e9b0d9f9841";

const positions = {
  2021: [
    { position: [1, 2, 3, 4], class: "champions" },
    { position: [5], class: "europa" },
    { position: [18, 19, 20], class: "relegation" }
  ],
  2003: [
    { position: [1], class: "champions" },
    { position: [2], class: "champions-qualifications" },
    { position: [3], class: "europa" },
    { position: [4, 5, 6, 7], class: "europa-qualifications" },
    { position: [16], class: "playoffs" },
    { position: [17, 18], class: "relegation" }
  ],
  2014: [
    { position: [1, 2, 3, 4], class: "champions" },
    { position: [5], class: "europa" },
    { position: [6], class: "europa-qualifications" },
    { position: [18, 19, 20], class: "relegation" }
  ],
  2002: [
    { position: [1, 2, 3, 4], class: "champions" },
    { position: [5], class: "europa" },
    { position: [6], class: "europa-qualifications" },
    { position: [18, 19, 20], class: "relegation" }
  ],
  2015: [
    { position: [1, 2, 3, 4], class: "champions" },
    { position: [18, 19, 20], class: "europa" },
    { position: [16], class: "playoffs" },
    { position: [17, 18], class: "relegation" }
  ],
  2017: [
    { position: [1], class: "champions" },
    { position: [2], class: "champions-qualifications" },
    { position: [3, 4], class: "europa" },
    { position: [17, 18], class: "relegation" }
  ]
};

class Competition extends Component {
  state = {
    data: [],
    isLoaded: false,
    standingType: "total",
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
      .catch(error => console.log(error + "Something wrong"));
  };

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.id !== this.state.id) {
      this.getData();
    }
  }

  changeTableType = type => {
    this.setState({
      standingType: type
    });
  };

  getStandingType = () => {
    const { data, standingType, isLoaded } = this.state;
    let standings;
    if (isLoaded) {
      switch (standingType) {
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
      return standings;
    }
  };

  render() {
    const { data, isLoaded } = this.state;
    // console.log(data);
    const standingsType = this.getStandingType();
    return (
      <div className="competition">
        <Tabs click={this.changeTableType} />

        {isLoaded ? (
          <TransitionGroup>
            <CSSTransition
              appear={true}
              timeout={600}
              classNames="fade"
              key={data.competition.id}
            >
              <Table
                name={data.competition.name}
                data={standingsType}
                positions={positions[data.competition.id]}
              />
            </CSSTransition>
          </TransitionGroup>
        ) : (
          "Loading"
        )}
      </div>
    );
  }
}

export default Competition;
