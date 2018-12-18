import React, { Component } from "react";
import UserNavBar from "./UserNavBar";
import styled from "styled-components";
import axios from "axios";
import Geosuggest from "react-geosuggest";

const Container = styled.div`
  border: none;
  height: 100vh;
  width: 100vw;
`;
const Name = styled.div`
  color: rgba(14, 151, 255, 1);
  font-size: 35px;
  text-align: center;
  font-weight: bold;
  font-family: "athletics", arial, sans-serif;
`;

const PageFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavBar = styled.div`
  border: 1px solid black;
`;

const PropertyFlex = styled.div`
  border: 1px solid black;
  width: 75vw;
  margin-right: 3vw;
  margin-top: 3vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  h1 {
    text-align: center;
  }
  .OneProperty {
    margin-left: 5vw;
  }
`;

class UserProperties extends Component {
  state = {
    user: {},
    properties: [],
    newProperty: {
      streetAddress: "",
      city: "",
      state: "",
      zipcode: "",
      user: ""
    }
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`/api/users/${id}`).then(res => {
      console.log(res.data);
      this.setState({ user: res.data, properties: res.data.properties });
      //   const expandState = res.data;
      //   localStorage.setItem("user", JSON.stringify(expandState));
    });
  }
  handleChange = event => {
    const updatedNewProperty = { ...this.state.newProperty };
    updatedNewProperty[event.target.name] = event.target.value;
    this.setState({ newProperty: updatedNewProperty });
  };

  handleSubmit = event => {
    event.preventDefault();
    const payload = {
      streetAdress: this.state.newProperty.streetAddress,
      city: this.state.newProperty.city,
      state: this.state.newProperty.state,
      zipcode: this.state.newProperty.zipcode,
      user: this.state.user.name
    };
    console.log(payload);
    axios.post(`/api/properties`, payload).then(res => {
      console.log(res);
      const newProperty = res.data;
      const newStateNewProperty = { ...this.state.properties, newProperty };
      this.setState({ properties: newStateNewProperty });
      this.props.history.push(`/UserAccountPage/${res.data.id}/properties`);
    });
  };

  render() {
    return (
      <Container>
        <Name> HELLO, {this.state.user.name} !</Name>
        <PageFlex>
          <NavBar>
            <UserNavBar {...this.state} />
          </NavBar>
          <PropertyFlex>
            <h1>Your List of Properties Below</h1>
            {this.state.properties.map(property => (
              <div className="OneProperty">
                <div>{property.streetAddress}</div>
                <div>
                  {property.city}, {property.state} {property.zipcode}
                </div>
              </div>
            ))}

            <form onSubmit={this.handleSubmit}>
              <p>
                Street Address<span className="span">*</span>
              </p>
              <input
                type="text"
                onChange={this.handleChange}
                name="streetAddress"
              />
              <p>
                City<span className="span">*</span>
              </p>
              <input type="text" onChange={this.handleChange} name="city"/>
              <p>
                State<span className="span">*</span>
              </p>
              <input type="text" onChange={this.handleChange} name="state" />
              <p>
                Zip Code<span className="span">*</span>
              </p>
              <input type="text" onChange={this.handleChange} name="zipcode" />
              <button type="submit">Add New Property</button>
            </form>

            {/* <h1>My Google Map</h1>
            <Geosuggest /> */}
          </PropertyFlex>
        </PageFlex>
      </Container>
    );
  }
}

export default UserProperties;
