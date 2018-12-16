import React, { Component } from 'react'
import styled from 'styled-components'
import { BlueButton } from '../ButtonStyle'

const PaymentStyle = styled.div`
    margin: 3em auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    .form-container {
        width: 40vw;
    }
    form input {
        width: 100%;
        height: 2.5em;
        margin: 0 auto .4em auto;
    }
    .sub-form-container {
        display: flex;
        justify-content: space-around;
    }
    .submit-button {
        margin: .4em 0;
        display: flex;
        justify-content: center;
    }
    .sub-text {
        font-size: .8em;
    }
`

class BookPayment extends Component {
    render() {
        return (
            <PaymentStyle>
                <h2>Payment Info</h2>
                <div className="form-container">
                    <form onSubmit={this.handleSubmit}>
                        <p>Card Number</p>
                        <input
                            // onChange={this.handleChange}
                            // value={this.state.somethin.cardNumber}
                            type="text" name="cardnumber"
                            maxLength="120">
                        </input>
                        <div className="sub-form-container">
                            <div>
                                <p>MM</p>
                                <input
                                    // onChange={this.handleChange}
                                    // value={this.state.something.month}
                                    type="text" name="city"
                                    maxLength="120">
                                </input>
                            </div>
                            <div>
                                <p>YY</p>
                                <input
                                    // onChange={this.handleChange}
                                    // value={this.state.something.year}
                                    type="text" name="year"
                                    maxLength="120">
                                </input>
                            </div>
                            <div>
                                <p>CVV</p>
                                <input
                                    // onChange={this.handleChange}
                                    // value={this.state.something.cvv}
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
            </PaymentStyle>
        )
    }
}

export default BookPayment