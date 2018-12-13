import React, { Component } from "react";
import styled from "styled-components";

const BannerImage = styled.div`
<<<<<<< HEAD
width: 100%;
height: 48vh;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 3vh;
background-image: url("/images/how-it-works-banner.jpg");
background-size: 100%;
`;
const HowImage = styled.div`
width: 70%;
height: 90vh;
display: flex;
justify-content: center;
align-items: center;
margin: 0 15vw 5vh 15vw;
background-image: url("/images/how-it-works-diagram.png");
background-size: 100%;
`;
const IconBox = styled.div`
width: 100%;
height: 65vh;
margin-top: 5vh;
`;
const HowCounter = styled.div`
width: 100%;
height: 30vh;
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
font-size: 0.75rem;
width: 15vw;
}
`;

const Center = styled.div`
text-align: center;
`;

const IconFlex = styled.div`
display: flex;
justify-content: space-evenly;
margin-top: 3vh;
.OneIcon {
width: 15vw;
}
img {
height: 5vh;
width: auto;
}
p {
margin-top: 2vh;
font-size: 0.75rem;
}
`;
const KeyFeatures = styled.div`
width: 100%;
height: 65vh;
margin-bottom: 15vh;
background-color: rgba(242, 242, 241, 1);
.KeyTitle {
margin-left: 5vh;
padding-top: 3vh;
}
.KeyDescription {
margin-left: 5vh;
padding-top: 3vh;
width: 40vw;
font-size: 0.85rem;
}
.FeaturesFlexBox {
width: 100vw;
height: 60vh;
display: flex;
justify-content: center;
flex-wrap: wrap;
}
`;
const KeyFlex = styled.div`
width: 15vw;
height: 40vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 5vh;
margin-right: 10vw;
.KeyHeader {
width: 100%;
font-size: 1.5rem;
text-align: left;
}
.KeyTagline {
font-size: 0.85rem;
margin-bottom: 7vh;
}
`;
const KeyIconFlex = styled.div`
width: 10vw;
height: 40vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 5vh;
.KeyIcon {
padding: 15px;
width: 3vw;
height: 3vw;
border-radius: 50%;
background-color: white;
background-image: url("/images/PNGs/Icon-Plumbing.png");
background-size: 100%;
margin-bottom: 5vh;
}
`;

