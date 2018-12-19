import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import {Link} from 'react-router-dom'
import { CreateAccountButton, SignInButton } from './ButtonStyle';

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const BannerImage = styled.div`
  width: 100%;
  height: 40vh;
  margin: 0 0 2em 0;
  background-image: url("https://i.imgur.com/Wrc9gsZ.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
`;

const ColumnsFlex = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: center;
  margin: 0vh 5vw;
`;

const MiddlePanel = styled.div`
  .middle-bar {
    border: 1px solid black;
    width: 1px;
    height: 37vh;
    opacity: 0.5;
    margin-bottom: 3vh;
  }
`;

const ColumnPanel = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1,
  h3 {
    text-align: left;
  }
  h3 {
    margin-bottom: 3vh;
  }
  p {
    font-size: 1.4em;
    margin: 0;
  }
  input {
    width: 25vw;
    height: 2.8em;
    margin-bottom: 1vh;
  }
`;

class SignIn extends Component {
  state = {
    user: {},
    newUser: {
      name: "",
      email: "",
      phonenumber: "",
      password: ""
    }
  };

  componentDidMount() {
    this.getAllEmployeeData();
  }

  getAllEmployeeData = () => {
    const url = `/api/users`;
    axios.get(url).then(res => {
      console.log(res);
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const payload = {
      name: this.state.newUser.name,
      email: this.state.newUser.email,
      phonenumber: this.state.newUser.phonenumber,
      password: this.state.newUser.password
    };
    axios.post(`/api/users/`, payload).then(res => {
      const newUser = res.data;
      const newStateNewUser = { ...this.state.user, newUser };
      this.setState({ user: newStateNewUser });
      this.props.history.push(`/UserAccountPage/${res.data.id}`);
    });
  };

  handleChange = event => {
    const updatedNewUser = { ...this.state.newUser };
    updatedNewUser[event.target.name] = event.target.value;
    this.setState({ newUser: updatedNewUser });
  };

  render() {
    return (
      <div>
        <BannerImage />
        <ColumnsFlex>
          <ColumnPanel>
            <div className="left-column">
              <h1>Sign In</h1>
              <h3>
                Sign in to book jobs, change billing information, or adjust
                property details. If you don't have an account, create one.
              </h3>
              <form>
                <p>
                  Email<span className="span">*</span>
                </p>
                <input type="email" />
                <p>
                  Password<span className="span">*</span>
                </p>
                <input type="password" />
                <button><Link to="/UserAccountPage/1">Sign In</Link></button>
              </form>
            </div>
          </ColumnPanel>
          <MiddlePanel>
            <div className="middle-bar" />
          </MiddlePanel>
          <ColumnPanel>
            <div className="right-column">
              <h1>Create an Account</h1>
              <h3>
                When you create a Jonny On It Account, you can schedule jobs,
                manage payment details, and share your favorite service
                professionals with other users.
              </h3>
              <form onSubmit={this.handleSubmit}>
                <p>
                  Full Name<span className="span">*</span>
                </p>
                <input type="text" onChange={this.handleChange} name="name" />
                <p>
                  Email<span className="span">*</span>
                </p>
                <input type="email" onChange={this.handleChange} name="email" />
                <p>
                  Phone Number<span className="span">*</span>
                </p>
                <input
                  type="text"
                  onChange={this.handleChange}
                  name="phonenumber"
                />
                <p>
                  Password<span className="span">*</span>
                </p>
                <input
                  type="password"
                  onChange={this.handleChange}
                  name="password"
                />
                <CreateAccountButton>Create Account</CreateAccountButton>
              </form>
            </div>
          </ColumnPanel>
        </ColumnsFlex>
      </div>
    );
  }
}

export default SignIn;
