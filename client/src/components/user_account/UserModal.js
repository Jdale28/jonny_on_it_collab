import React, { Component } from "react";
import axios from "axios";
import {
  Modal,
  Button,
  Form,
  FormGroup,
  Col,
  ControlLabel,
  FormControl
} from "react-bootstrap";
import styled from "styled-components";

const PageStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  .cardAddCardFlex {
    display: flex;
    flex-direction: column;
  }
  .newCardDiv {
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 15vw;
    width: 20vw;
    font-size: 15px;
  }
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
      cardMonth: "",
      cardYear: "",
      cardCVV: ""
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
    const payload = {
      cardholderName: this.state.newCard.cardholderName,
      cardType: this.state.newCard.cardType,
      cardNumber: this.state.newCard.cardNumber,
      cardMonth: this.state.newCard.cardMonth,
      cardYear: this.state.newCard.cardYear,
      cardCVV: this.state.newCard.cardCVV,
      user: this.props.user.id
    };
    console.log(payload);
    axios.post(`/api/payments/`, payload).then(res => {
      console.log("Successful Post");
    });
  };

  render() {
    return (
      <PageStyle>
        <div className="CardAddCardFlex">
          <div className="newCardDiv">
            <div>New Payment Information</div>
            <div>{this.state.newCard.cardholderName}</div>
            <div>{this.state.newCard.cardNumber}</div>
            <div>{this.state.newCard.cardType}</div>
            <div>{this.state.newCard.cardMonth}</div>
            <div>{this.state.newCard.cardYear}</div>
            <div>{this.state.newCard.cardCVV}</div>
          </div>
          <Button
            bsSize="large"
            className="modalstyle"
            onClick={this.handleShow}
          >
            ADD NEW CARD
          </Button>
          <Button
            bsSize="large"
            id="databaseSubmit"
            className="modalstyle"
            onClick={this.handleSubmit}
          >
            Submit to Database
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
                    value={this.state.newCard.cardholderName}
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
                    <option>AMEX</option>
                    <option>VISA</option>
                    <option>MASTERCARD</option>
                    <option>DISCOVER</option>
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
                    name="cardMonth"
                    value={this.state.newCard.cardMonth}
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
                    name="cardYear"
                    value={this.state.newCard.cardYear}
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
                    name="cardCVV"
                    value={this.state.newCard.cardCVV}
                    placeholder="CVV"
                  />
                </Col>
              </FormGroup>
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
