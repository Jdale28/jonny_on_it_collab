import React, { Component } from 'react';
import { FormStyled } from '../FormStyle'
import { BlueButton } from '../ButtonStyle'
import axios from 'axios'
import styled from 'styled-components'


const PageStyle = styled.div `
    margin-left: 15vw;
`

class EditPayment extends Component {
    state = {
        payments: [],
        newPayment: {
            cardType: "",
            cardholderName: "",
            cardNumber: "",
            cardMonth: "",
            cardYear: "",
            cardCVV: "",
            user: ""
        }
    }

    componentDidMount() {
        this.getAllPaymentData()
    }

    getAllPaymentData = () => {
        const url = `/api/payments/${this.props.match.params.id}`
        axios.get(url).then(res => {
            this.setState({ payments: res.data })
        })
    }

    handleChange = (event) => {
        event.preventDefault()
        const updatedNewPayment = { ...this.state.newPayment }
        updatedNewPayment[event.target.name] = event.target.value
        this.setState({ newPayment: updatedNewPayment })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const paymentId = this.props.match.params.id
        const userId = this.state.payments.user
        const payload = {
            cardType: this.state.newPayment.cardType,
            cardholderName: this.state.newPayment.cardholderName,
            cardNumber: this.state.newPayment.cardNumber,
            cardMonth: this.state.newPayment.cardMonth,
            cardYear: this.state.newPayment.cardYear,
            cardCVV: this.state.newPayment.cardCVV,
            user: userId
        }
        axios.patch(`/api/payments/${paymentId}/`, payload).then(res => {
            this.getAllPaymentData()
            this.props.history.goBack()
        })
    }

    render() {
        return (
            <PageStyle><FormStyled className="container">
            <h2>Payment Info</h2>
            <div className="form-container">
            <form onSubmit={this.handleSubmit}>
            <label>Card Type<span className="span"> *</span></label><span className="right">* Required</span>
            <input
            onChange={this.handleChange}
            value={this.state.newPayment.cardType}
            type="text" name="cardType"
            placeholder={this.state.payments.cardType}
            maxLength="30">
            </input>
            <label>Cardholder Name<span className="span"> *</span></label>
            <input
            onChange={this.handleChange}
            value={this.state.newPayment.cardholderName}
            type="text" name="cardholderName"
            maxLength="120" placeholder={this.state.payments.cardholderName}>
            </input>
            <label>Card Number<span className="span"> *</span></label>
            <input
            onChange={this.handleChange}
            value={this.state.newPayment.cardNumber}
            type="text" name="cardNumber"
            maxLength="16" placeholder={this.state.payments.cardNumber}>
            </input>
            <div className="sub-form-container">
            <div>
            <label>MM<span className="span"> *</span></label>
            <input
            onChange={this.handleChange}
            value={this.state.newPayment.cardMonth}
            type="text" name="cardMonth"
            maxLength="2" placeholder={this.state.payments.cardMonth}>
            </input>
            </div>
            <div>
            <label>YY<span className="span"> *</span></label>
            <input
            onChange={this.handleChange}
            value={this.state.newPayment.cardYear}
            type="text" name="cardYear"
            maxLength="2" placeholder={this.state.payments.cardYear}>
            </input>
            </div>
            <div>
            <label>CVV<span className="span"> *</span></label>
            <input
            onChange={this.handleChange}
            value={this.state.newPayment.cardCVV}
            type="text" name="cardCVV"
            maxLength="4" placeholder={this.state.payments.cardCVV}>
            </input>
            </div>
            </div>
            <div className="submit-button">
            <BlueButton onClick={this.handleSubmit}>Submit Edits</BlueButton>
            </div>
            </form>
            </div>
            </FormStyled></PageStyle>
        );
    }
}

export default EditPayment;