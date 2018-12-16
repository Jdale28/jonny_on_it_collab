import React, { Component } from 'react'
import styled from 'styled-components'
import { BlueButton } from '../ButtonStyle'

const ContactUsStyle = styled.div`
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
    .submit-button {
        margin: .4em 0;
        display: flex;
        justify-content: center;
    }
`

class ContactUs extends Component {
    render() {
        return (
            <ContactUsStyle>
                <h2>Contact Us</h2>
                <div className="form-container">
                    <form>
                        <p>First Name</p>
                        <input type="text" placeholder="Required" />
                        <p>Last Name</p>
                        <input type="text" placeholder="Required" />
                        <p>Email</p>
                        <input type="text" placeholder="Required" />
                        <p>Details</p>
                        <textarea type="text" placeholder="Required" />
                        <div className="submit-button">
                            <BlueButton type="submit">Contact Us</BlueButton>
                        </div>
                    </form>
                </div>
            </ContactUsStyle>
        )
    }
}

export default ContactUs