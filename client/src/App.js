import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components//navbar/NavBar";
import { createGlobalStyle } from "styled-components";
import HowItWorks from "./components/navbar/HowItWorks";
import Blog from "./components/navbar/Blog";
import AboutUs from "./components/navbar/AboutUs";
import BookPayment from './components/book_a_job/BookPayment'
import BookTime from './components/book_a_job/BookTime';
import BookProperty from "./components/book_a_job/BookProperty";
import JobSelection from "./components/book_a_job/JobSelection";
import StepperforJob from "./components/book_a_job/StepperforJob";
import UserAccountPage from "./components/user_account/UserAccountPage";
import HomePageNotLoggedIn from "./components/HomePageNotLoggedIn"
import Footer from "./components/footer/Footer"
import OurGuarantee from "./components/footer/OurGuarantee"
import UserTerms from "./components/footer/UserTerms"
import ProviderTerms from "./components/footer/ProviderTerms"
import UserPayment from "./components/user_account/UserPayment";
import ContactUs from "./components/footer/ContactUs"
import SignIn from "./components/SignIn";
import FAQ from "./components/footer/FAQ";
import UserProperties from "./components/user_account/UserProperties";

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
            <Route exact path="/contactus" component={ContactUs} />
            <Route exact path="/providerterms" component={ProviderTerms} />
            <Route exact path="/userterms" component={UserTerms} />
            <Route exact path="/ourguarantee" component={OurGuarantee} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/howitworks" component={HowItWorks} />
            <Route exact path="/bookpayment" component={BookPayment} />
            <Route exact path="/booktime" component={BookTime} />
            <Route exact path="/bookproperty" component={BookProperty} />
            <Route exact path="/bookajob" component={JobSelection} />
            <Route exact path="/stepperforjob" component={StepperforJob} />
            <Route exact path="/faq" component={FAQ} />
            <Route exact path="/useraccountpage/:id" component={UserAccountPage} />
            {/* <Route exact path="/useraccountpage/:id/payments" component={UserPayment}/> */}
            {/* <Route exact path="/useraccountpage/:id/properties" component={UserProperties}/> */}
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
