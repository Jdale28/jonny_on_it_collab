import React, { Component } from 'react'
import { BlueButton } from '../ButtonStyle'
import { FormStyled } from '../FormStyle'
import axios from 'axios'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

class BookProperty extends Component {

    state = {
        users: [],
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
        const updatedNewProperty = { ...this.state.newProperty }
        updatedNewProperty[event.target.name] = event.target.value
        console.log(updatedNewProperty)
        this.setState({ newProperty: updatedNewProperty })
    }

    handleSubmit = (event) => {
        // const below was for testing post - remove
        const userId = 1
        const payload = {
            streetAddress: this.state.newProperty.streetAddress,
            city: this.state.newProperty.city,
            state: this.state.newProperty.state,
            zipcode: this.state.newProperty.zipcode,
            user: userId
        }
        axios.post(`/api/properties/`, payload).then(res => {
            const newProperty = res.data
            const newUserProperty = [...this.state.properties, newProperty]
            this.setState({ properties: newUserProperty })
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
                        type="text" name="streetaddress2"
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
                            <BlueButton>Next</BlueButton>
                        </div>
                    </form>
                </div>
            </FormStyled>
        )
    }
}

export default BookProperty