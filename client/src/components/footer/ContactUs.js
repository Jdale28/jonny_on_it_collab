import React, { Component } from 'react'
import styled from 'styled-components'
import { BlueButton } from '../ButtonStyle'
import { FormStyled } from '../FormStyle'

const SplitPage = styled.div`
    display: flex;
`

const ContactStyle = styled.div`
    width: 40vw;
    margin: 3em auto;
    border-left: solid 1px rgba(0,0,0,1);
    display: flex;
    flex-direction: column;
    div {
        margin: 0 0 0 6em;
    }
    h5 {
        font-size: 2.8em;
        color: rgba(14,151,255,1);
        margin: 1em 0 0 0;
    }
    p {
        font-size: 1.6em;
        margin: 0;
    }
`

class ContactUs extends Component {
    render() {
        return (
            <SplitPage>
                <FormStyled>
                    <h1>Contact Us</h1>
                    <div className="form-container">
                        <form>
                            <p>First Name<span className="span">*</span><span className="right">* Required</span></p>
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
                </FormStyled>
                <ContactStyle>
                    <div>
                        <h5>Address</h5>
                        <p>3423 Piedmont Road NE</p>
                        <p>Atlanta, Georgia 30305</p>
                    </div>
                    <div>
                        <h5>Phone</h5>
                        <p>(833) Hi Jonny</p>
                        <p>(833) 445 - 6669</p>
                    </div>
                    <div>
                        <h5>Email</h5>
                        <p>info@jonnyonit.com</p>
                    </div>
                </ContactStyle>

            </SplitPage>
        )
    }
}

export default ContactUs