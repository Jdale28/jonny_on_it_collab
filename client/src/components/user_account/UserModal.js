import React, { Component } from "react";
import axios from "axios";
import {
  Modal,
  Button,
  Form,
  FormGroup,
  Col,
  ControlLabel,
  FormControl,
  Checkbox
} from "react-bootstrap";
import styled from "styled-components";

const PageStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  .currentCardsFlex {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 15vw;
    width: 75vw;
    font-size: 2rem;
    border: 1px solid black;
  }
  .cardAddCardFlex {
    display: flex;
    flex-direction: column;
  }
  .newCardDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 15vw;
    height: 15vw;
    width: 30vw;
    font-size: 2rem;
    border: 1px solid black;
  }
`;

const Title = styled.h1`
  margin-top: 25px;
  font-size: 30px;
  margin-left: 355px;
`;

class UserModal extends Component {
  // Controller for Modal show/hide
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  state = {
    user: {},
    payments: [],
    newCard: {
      cardholderName: "",
      cardType: "",
      cardNumber: "",
      month: "",
      year: "",
      cvv: ""
    }
  };

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleChange = event => {
    const updatedNewCard = { ...this.state.newCard };
    updatedNewCard[event.target.name] = event.target.value;
    this.setState({ newCard: updatedNewCard });
  };

  
  handleSubmit = event => {
    event.preventDefault();
    // create a payload to send to database
    const payload = {
      card: this.state.newCard.card,
      month: this.state.newCard.month,
      cvv: this.state.newCard.cvv
    };
    // make a post re
    this.handleClose();
  };

  render() {
    return (
      <PageStyle>
        <Title> PAYMENT METHODS </Title>
        <div className="currentCardsFlex">
          {this.props.payments.map((payment, i) => (
            <div key={i} className="OneCard">
              <div>Cardholder Name: {payment.cardholderName}</div>
              <div>{payment.cardType} - Card Number: {payment.cardNumber}; CVV: {payment.cardCVV}</div>
              <div>
                {payment.cardMonth}, {payment.cardYear}
              </div>
            </div>
          ))}
        </div>
        <div className="CardAddCardFlex">
          <div className="newCardDiv">
            <div>New Payment Information</div>
            <div>{this.state.newCard.cardholderName}</div>
            <div>{this.state.newCard.cardType}</div>
            <div>{this.state.newCard.month}</div>
            <div>{this.state.newCard.year}</div>
            <div>{this.state.newCard.cvv}</div>
          </div>
          <Button
            bsSize="large"
            className="modalstyle"
            onClick={this.handleShow}
          >
            ADD NEW CARD
          </Button>
        </div>

        <Modal
          show={this.state.show}
          animation={false}
          onHide={this.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title />
          </Modal.Header>
          <Modal.Body>
            <Form horizontal onSubmit={this.handleSubmit}>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Cardholder Name
                </Col>
                <Col sm={10}>
                  <FormControl
                    onChange={this.handleChange}
                    type="text"
                    name="cardholderName"
                    value={this.state.newCard.card}
                    placeholder="Cardholder Name"
                  />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Type of Card
                </Col>
                <Col sm={10}>
                  <FormControl
                    onChange={this.handleChange}
                    type="text"
                    list="cards"
                    name="cardType"
                    placeholder="Type of Card"
                    value={this.state.newCard.cardType}
                  />
                  <datalist id="cards">
                    <option>American Express</option>
                    <option>Visa</option>
                    <option>Mastercard</option>
                    <option>Discover</option>
                  </datalist>
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Card Number
                </Col>
                <Col sm={10}>
                  <FormControl
                    onChange={this.handleChange}
                    type="text"
                    name="cardNumber"
                    value={this.state.newCard.cardNumber}
                    placeholder="Card Number"
                  />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Expiration Month
                </Col>
                <Col sm={10}>
                  <FormControl
                    onChange={this.handleChange}
                    type="text"
                    name="month"
                    value={this.state.newCard.month}
                    placeholder="Expiration Month"
                  />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Expiration Year
                </Col>
                <Col sm={10}>
                  <FormControl
                    onChange={this.handleChange}
                    type="text"
                    name="year"
                    value={this.state.newCard.year}
                    placeholder="Expiration Year"
                  />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col componentClass={ControlLabel} sm={2}>
                  CVV
                </Col>
                <Col sm={10}>
                  <FormControl
                    onChange={this.handleChange}
                    type="text"
                    name="cvv"
                    value={this.state.newCard.cvv}
                    placeholder="CVV"
                  />
                </Col>
              </FormGroup>

              {/* <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="submit"> Add Card</Button>
                </Col>
              </FormGroup> */}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </PageStyle>
    );
  }
}

export default UserModal;
