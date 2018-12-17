import React, { Component } from "react";
import styled from "styled-components";

const BannerImage = styled.div`
  width: 100%;
  height: 40vh;
  /* margin-bottom: 3vh; */
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
  input {
    width: 25vw;
  }
  button {
      margin-top: 3vh;
      margin-left: 4vh;
      width: 20vw;
  }
`;
// class User(models.Model):
//     name = models.CharField(max_length=255)
//     email = models.CharField(max_length=255)
//     phonenumber = models.CharField(max_length=255)
//     password = models.CharField(max_length=255, default='password')

class SignIn extends Component {
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
                <button>Sign In</button>
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
              <form>
                <p>
                  Full Name<span className="span">*</span>
                </p>
                <input type="text" />
                <p>
                  Email<span className="span">*</span>
                </p>
                <input type="email" />
                <p>
                  Phone Number<span className="span">*</span>
                </p>
                <input type="text" />
                <p>
                  Password<span className="span">*</span>
                </p>
                <input type="password" />
                <button>Create Account</button>
              </form>
            </div>
          </ColumnPanel>
        </ColumnsFlex>
      </div>
    );
  }
}

export default SignIn;
