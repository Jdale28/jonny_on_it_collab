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
  background-color: grey;
  font-family: 'montserat';
  text-transform: uppercase;
  a {
    text-decoration: none;
    padding-left: 2vw;
    color: white;
    &:hover {
      color: red;
    }
  }
  .left {
    width: 15vw;
  }
  .right {
    margin-right: 2vw;
    width: 25vw;
    display: flex;
    justify-content: space-around;
  }
`;

class NavBar extends Component {
    render() {
        return (
            <div>
            <NavBarStyles>
              {/* <div className="left">
                <Link to="/">Home</Link>
                <Link to="/aboutus">About Us</Link>
                <Link to="/howitworks">How It Works</Link>
                <Link to="/blog">Blog</Link>
              </div>
              <div className="right">
                <a href="/">Test</a>
                <a href="/">Test 2</a>
              </div> */}
            </NavBarStyles>
          </div>
        );
    }
}

export default NavBar;