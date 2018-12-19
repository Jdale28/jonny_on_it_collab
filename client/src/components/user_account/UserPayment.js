import React, { Component } from "react";
import styled from "styled-components";
import UserModal from "./UserModal";

import axios from "axios";

const Container = styled.div`
  border: none;
  height: 70vh;
  width: 75vw;
  border: 1px solid black;
  .currentCardsFlex {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    height: 15vw;
    width: 75vw;
    font-size: 2rem;
    border: 1px solid black;
  }
`;
const Title = styled.h1`
  margin-top: 25px;
  font-size: 30px;
  margin-left: 355px;
`;

class UserPayment extends Component {
  state = {
    user: {},
    payments: []
  };

  componentDidMount() {
    this.getData();
  }
  
  handleDelete = (id) => {
    axios.delete(`/api/payments/${id}`).then(() => {
        this.getData()
  })}

  getData = () => {
    const id = this.props.match.params.id;
    axios.get(`/api/users/${id}`).then(res => {
      this.setState({ user: res.data, payments: res.data.payments });
    });
  };

  render() {
    return (
      <Container>
        <div>
        <Title> PAYMENT METHODS </Title>
        <div className="currentCardsFlex">
          {this.state.payments.map((payment, i) => (
            <div key={i} className="OneCard">
              <div>Cardholder Name: {payment.cardholderName}</div>
              <div>{payment.cardType}</div> 
              <div>Card Number: {payment.cardNumber}; CVV: {payment.cardCVV}</div>
              <div>
                Expiration: {payment.cardMonth}/{payment.cardYear}
              </div>
              <div className="deleteButton" onClick={() => this.handleDelete(payment.id)}>x</div>
            </div>
          ))}
        </div>
          <UserModal {...this.state} />
        </div>
      </Container>
    );
  }
}

export default UserPayment;