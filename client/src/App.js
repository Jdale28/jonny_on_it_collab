import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components//navbar/NavBar";
import { createGlobalStyle } from "styled-components";
import HowItWorks from "./components/navbar/HowItWorks";
import Blog from "./components/navbar/Blog";
import AboutUs from "./components/navbar/AboutUs";
import JobSelection from "./components/book_a_job/JobSelection"
import StepperforJob from "./components/book_a_job/StepperforJob"
import UserAccountPage from "./components/UserAccountPage";
import HomePageNotLoggedIn from "./components/HomePageNotLoggedIn"
import Footer from "./components/footer/Footer"
import OurGuarantee from "./components/footer/OurGuarantee"
import UserTerms from "./components/footer/UserTerms"
import ProviderTerms from "./components/footer/ProviderTerms"
import SignIn from "./components/SignIn"
const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'athletics', arial, sans-serif;
  }
`;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Global />
          <NavBar />
          <Switch>
            <Route exact path="/providerterms" component={ProviderTerms} />
            <Route exact path="/userterms" component={UserTerms} />
            <Route exact path="/ourguarantee" component={OurGuarantee} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/howitworks" component={HowItWorks} />
            <Route exact path="/bookajob" component={JobSelection} />
            <Route exact path="/stepperforjob" component={StepperforJob} />
            <Route exact path="/useraccountpage/:id" component={UserAccountPage} />
            <Route exact path="/signin" component={SignIn} />
            <Route path="/" component={HomePageNotLoggedIn} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
