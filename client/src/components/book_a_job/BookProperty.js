import React, { Component } from 'react'
import styled from 'styled-components'
import { BlueButton } from '../ButtonStyle'
import axios from 'axios'

const BookPropertyStyle = styled.div`
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
`

class BookProperty extends Component {

    state = {
        properties: [],
        newProperty: {
            streetAdress: '',
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
        axios.post(`/api/users/${this.props.match.params.userId}/properties`, this.state.newProperty).then(res => {
            this.props.history.push(`/time`)
            // /bookajob/${this.props.match.params.userId}
            // NEED TO FIGURE CORRECT PATH FOR POST
            // CORRECT PATH TO PUSH (REDIRECT)
        })
    }

    render() {
        return (
            <BookPropertyStyle>
                <h1>Property</h1>
                <div className="form-container">
                    <form onSubmit={this.handleSubmit}>
                        <label>Street</label>
                        <input
                            onChange={this.handleChange}
                            // value={this.state.property.streetAddress}
                            type="text" name="streetaddress"
                            maxLength="120">
                        </input>
                        {/* <p>Street Address 2 (optional)</p>
                        <input
                        onChange={this.handleChange}
                        value={this.state.property.streetAddress2}
                        type="text" name="streetadress2"
                        maxLength="120">
                        </input> */}
                        <label>City</label>
                        <input
                            onChange={this.handleChange}
                            // value={this.state.property.city}
                            type="text" name="city"
                            maxLength="120">
                        </input>
                        <div className="sub-form-container">
                            <div>
                                <label>State</label>
                                <input
                                    onChange={this.handleChange}
                                    // value={this.state.property.state}
                                    type="text" name="state"
                                    maxLength="120">
                                </input>
                            </div>
                            <div>
                                <label>Zip code</label>
                                <input
                                    onChange={this.handleChange}
                                    // value={this.state.property.zipcode}
                                    type="text" name="zipcode"
                                    maxLength="10">
                                </input>
                            </div>
                        </div>
                        <div className="submit-button">
                            <BlueButton>Next</BlueButton>
                        </div>
                    </form>
                </div>
            </BookPropertyStyle>
        )
    }
}

export default BookProperty