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
        newPayment: {
            CARD_CHOICES: "",
            cardHolderName: "",
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
            this.setState({ users: res.data })
        })
    }

    handleChange = (event) => {
        event.preventDefault()
        const updatedNewPayment = { ...this.state.newPayment }
        updatedNewPayment[event.target.name] = event.target.value
        console.log(updatedNewPayment)
        this.setState({ newPayment: updatedNewPayment })
    }

    handleSubmit = (event) => {
        // const below was for testing post - remove
        const userId = 1
        const payload = {
            // CARD_CHOICES: this.state.newPayment.streetAddress,
            cardHolderName: this.state.newPayment.cardName,
            cardNumber: this.state.newPayment.cardNumber,
            cardMonth: this.state.newPayment.cardMonth,
            cardYear: this.state.newPayment.cardYear,
            cardCVV: this.state.newPayment.cardCVV,
            user: userId
        }
        axios.post(`/api/users/${this.state.userId}/payments/`, payload).then(res => {
            const newPayment = res.data
            const newUserPayment = [...this.state.payments, newPayment]
            this.setState({ payments: newUserPayment })
        })
    }

    render() {
        return (
            <FormStyled>
                <h2>Payment Info</h2>
                <div className="form-container">
                    <form onSubmit={this.handleSubmit}>
                    <p>Card Holder Name</p>
                        <input
                            onChange={this.handleChange}
                            value={this.state.newPayment.cardHolderName}
                            type="text" name="cardnumber"
                            maxLength="120">
                        </input>
                        <p>Card Number</p>
                        <input
                            onChange={this.handleChange}
                            value={this.state.newPayment.cardNumber}
                            type="text" name="cardnumber"
                            maxLength="120">
                        </input>
                        <div className="sub-form-container">
                            <div>
                                <p>MM</p>
                                <input
                                    onChange={this.handleChange}
                                    value={this.state.newPayment.month}
                                    type="text" name="city"
                                    maxLength="120">
                                </input>
                            </div>
                            <div>
                                <p>YY</p>
                                <input
                                    onChange={this.handleChange}
                                    value={this.state.newPayment.year}
                                    type="text" name="year"
                                    maxLength="120">
                                </input>
                            </div>
                            <div>
                                <p>CVV</p>
                                <input
                                    onChange={this.handleChange}
                                    value={this.state.newPayment.cvv}
                                    type="text" name="cvv"
                                    maxLength="10">
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