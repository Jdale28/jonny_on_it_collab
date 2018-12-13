import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components//navbar/NavBar";
import { createGlobalStyle } from "styled-components";
import HowItWorks from "./components/navbar/HowItWorks";
import Blog from "./components/navbar/Blog";
import AboutUs from "./components/navbar/AboutUs";
import UserNav from "./components/UserNav";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Hello from Home Page</h1>
          <NavBar />
          <UserNav/>
          <Switch>
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/howitworks" component={HowItWorks} />
            <Route path="/"/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
