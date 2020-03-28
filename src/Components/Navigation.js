import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

// List of competitionsData (free API): 2000,2001,2002,2003,2013,2014,2015,2016,2017,2018,2019,2021
const competitionsData = [
  {
    id: "2021",
    name: "England",
    path: "/england",
    flag: "/england.jpg"
  },
  {
    id: "2003",
    name: "Netherlands",
    path: "/netherlands",
    flag: "/netherlands.png"
  },
  {
    id: "2014",
    name: "Spain",
    path: "/spain",
    flag: "/spain.png"
  },
  {
    id: "2002",
    name: "Germany",
    path: "/germany",
    flag: "/germany.png"
  },
  {
    id: "2015",
    name: "France",
    path: "/france",
    flag: "/france.png"
  },
  {
    id: "2017",
    name: "Portugal",
    path: "/portugal",
    flag: "/portugal.png"
  }
];

class Navigation extends Component {
  state = {
    isExpanded: false
  };
  competitionsList = competitionsData.map(competition => (
    <li className="nav__list-item" key={competition.id}>
      <div className="nav__flag-wrapper">
        <img className="nav__flag" src={competition.flag} alt="" />
      </div>
      <NavLink
        activeClassName="activevvvv"
        id={competition.id}
        to={{ pathname: competition.id, idComp: competition.id }}
        name={competition.id}
        onClick={() => this.menuClose()}
      >
        {competition.name}
      </NavLink>
    </li>
  ));

  menuToggle(e) {
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }

  menuClose(e) {
    this.setState({
      isExpanded: false
    });
  }

  render() {
    const { isExpanded } = this.state;
    return (
      <nav className={`nav ${isExpanded ? "nav__mobile" : ""}`}>
        <button className="nav__toggle" onClick={() => this.menuToggle()}>
          {!isExpanded ? (
            <img className="nav__toggle-image" src="menu-icon.svg" alt="" />
          ) : (
            <img
              className="nav__toggle-image"
              src="menu-icon-closed.svg"
              alt=""
            />
          )}
        </button>
        <ul
          className={`nav__list--collapsed ${
            isExpanded ? "nav__list--is-expanded" : ""
          }`}
        >
          <li className="nav__list-item">
            <NavLink
              id="home"
              to="/"
              name="home"
              onClick={() => this.menuClose()}
            >
              Home
            </NavLink>
          </li>
          {this.competitionsList}
        </ul>
      </nav>
    );
  }
}

export default Navigation;
