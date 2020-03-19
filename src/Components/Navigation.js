import React, { Component } from "react";
import { NavLink } from "react-router-dom";

// List of competitions (free API): 2000,2001,2002,2003,2013,2014,2015,2016,2017,2018,2019,2021
const competitions = [
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
  competitionsList = competitions.map(comp => (
    <li className="nav__list-item" key={comp.id}>
      <img className="nav__flag" src={comp.flag} alt="" />

      <NavLink
        id={comp.id}
        to={{ pathname: comp.id, idComp: comp.id }}
        name={comp.id}
        activeClassName="nav__list-item--active"
        onClick={() => this.menuToggle()}
      >
        {comp.name}
      </NavLink>
    </li>
  ));

  menuToggle(e) {
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }

  render() {
    const { isExpanded } = this.state;
    return (
      <nav className="nav">
        <button className="nav__toggle" onClick={() => this.menuToggle()}>
          Menu
        </button>
        <ul
          className={`nav__list--collapsed ${
            isExpanded ? "nav__list--is-expanded" : ""
          }`}
        >
          {this.competitionsList}
        </ul>
      </nav>
    );
  }
}

export default Navigation;
