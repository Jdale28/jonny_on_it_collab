import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/minimal-example.css";
import styled from "styled-components";

const PageStyle = styled.div`
  margin: 5vh;
  .header {
    color: rgba(13, 151, 255, 1);
    margin-bottom: 3vh;
  }
  .fullItem {
    border: 1px solid black;
    margin-bottom: 0.25vh;
  }
  h1 {
    margin: 0.8vw;
    font-size: 2rem;
    color: black;
  }
  .body {
    margin: 0.8vw;
    font-size: 1rem;
    color: black;
  }
`;

const RowFlex = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    height: 5vh;
    width: auto;
    margin-top: 1.25vh;
    margin-right: 1vw;
  }
`;

class FAQ extends Component {
  render() {
    return (
      <div>
        <PageStyle>
          <h1 className="header">FAQ</h1>
          <Accordion>
            {/* Question 1 */}
            <AccordionItem className="fullItem">
              <AccordionItemTitle className="title">
                <RowFlex>
                  <h1 className="u-position-relative">
                    When will I be billed for using the service?
                  </h1>
                  <img
                    className="arrow"
                    src="https://i.imgur.com/hoylZZJ.png"
                    alt="down arrow"
                  />
                </RowFlex>
              </AccordionItemTitle>
              <AccordionItemBody className="body">
                <p>
                  Once the service provider has completed the work and you have
                  rated them your credit card will be billed. completely secure
                </p>
              </AccordionItemBody>
            </AccordionItem>
            {/* Question 2 */}
            <AccordionItem className="fullItem">
              <AccordionItemTitle className="title">
                <RowFlex>
                  <h1>How will I know when my service is on the way?</h1>
                  <img
                    className="arrow"
                    src="https://i.imgur.com/hoylZZJ.png"
                    alt="down arrow"
                  />
                </RowFlex>
              </AccordionItemTitle>
              <AccordionItemBody className="body">
                <p>
                  Jonny On It will notify you on the app when the vendor is on
                  the way. You will be able to see a picture and contact details
                  of the service provider. Jonny On It uses geo-location
                  technology and you will be able to see a list of service
                  providers on the app that are available in real-time.
                </p>
              </AccordionItemBody>
            </AccordionItem>
            {/* Question 3 */}
            <AccordionItem className="fullItem">
              <AccordionItemTitle className="title">
                <RowFlex>
                  <h1>How do I become a service provider on Jonny On It?</h1>
                  <img src="https://i.imgur.com/hoylZZJ.png" alt="down arrow" />
                </RowFlex>
              </AccordionItemTitle>
              <AccordionItemBody className="body">
                <p>
                  Download the app on the google play store or itunes and chose
                  to sign up as a service provider. We'd love to add you and see
                  you your business grow!
                </p>
              </AccordionItemBody>
            </AccordionItem>
            {/* Question 4 */}
            <AccordionItem className="fullItem">
              <AccordionItemTitle className="title">
                <RowFlex>
                  <h1>Are payments secure?</h1>
                  <img src="https://i.imgur.com/hoylZZJ.png" alt="down arrow" />
                </RowFlex>
              </AccordionItemTitle>
              <AccordionItemBody className="body">
                <p>All payments are 100% secure.</p>
              </AccordionItemBody>
            </AccordionItem>
            {/* Question 5 */}
            <AccordionItem className="fullItem">
              <AccordionItemTitle className="title">
                <RowFlex>
                  <h1>Is the rate set in stone?</h1>
                  <img src="https://i.imgur.com/hoylZZJ.png" alt="down arrow" />
                </RowFlex>
              </AccordionItemTitle>
              <AccordionItemBody className="body">
                <p>
                  The rates are all provided on the app by the service
                  providers. You will have to confirm the quote on the app in
                  order for the service provider to start the work.
                </p>
              </AccordionItemBody>
            </AccordionItem>
            {/* Question 6 */}
            <AccordionItem className="fullItem">
              <AccordionItemTitle className="title">
                <RowFlex>
                  <h1>What if I am not satisfied with the service?</h1>
                  <img src="https://i.imgur.com/hoylZZJ.png" alt="down arrow" />
                </RowFlex>
              </AccordionItemTitle>
              <AccordionItemBody className="body">
                <p>
                  Once you rate the service provider, the app will give you an
                  opportunity to tell us about your experience. This will prompt
                  the Jonny On It team to take the necessary actions and ensure
                  that you are a satisfied customer.
                </p>
              </AccordionItemBody>
            </AccordionItem>
            {/* Question 7 */}
            <AccordionItem className="fullItem">
              <AccordionItemTitle className="title">
                <RowFlex>
                  <h1>
                    What if I am not satisfied with the quote that was provided?
                  </h1>
                  <img src="https://i.imgur.com/hoylZZJ.png" alt="down arrow" />
                </RowFlex>
              </AccordionItemTitle>
              <AccordionItemBody className="body">
                <p>
                  If you are unhappy with the quote, then you have the option of
                  not approving the work. In this event, we would encourage you
                  to see who else is available in your area and request a new
                  job.
                </p>
              </AccordionItemBody>
            </AccordionItem>
          </Accordion>
        </PageStyle>
      </div>
    );
  }
}
export default FAQ;