class AboutUs extends Component {
render() {
return (
<div>
<BannerImage />
<HowCounter>
<h1 className="HowCounterHeader">HOW IT WORKS</h1>
<p className="HowCounterTagline">
Connect homeowners and realtors with quality service providers
</p>
<p className="HowCounterTagline BottomMessage">Easy as 1, 2, 3</p>
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
<HowImage />
<Center>Book Now Button</Center>
<IconBox>
<Center>
<h1>Whatever you need</h1>
<p>Find exactly what you need, exactly when you need it.</p>
<IconFlex>
<div className="OneIcon">
<img src="/images/PNGs/Icon-Plumbing.png" alt="Plumbing Icon" />
<h2>Plumbing</h2>
<p>
Find plumbers to fix burst pipes, low water pressure and more.
</p>
</div>
<div className="OneIcon">
<img
src="/images/PNGs/Icon-PestControl.png"
alt="Pest Control Icon"
/>
<h2>Pest Control</h2>
<p>Get expert help removing insects, termites, and wildlife.</p>
</div>
<div className="OneIcon">
<img
src="/images/PNGs/Icon-Electrician.png"
alt="Electrician Icon"
/>
<h2>Electrician</h2>
<p>
Hire professionals to fix exposed wires, flickering lights,
etc.
</p>
</div>
</IconFlex>
<IconFlex>
<div className="OneIcon">
<img src="/images/PNGs/Icon-Roofing.png" alt="Roofing Icon" />
<h2>Roofing</h2>
<p>Repair, replace, and maintain your roof.</p>
</div>
<div className="OneIcon">
<img src="/images/PNGs/Icon-Cleaning.png" alt="Cleaning Icon" />
<h2>Cleaning</h2>
<p>Get help for spaces, large or small.</p>
</div>
<div className="OneIcon">
<img
src="/images/PNGs/Icon-Carpentry.png"
alt="Carpentry Icon"
/>
<h2>Carpentry</h2>
<p>
Get help fixing walls, installing flooring, and handling
finishing work.
</p>
</div>
</IconFlex>
<IconFlex>
<div className="OneIcon">
<img
src="/images/PNGs/Icon-HVAC.png"
alt="Heating and Air Icon"
/>
<h2>Heating and Air</h2>
<p>
Find your licensed technicians to fix your heater or air
conditioner.
</p>
</div>
<div className="OneIcon">
<img src="/images/PNGs/Icon-Painting.png" alt="Painting Icon" />
<h2>Painting</h2>
<p>Personalize your home or rental by adding fresh color.</p>
</div>
<div className="OneIcon">
<img src="/images/PNGs/Icon-Handyman.png" alt="Handyman Icon" />
<h2>Handyman</h2>
<p>
Have an odd job not listed here? Reach out to a handyman for
help.
</p>
</div>
</IconFlex>
</Center>
</IconBox>
<KeyFeatures>
<h1 className="KeyTitle">Key Features</h1>
<p className="KeyDescription">
Jonny On It makes it easy for realtors and homeowners to book
vendors, pay for services, and keep track of home repairs - whenever
you need them.
</p>
<div className="FeaturesFlexBox">
<KeyIconFlex>
<div className="KeyIcon"></div>
<div className="KeyIcon"></div>
</KeyIconFlex>
<KeyFlex>
<h4 className="KeyHeader">Safe and Secure</h4>
<p className="KeyTagline">
All our service providers are insured and have passed a background check. You'll also get a photo so you know who to expect at your door.
</p>
<h4 className="KeyHeader">Detailed Records</h4>
<p className="KeyTagline">
Jonny saves all of your service records. This way, when you move or sell your house, you vcan share these records with the new owner/occupant.
</p>
</KeyFlex>
<KeyIconFlex>
<div className="KeyIcon"></div>
<div className="KeyIcon"></div>
</KeyIconFlex>
<KeyFlex>
<h4 className="KeyHeader">Honest Reviews</h4>
<p className="KeyTagline">
We don't have any paid or incentivized reviews in our app, so you can trust that the reviews are honest & genuine.
</p>
<h4 className="KeyHeader">Ideal for Realtors</h4>
<p className="KeyTagline">
Hire professionals for your punch list, share a preferred venfor list with your customers, and get everything done in record time!
</p>
</KeyFlex>
</div>
</KeyFeatures>
</div>
);
}
=======
  width: 100%;
  height: 48vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3vh;
  background-image: url("/images/how-it-works-banner.jpg");
  background-size: 100%;
`;
const HowImage = styled.div`
  width: 70%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 15vw 5vh 15vw;
  background-image: url("/images/how-it-works-diagram.png");
  background-size: 100%;
`;
const IconBox = styled.div`
  width: 100%;
  height: 65vh;
  margin-top: 5vh;
`;
const HowCounter = styled.div`
  width: 100%;
  height: 30vh;
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
    font-size: 0.75rem;
    width: 15vw;
  }
`;

const Center = styled.div`
  text-align: center;
`;

const IconFlex = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 3vh;
  .OneIcon {
    width: 15vw;
  }
  img {
    height: 5vh;
    width: auto;
  }
  p {
    margin-top: 2vh;
    font-size: 0.75rem;
  }
`;
const KeyFeatures = styled.div`
  width: 100%;
  height: 65vh;
  margin-bottom: 15vh;
  background-color: rgba(242, 242, 241, 1);
  .KeyTitle {
    margin-left: 5vh;
    padding-top: 3vh;
  }
  .KeyDescription {
    margin-left: 5vh;
    padding-top: 3vh;
    width: 40vw;
    font-size: 0.85rem;
  }
  .FeaturesFlexBox {
    width: 100vw;
    height: 60vh;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
const KeyFlex = styled.div`
  width: 15vw;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 5vh;
  margin-right: 10vw;
  .KeyHeader {
    width: 100%;
    font-size: 1.5rem;
    text-align: left;
  }
  .KeyTagline {
    font-size: 0.85rem;
    margin-bottom: 7vh;
  }
`;
const KeyIconFlex = styled.div`
  width: 10vw;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 5vh;
  .KeyIcon {
    padding: 15px;
    width: 3vw;
    height: 3vw;
    border-radius: 50%;
    background-color: white;
    background-image: url("/images/PNGs/Icon-Plumbing.png");
    background-size: 100%;
    margin-bottom: 5vh;
  }
