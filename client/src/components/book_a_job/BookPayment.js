import React, { Component } from 'react'
import { BlueButton } from '../ButtonStyle'
import { FormStyled } from '../FormStyle'

class BookPayment extends Component {

    state = {
        newPayment: {
            user: "",
            cardNumber: "",
            cardMonth: "",
            cardYear: "",
            cardCVV: ""
        }
    }

    render() {
        return (
            <FormStyled>
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
            </FormStyled>
        )
    }
}

export default BookPayment