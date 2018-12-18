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

class UserModal extends Component {
  // Controller for Modal show/hide
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  state = {
    newCard: {
      card: "",
      month: "",
      cvv: ""
    }
  };

  handleClose() {
    console.log("Hello");
    this.setState({ show: false });
  }

  handleShow() {
    console.log("Hello");
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
      <div>
        <Button
          bsSize="large"
          className="modalbutton"
          onClick={this.handleShow}
        >
          ADD NEW CARD
        </Button>

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
                  Card
                </Col>
                <Col sm={10}>
                  <FormControl
                    onChange={this.handleChange}
                    type="text"
                    name="card"
                    value={this.state.newCard.card}
                    placeholder="Card"
                  />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Month/Year
                </Col>
                <Col sm={10}>
                  <FormControl
                    onChange={this.handleChange}
                    type="text"
                    name="month"
                    value={this.state.newCard.month}
                    placeholder="Month"
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

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Checkbox>Remember me</Checkbox>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="submit"> Add Card</Button>
                </Col>
              </FormGroup>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        <div className="cardInfo">
          <p>
            {this.state.newCard.card}
            {this.state.newCard.month}
            {this.state.newCard.cvv}
          </p>
        </div>
      </div>
    );
  }
}

export default UserModal;