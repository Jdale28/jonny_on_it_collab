import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBarStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10vh;
  font-size: 2rem;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  img {
    height: 7vh;
    width: auto;
  }
  a {
    text-decoration: none;
    padding-left: 2vw;
    color: rgba(112, 112, 112, 1);
    &:hover {
      color: rgba(255,0,0,1);
      text-decoration: none;
    }
  }
  .left {
    width: 55vw;
  }
  .right {
    margin-right: 2vw;
    width: 45vw;
    display: flex;
    justify-content: space-around;
  }
  .blog {
    margin-right: 16vw;
  }
`;

const BigButton = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 3vw;
  padding-left: 1vw;
  position: absolute;
  height: 13vh;
  right: 8vw;
  top: 0vw;
  background-color: rgba(13,151,255,1);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  a {
    text-decoration: none;
    color: rgba(255,255,255,1);
    &:hover {
      color: rgba(255,0,0,1);
      text-decoration: none;
    }
  }
`

class NavBar extends Component {
    render() {
        return (
            <div>
            <NavBarStyles>
              <div className="left">
              <Link to="/"><img src="https://i.imgur.com/rU0JNDM.png" alt="JOI Logo"/></Link>
              </div>
              <div className="right">
                <Link to="/aboutus">About Us</Link>
                <Link to="/howitworks">How It Works</Link>
                <Link className="blog" to="/blog">Blog</Link>
                <BigButton>
                    <Link to="/bookajob">BOOK NOW</Link>
                </BigButton>
                <Link to="/signin">Sign In</Link>
              </div>
            </NavBarStyles>
          </div>
        );
    }
}

export default NavBar;