`;

class AboutUs extends Component {
  render() {
    return (
      <div>
        <BannerImage />
        <HowCounter>
          <h1 className="HowCounterHeader">HOW IT WORKS</h1>
          <p className="HowCounterTagline">
            Connect homeowners and realtors with quality service providers
          </p>
          <p className="HowCounterTagline BottomMessage">Easy as 1, 2, 3</p>
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
        <HowImage />
        <Center>Book Now Button</Center>
        <IconBox>
          <Center>
            <h1>Whatever you need</h1>
            <p>Find exactly what you need, exactly when you need it.</p>
            <IconFlex>
              <div className="OneIcon">
                <img src="/images/PNGs/Icon-Plumbing.png" alt="Plumbing Icon" />
                <h2>Plumbing</h2>
                <p>
                  Find plumbers to fix burst pipes, low water pressure and more.
                </p>
              </div>
              <div className="OneIcon">
                <img
                  src="/images/PNGs/Icon-PestControl.png"
                  alt="Pest Control Icon"
                />
                <h2>Pest Control</h2>
                <p>Get expert help removing insects, termites, and wildlife.</p>
              </div>
              <div className="OneIcon">
                <img
                  src="/images/PNGs/Icon-Electrician.png"
                  alt="Electrician Icon"
                />
                <h2>Electrician</h2>
                <p>
                  Hire professionals to fix exposed wires, flickering lights,
                  etc.
                </p>
              </div>
            </IconFlex>
            <IconFlex>
              <div className="OneIcon">
                <img src="/images/PNGs/Icon-Roofing.png" alt="Roofing Icon" />
                <h2>Roofing</h2>
                <p>Repair, replace, and maintain your roof.</p>
              </div>
              <div className="OneIcon">
                <img src="/images/PNGs/Icon-Cleaning.png" alt="Cleaning Icon" />
                <h2>Cleaning</h2>
                <p>Get help for spaces, large or small.</p>
              </div>
              <div className="OneIcon">
                <img
                  src="/images/PNGs/Icon-Carpentry.png"
                  alt="Carpentry Icon"
                />
                <h2>Carpentry</h2>
                <p>
                  Get help fixing walls, installing flooring, and handling
                  finishing work.
                </p>
              </div>
            </IconFlex>
            <IconFlex>
              <div className="OneIcon">
                <img
                  src="/images/PNGs/Icon-HVAC.png"
                  alt="Heating and Air Icon"
                />
                <h2>Heating and Air</h2>
                <p>
                  Find your licensed technicians to fix your heater or air
                  conditioner.
                </p>
              </div>
              <div className="OneIcon">
                <img src="/images/PNGs/Icon-Painting.png" alt="Painting Icon" />
                <h2>Painting</h2>
                <p>Personalize your home or rental by adding fresh color.</p>
              </div>
              <div className="OneIcon">
                <img src="/images/PNGs/Icon-Handyman.png" alt="Handyman Icon" />
                <h2>Handyman</h2>
                <p>
                  Have an odd job not listed here? Reach out to a handyman for
                  help.
                </p>
              </div>
            </IconFlex>
          </Center>
        </IconBox>
        <KeyFeatures>
          <h1 className="KeyTitle">Key Features</h1>
          <p className="KeyDescription">
            Jonny On It makes it easy for realtors and homeowners to book
            vendors, pay for services, and keep track of home repairs - whenever
            you need them.
          </p>
          <div className="FeaturesFlexBox">
            <KeyIconFlex>
              <div className="KeyIcon"></div>
              <div className="KeyIcon"></div>
            </KeyIconFlex>
            <KeyFlex>
              <h4 className="KeyHeader">Safe and Secure</h4>
              <p className="KeyTagline">
                All our service providers are insured and have passed a background check. You'll also get a photo so you know who to expect at your door.
              </p>
              <h4 className="KeyHeader">Detailed Records</h4>
              <p className="KeyTagline">
                Jonny saves all of your service records. This way, when you move or sell your house, you vcan share these records with the new owner/occupant.
              </p>
            </KeyFlex>
            <KeyIconFlex>
            <div className="KeyIcon"></div>
              <div className="KeyIcon"></div>
            </KeyIconFlex>
            <KeyFlex>
              <h4 className="KeyHeader">Honest Reviews</h4>
              <p className="KeyTagline">
                We don't have any paid or incentivized reviews in our app, so you can trust that the reviews are honest & genuine.
              </p>
              <h4 className="KeyHeader">Ideal for Realtors</h4>
              <p className="KeyTagline">
                Hire professionals for your punch list, share a preferred venfor list with your customers, and get everything done in record time!
              </p>
            </KeyFlex>
          </div>
        </KeyFeatures>
      </div>
    );
  }
>>>>>>> master
}

export default AboutUs;