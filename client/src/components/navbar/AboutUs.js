import React, { Component } from "react";
import styled from "styled-components";

const BannerImage = styled.div`
  width: 100%;
  height: 30vh;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3vh;
`;
const HowImage = styled.div`
  width: 100%;
  height: 70vh;
  border: 1px solid black;
  margin-top: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5vh;
`;
const IconBox = styled.div`
  width: 100%;
  height: 40vh;
  border: 1px solid black;
  margin-top: 5vh;
`;
const KeyFeatures = styled.div`
  width: 100%;
  height: 40vh;
  border: 1px solid black;
`;
const HowCounter = styled.div`
  width: 100%;
  height: 30vh;
  border: 1px solid black;
  .HowCounterHeader {
    text-align: center;
    margin-bottom: 1vh;
  }
  .HowCounterTagline {
    text-align: center;
  }
  .BottomMessage {
      margin-bottom: 2vh;
  }
  .HowCounterBox {
    display: flex;
    border: 1px solid black;
    height: 15vh;
    justify-content: space-between;
    margin: 0 10vw;
  }
  .NumberContainer {
    display: flex;
    width: 25vw;
    align-items: center;
  }
  .HowCounterNumber {
      font-size: 3rem;
      margin-right: 3vw;
  }
  .HowCounterMessage {
      font-size: .75rem;
  }
`;

const Center = styled.div`
  text-align: center;
`

class AboutUs extends Component {
  render() {
    return (
      <div>
        <BannerImage>Lady in Suit Image</BannerImage>
        <HowCounter>
          <h1 className="HowCounterHeader">HOW IT WORKS</h1>
          <p className="HowCounterTagline">
            Connect homeowners and realtors with quality service providers
          </p>
          <p className="HowCounterTagline BottomMessage">Easy as 1 2 3</p>
          <div className="HowCounterBox">
            <div className="NumberContainer">
              <div className="HowCounterNumber">1</div>
              <div className="HowCounterMessage">
                Let us know what you need and we can help you ocnnect to a
                licensed professional in your area
              </div>
            </div>
            <div className="NumberContainer">
              <div className="HowCounterNumber">2</div>
              <div className="HowCounterMessage">
                You'll be able to select from a list of available professionals
                with reviews so you know you are getting the right person for
                the job
              </div>
            </div>
            <div className="NumberContainer">
              <div className="HowCounterNumber">3</div>
              <div className="HowCounterMessage">
                Stay in touch with your professional throughout the process to
                insure timely completion
              </div>
            </div>
          </div>
        </HowCounter>
        <Center>See for yourself</Center>
        <HowImage>How Flow Diagram</HowImage>
        <Center>Book Now Button</Center>
        <IconBox />
        <KeyFeatures />
      </div>
    );
  }
}

export default AboutUs;
