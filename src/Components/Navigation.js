import React from "react";
import { NavLink } from "react-router-dom";

// List of competitions (free API): 2000,2001,2002,2003,2013,2014,2015,2016,2017,2018,2019,2021
const competitions = [
  {
    id: "2021",
    name: "England",
    path: "/england"
  },
  {
    id: "2003",
    name: "Netherlands",
    path: "/netherlands"
  },
  {
    id: "2014",
    name: "Spain",
    path: "/spain"
  },
  {
    id: "2002",
    name: "Germany",
    path: "/germany"
  },
  {
    id: "2015",
    name: "France",
    path: "/france"
  },
  {
    id: "2017",
    name: "Portugal",
    path: "/portugal"
  }
];

const Navigation = props => {
  const competitionsList = competitions.map(comp => (
    <li className="nav__list-item" key={comp.id}>
      <NavLink
        id={comp.id}
        to={{ pathname: comp.id, idComp: comp.id }}
        name={comp.id}
        activeClassName="nav__list-item--active"
      >
        {comp.name}
      </NavLink>
    </li>
  ));

  return (
    <>
      <nav className="nav">
        <ul className="nav__list">{competitionsList}</ul>
      </nav>
    </>
  );
};

export default Navigation;
