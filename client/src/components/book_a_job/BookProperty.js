import React, { Component } from 'react'
import { BlueButton } from '../ButtonStyle'
import { FormStyled } from '../FormStyle'
import axios from 'axios'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

class BookProperty extends Component {

    state = {
        properties: [],
        newProperty: {
            streetAddress: '',
            // streetAddress2: '',
            city: '',
            state: '',
            zipcode: '',
            user: ''
        }
    }

    // NEED TO GET JOB ID AND PASS IT IN

    handleChange = (event) => {
        const updatedNewProperty = { ...this.state.newProperty }
        updatedNewProperty[event.target.name] = event.target.value
        this.setState({ newProperty: updatedNewProperty })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('before post')
        axios.post(`/api/properties`, this.state.newProperty).then(res => {
            console.log('after post', res)
            // this.state.redirect(res, `/booktime`)
            // NEED TO FIGURE CORRECT PATH FOR POST
            // CORRECT PATH TO redirect (REDIRECT)
        })
    }
    render() {
        return (
            <FormStyled>
                <h1>Property</h1>
                <div className="form-container">
                    <form onSubmit={this.handleSubmit}>
                        <label>Street</label>
                        <input
                            onChange={this.handleChange}
                            value={this.state.newProperty.streetAddress}
                            type="text" name="streetAddress"
                            maxLength="120">
                        </input>
                        {/* <p>Street Address 2 (optional)</p>
                        <input
                        onChange={this.handleChange}
                        // value={this.state.newProperty.streetAddress2}
                        type="text" name="streetadress2"
                        maxLength="120">
                        </input> */}
                        <label>City</label>
                        <input
                            onChange={this.handleChange}
                            value={this.state.newProperty.city}
                            type="text" name="city"
                            maxLength="120">
                        </input>
                        <div className="sub-form-container">
                            <div>
                                <label>State</label>
                                <input
                                    onChange={this.handleChange}
                                    value={this.state.newProperty.state}
                                    type="text" name="state"
                                    maxLength="120">
                                </input>
                            </div>
                            <div>
                                <label>Zip code</label>
                                <input
                                    onChange={this.handleChange}
                                    value={this.state.newProperty.zipcode}
                                    type="text" name="zipcode"
                                    maxLength="10">
                                </input>
                            </div>
                        </div>
                        <div className="submit-button">
                            <BlueButton type="submit">Next</BlueButton>
                        </div>
                    </form>
                </div>
            </FormStyled>
        )
    }
}

export default BookProperty