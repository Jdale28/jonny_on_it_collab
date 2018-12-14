import React, { Component } from 'react'
import styled from 'styled-components'
import { BlueButton } from '../ButtonStyle'

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
    render() {
        return (
            <BookPropertyStyle>
                <h1>Property</h1>
                <div className="form-container">
                    <form onSubmit={this.handleSubmit}>
                        <p>Street</p>
                        <input>
                        </input>
                        <p>Street 2 (Optional)</p>
                        <input>
                        </input>
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