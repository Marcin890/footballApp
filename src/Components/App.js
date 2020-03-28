import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";
import Page from "./Page";
import Footer from "./Footer";
import "../Styles/App.scss";

// Api: https://www.football-data.org/documentation/quickstart

class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <div className="app">
          <header className="header">{<Header />}</header>
          <main>
            <aside>
              <Navigation />
            </aside>
            <section className="page">
              <Page />
            </section>
          </main>
          <footer className="footer">{<Footer />}</footer>
        </div>
      </Router>
    );
  }
}

export default App;
