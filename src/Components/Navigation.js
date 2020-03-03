import React from "react";
import { NavLink } from "react-router-dom";

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
    id: "2013",
    name: "Italy",
    path: "/italy"
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

// 2000,2001,2002,2003,2013,2014,2015,2016,2017,2018,2019,2021

const Navigation = props => {
  const competitionsList = competitions.map(comp => (
    <li key={comp.id}>
      <NavLink id={comp.id} to={comp.id} name={comp.id}>
        {comp.name}
      </NavLink>
    </li>
  ));

  return (
    <>
      {console.log("navRender")}
      <ul>{competitionsList}</ul>
    </>
  );
};

export default Navigation;
