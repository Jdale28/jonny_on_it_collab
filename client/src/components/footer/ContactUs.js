import React, { Component } from 'react'
import styled from 'styled-components'
import { BlueButton } from '../ButtonStyle'
import { FormStyled } from '../FormStyle'

const ContactStyle = styled.div`

`

class ContactUs extends Component {
    render() {
        return (
            <FormStyled>
                <h2>Contact Us</h2>
                <div className="form-container">
                    <form>
                        <p>First Name<span className="span">*</span><span className="span" className="right">* Required</span></p>
                        <input type="text" />
                        <p>Last Name<span className="span">*</span></p>
                        <input type="text" />
                        <p>Email<span className="span">*</span></p>
                        <input type="text" />
                        <div className="text-area">
                            <p>Details<span className="span">*</span></p>
                            <textarea type="text" columns="45" rows="8" />
                        </div>
                        <div className="submit-button">
                            <BlueButton type="submit">Contact Us</BlueButton>
                        </div>
                    </form>
                </div>
                <ContactStyle>
                    <h4>Adress</h4>
                    <p>3423 Piedmont Road NE</p>
                    <p>Atlanta, Georgia 30305</p>
                    <h4>Phone</h4>
                    <p>(833) Hi Jonny</p>
                    <p>(833) 445 - 6669</p>
                    <h4>Email</h4>
                    <p>info@jonnyonit.com</p>
                </ContactStyle>
            </FormStyled>
        )
    }
}

export default ContactUs