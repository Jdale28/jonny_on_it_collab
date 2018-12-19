import React, { Component } from 'react'
import { BlueButton } from '../ButtonStyle'
import { FormStyled } from '../FormStyle'
import axios from 'axios'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

class BookPayment extends Component {

    state = {
        user: {},
        job: {},
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
        this.getAllUserData()
    }

    getAllUserData = () => {
        const url = `/api/users/`
        axios.get(url).then(res => {
            this.setState({ users: res.data, payments: res.data })
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
        // const below was for testing post - remove
        const userId = 1
        const payload = {
            cardType: this.state.newPayment.cardType,
            cardholderName: this.state.newPayment.cardholderName,
            cardNumber: this.state.newPayment.cardNumber,
            cardMonth: this.state.newPayment.cardMonth,
            cardYear: this.state.newPayment.cardYear,
            cardCVV: this.state.newPayment.cardCVV,
            user: userId
        }
        axios.post(`/api/payments/`, payload).then(res => {
            this.getAllUserData()
        })
    }

    render() {
        return (
            <FormStyled>
                <h2>Payment Info</h2>
                <div className="form-container">
                    <form onSubmit={this.handleSubmit}>
                    <label>Card Type</label>
                        <input
                            onChange={this.handleChange}
                            value={this.state.newPayment.cardType}
                            type="text" name="cardType"
                            placeholder=" VISA, MASTERCARD, AMEX, DISCOVER"
                            maxLength="30">
                        </input>
                    <label>Card Holder Name</label>
                        <input
                            onChange={this.handleChange}
                            value={this.state.newPayment.cardholderName}
                            type="text" name="cardholderName"
                            maxLength="120">
                        </input>
                        <label>Card Number</label>
                        <input
                            onChange={this.handleChange}
                            value={this.state.newPayment.cardNumber}
                            type="text" name="cardNumber"
                            maxLength="16">
                        </input>
                        <div className="sub-form-container">
                            <div>
                                <label>MM</label>
                                <input
                                    onChange={this.handleChange}
                                    value={this.state.newPayment.cardMonth}
                                    type="text" name="cardMonth"
                                    maxLength="2">
                                </input>
                            </div>
                            <div>
                                <label>YY</label>
                                <input
                                    onChange={this.handleChange}
                                    value={this.state.newPayment.cardYear}
                                    type="text" name="cardYear"
                                    maxLength="2">
                                </input>
                            </div>
                            <div>
                                <label>CVV</label>
                                <input
                                    onChange={this.handleChange}
                                    value={this.state.newPayment.cardCVV}
                                    type="text" name="cardCVV"
                                    maxLength="3">
                                </input>
                            </div>
                        </div>
                        <p className="sub-text">You card will not be charged until the job is closed or cancelled</p>
                        <div className="submit-button">
                            <BlueButton>Next</BlueButton>
                        </div>
                    </form>
                </div>
            </FormStyled>
        )
    }
}

export default BookPayment