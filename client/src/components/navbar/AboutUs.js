import React, { Component } from "react";
import styled from "styled-components";
import { ContactUsButton } from "../ButtonStyle";

const PageStyle = styled.div`
  * {
    margin: 0;
  }
  color: rgba(13, 151, 255, 1);
  h1 {
    font-size: 44px;
    margin-bottom: 2vh;
  }
  .About {
    margin-top: 5vh;
    margin-left: 5vh;
  }
  p {
    color: rgba(112, 112, 112, 1);
    font-size: 22px;
  }
  .OurTeam {
    margin-top: 5vh;
  }
`;

const Center = styled.div`
  text-align: center;
  font-size: 44px;
  font-weight: bold;
`;

const AlignCenter = styled.div`
  text-align: center;
  .contactButton {
    height: 2vw;
  }
`

const AboutHeaders = styled.div`
  width: 94%;
  height: 30vh;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin: 3vh 5vh;
  .column {
    width: 45vw;
    height: 25vh;
    margin-right: 3vh;
  }
`;

const ImagesRowOne = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  img {
    height: 200px;
    width: auto;
    margin: 0 1vw;
  }
`;

const ChristianImg = styled.div`
  height: 200px;
  width: 300px;
  margin: 0 1vw;
  border: 1px solid black;
  background-image: url("https://i.imgur.com/xNkuCIV.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;
  color: blue;
  .form-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1vh;
    width: 100%;
    height: 5vh;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
const ChrisImg = styled(ChristianImg)`
  width: 256px;
  background-image: url("https://i.imgur.com/EOoNfYC.jpg");
  background-size: 100%;
`;
const LeahImg = styled(ChristianImg)`
  width: 256px;
  background-image: url("https://i.imgur.com/xfmc5co.jpg");
  background-size: 100%;
`;
const LoriImg = styled(ChristianImg)`
  width: 245px;
  height: 191px;
  background-image: url("https://i.imgur.com/clUjSm4.jpg");
  background-size: 100%;
`;
const LucyImg = styled(ChristianImg)`
  width: 258px;
  background-image: url("https://i.imgur.com/8NlN31B.jpg");
  background-size: 100%;
`;

class AboutUs extends Component {
  render() {
    return (
      <PageStyle>
        <h1 className="About">About Us</h1>
        <p className="About">
          Jonny On It is a mobile app that saves homeowners time and money by
          instantly matching customers with home service providers like
          plumbers, HVAC technicians, electricians, locksmiths, and appliance
          repairmen. The Jonny On It app allows users to find service providers,
          schedule jobs, pay for services, and rate venders - all in real time.
        </p>
        <br />
        <p className="About">
          Founded in 2016, Jonny On It is proudly based in Atlanta, Georgia.
        </p>
        <AboutHeaders>
          <div className="column">
            <h1>Our Mission</h1>
            <p>
              To improve our customers lives by empowering an enjoyable home
              services experience.
            </p>
          </div>
          <div className="column">
            <h1>Our Vision</h1>
            <p>
              We seek to create a marketplace that enables providers spend a
              higher percentage of their time earning revenue and empowers
              customers with consistently favorable home services experiences.
            </p>
          </div>
        </AboutHeaders>
          <AlignCenter>
            <ContactUsButton className="contactButton" type="submit">Contact Us</ContactUsButton>
          </AlignCenter>
        <Center className="OurTeam">Our Team</Center>
        <ImagesRowOne>
          <ChristianImg>
            <div className="form-container">
              <h3>Christian Ries</h3>
              <h4>Founder & CEO</h4>
            </div>
          </ChristianImg>
          <ChrisImg>
            <div className="form-container">
              <h3>Chris Coakley</h3>
              <h4>Co-Founder & President</h4>
            </div>
          </ChrisImg>
        </ImagesRowOne>
        <ImagesRowOne>
          <LeahImg>
            <div className="form-container">
              <h3>Leah Pierce</h3>
              <h4>Campaign Manager</h4>
            </div>
          </LeahImg>
          <LoriImg>
            <div className="form-container">
              <h3>Lori Tillery</h3>
              <h4>Chief Technical Officer</h4>
            </div>
          </LoriImg>
          <LucyImg>
            <div className="form-container">
              <h3>Lucy Arnold</h3>
              <h4>Director of Product Management</h4>
            </div>
          </LucyImg>
        </ImagesRowOne>
      </PageStyle>
    );
  }
}

export default AboutUs;
