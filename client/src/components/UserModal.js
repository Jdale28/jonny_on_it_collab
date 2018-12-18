import React, { Component } from 'react';
import axios from "axios";
import { Modal, Button, Form, FormGroup, Col, ControlLabel, FormControl, Checkbox } from "react-bootstrap";




class UserModal extends Component {
  // Controller for Modal show/hide
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  state = {
    employee: {},
    reviews: [],
    show: false,
    newCard: {
      card: 0,
      month: '',
      cvv: 0
    }
  };

  handleClose() {
    console.log("Hello")
    this.setState({ show: false });
  }

  handleShow() {
    console.log("Hello")
    this.setState({ show: true });
  }

  handleChange = event => {
    const updatedNewCard = { ...this.state.newCard };
    updatedNewCard[event.target.name] = event.target.value;
    this.setState({ newCard: updatedNewCard });
  };

  handleSubmit = event => {
    event.preventDefault()
    // create a payload to send to database
    const payload = {
      card: this.state.newCard.card,
      month: this.state.newCard.month,
      cvv: this.state.newCard.cvv
    }
    // make a post request to the database (save card in database)
    // axios.post('/api/payments/', payload)
    // then make a get request to the database for all cards
    // axios.get('/api/payments/)
    this.handleClose()
  }

  render() {
    return (
      <div>
        <Button bsSize="large" className='modalbutton' onClick={this.handleShow}>
          ADD NEW CARD
            </Button>


        <Modal show={this.state.show} animation={false} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form horizontal onSubmit={this.handleSubmit}>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Card</Col>
                <Col sm={10}>
                  <FormControl onChange={this.handleChange} type="text" name="card" value={this.state.newCard.card} placeholder="Card" />

                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Month/Year
    </Col>
                <Col sm={10}>
                  <FormControl  onChange={this.handleChange} type="text" name="month" value={this.state.newCard.month} placeholder="Month" />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col componentClass={ControlLabel} sm={2}>
                  CVV
    </Col>
                <Col sm={10}>
                <FormControl  onChange={this.handleChange} type="text" name="cvv" value={this.state.newCard.cvv} placeholder="CVV" />
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







              {/* <form onSubmit={this.handleSubmit}>
                  <div>
                    <label htmlFor="card">Card Number</label>
                    <input
                      onChange={this.handleChange}
                      value={this.state.newCard.card}
                      type="text"
                      name="card number"
                    />
                  </div>
                  <div>
                    <label htmlFor="month">Month</label>
                    <input
                      onChange={this.handleChange}
                      value={this.state.newCard.month}
                      type="text"
                      name="month"
                    />
                  </div>
                  <div>
                    <label htmlFor="year">Year</label>
                    <input
                      onChange={this.handleChange}
                      value={this.state.newCard.year}
                      type="text"
                      name="year"
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv">CVV</label>
                    <input
                      onChange={this.handleChange}
                      value={this.state.newCard.cvv}
                      type="text"
                      name="cvv"
                    />
                  </div>
                  <button type="submit">Add Card</button>
                </form> */}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        <p>{this.state.newCard.card}</p>
        <p>{this.state.newCard.month}</p>
        <p>{this.state.newCard.cvv}</p>
      </div>
    );
  }
}

export default UserModal;