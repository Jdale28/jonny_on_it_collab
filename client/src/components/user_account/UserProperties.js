import React, { Component } from "react";
// import UserNavBar from "./UserNavBar";
import styled from "styled-components";
import axios from "axios";
import Geosuggest from "react-geosuggest";


const Container = styled.div`
  height: 70vh;
  width: 100vw;
`;

const PageFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

// const PropertyListFlex = styled.div`
//   display: flex;
//   justify-content: space-between;
//   font-size: 2rem;
// `;

const PropertyFlex = styled.div`
  width: 75vw;
  height: 70vh;
  padding-right: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  h1 {
    text-align: center;
  }
  .OneProperty {
    margin-left: 5vw;
  }
  input {
      width: 20vw;
      text-align: center;
  }
`;

const FormAndGeoBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 80vw;
  height: 35vh;
  font-size: 1.25rem;
  button {
      margin-top: 2vh;
      text-align: center;
      padding: 10px;
      border-radius: 6px;
      font-size: 1.25rem;
      &:hover {
        background-color: rgba(19,212,171,1);
        color: white;
    }
  }
  .addProperty {
      text-align: center;
  }
`;

const GeoBox = styled.div`
  display: flex;
  margin-top: 3vh;
  flex-direction: column;
  align-items: center;
  width: 35vw;
  h4 {
      margin-bottom: 3vh;
      text-align: center;
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
    },
    geoValue: ""
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const id = this.props.match.params.id;
    axios.get(`/api/users/${id}`).then(res => {
      this.setState({ user: res.data, properties: res.data.properties });
    });
  };

  handleChange = event => {
    const updatedNewProperty = { ...this.state.newProperty };
    updatedNewProperty[event.target.name] = event.target.value;
    this.setState({ newProperty: updatedNewProperty });
  };

  handleSubmit = event => {
    event.preventDefault();
    const payload = {
      streetAddress: this.state.newProperty.streetAddress,
      city: this.state.newProperty.city,
      state: this.state.newProperty.state,
      zipcode: this.state.newProperty.zipcode,
      user: this.state.user.id
    };
    // if this.state.googleaddress != null
    console.log(payload);
    axios.post(`/api/properties/`, payload).then(res => {
      this.getData();
    });
  };

  onSuggestSelect = () => {
    const geoValue = document.querySelector(".geosuggest__input").value;
    this.setState({ geoValue: geoValue });
    const geoArr = this.state.geoValue.split(", ");
    let streetAddress = document.querySelector('.streetAddressInput').value = geoArr[0]
    let city = document.querySelector('.cityInput').value = geoArr[1]
    let state = document.querySelector('.stateInput').value = geoArr[2]
    const newState = { ...this.state.newProperty, streetAddress, city, state }
    this.setState({ newProperty: newState })
  };

  render() {
    return (
      <Container>
        <PageFlex>
          <PropertyFlex>
            <h1>Your List of Properties Below</h1>
            {/* <PropertyListFlex> */}
           
            {this.state.properties.map((property, i) => (
               <div className='property'>
               <div className='photo'>dkdkdk</div>
              <div key={i} className="OneProperty">
                <div>{property.streetAddress}</div>
                <div>
                  {property.city}, {property.state} {property.zipcode}
                </div>
              </div>
              </div>
            ))}
            {/* </PropertyListFlex> */}
           
            <FormAndGeoBox>
              
                
            <form onSubmit={this.handleSubmit}>
            <p>
            Street Address<span className="span">*</span>
            </p>
            <input
            class="streetAddressInput"
            type="text"
            onChange={this.handleChange}
            name="streetAddress"
            />
            <p>
            City<span className="span">*</span>
            </p>
            <input class="cityInput" type="text" onChange={this.handleChange} name="city" />
            <p>
            State<span className="span">*</span>
            </p>
            <input class="stateInput" type="text" onChange={this.handleChange} name="state" />
            <p>
            Zip Code<span className="span">*</span>
            </p>
            <input placeholder="Authenticate with zipcode" type="text" onChange={this.handleChange} name="zipcode" />
            <br />
            <div className="addProperty">
                <button type="submit">Add New Property</button>
            </div>
            </form>
            
            {/* <h1>My Google Map</h1> */}
            <GeoBox><h4>Find your USA-based address below and populate the form automatically!</h4>
            <Geosuggest onSuggestSelect={this.onSuggestSelect} /></GeoBox></FormAndGeoBox>
          </PropertyFlex>
        </PageFlex>
      </Container>
    );
  }
}

export default UserProperties;
