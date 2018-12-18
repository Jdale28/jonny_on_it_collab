import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  border: none;
  height: 90%;
  width: 70%;
  margin-left: 25%;
  margin-top: -5px;
  position: absolute;
  margin-top: 10px;
`;
const Title = styled.h1`
  margin-top: 25px;
  font-size: 30px;
  margin-left: 355px;
`;

class UserPaymentDashboard extends Component {
  render() {
    return (
      <Container>
        <div />
        <Title> PAYMENT METHODS </Title>
        {/* <Paymentbutton> <p> Add New Card </p></Paymentbutton> */}
        <div />
      </Container>
    );
  }
}

export default UserPaymentDashboard;
