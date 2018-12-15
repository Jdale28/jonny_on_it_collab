import React, { Component } from 'react'
import styled from 'styled-components'
import { BlueButton } from '../ButtonStyle'
import axios from 'axios'

const BookPropertyStyle = styled.div`
    font-size: .8em;
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
        margin: .2em auto 1em auto;
    }
    .address-bottom {
        display: flex;
        justify-content: space-around;
    }
    .next {
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
            user: 0
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
            this.props.history.push(`/bookajob/${this.props.match.params.userId}/time`)
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
                        <p>Street</p>
                        <input>
                        </input>
                        {/* <p>Street 2 (Optional)</p>
                        <input>
                        </input> */}
                        <p>City</p>
                        <input>
                        </input>
                        <div className="address-bottom">
                            <div>
                                <p>State</p>
                                <input>
                                </input>
                            </div>
                            <div>
                                <p>Zip Code</p>
                                <input>
                                </input>
                            </div>
                        </div>
                        <div className="next">
                            <BlueButton>Next</BlueButton>
                        </div>
                    </form>
                </div>
            </BookPropertyStyle>
        )
    }
}

export default BookProperty