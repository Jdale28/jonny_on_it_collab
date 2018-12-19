import styled from 'styled-components'

export const Button = styled.button`
    font-size: 1.6em;
    width: 8em;
    height: 2em;
    border-radius: .4em;
    box-shadow: 0 5px 8px 0 rgba(0,0,0,0.16);
    border: rgba(14,151,255,1) solid 1px;
    font-weight: bold;
`

export const BlueButton = styled(Button)`
    background-color: rgba(14,151,255,1);
    color: rgba(255,255,255,1);
    :hover {
    background-color: rgba(255,255,255,1);
    color: rgba(14,151,255,1);    
}
`

export const WhiteButton = styled(Button)`
    background-color: rgba(255, 255, 255, 1);
    color: rgba(14, 151, 255, 1);
    :hover {
        background-color: rgba(14, 151, 255, 1);
        color: rgba(255, 255, 255, 1);
}
`

export const RedButton = styled(Button)`
    background-color: rgba(255,0,0,1);
    color: rgba(255,255,255,1);
    border-color: rgba(255,0,0,1);
    :hover {
        background-color: rgba(255,255,255,1);
        color: rgba(255,0,0,1);
    }
`

export const GreenButton = styled(Button)`
    background-color: rgba(19,212,171,1);
    color: rgba(255,255,255,1);
    border-color: rgba(19,212,171,1);
    :hover {
        background-color: rgba(255,255,255,1);
        color: rgba(19,212,171,1);
    }
`

export const NavBookButton = styled(BlueButton)`
    font-size: 32px;
    padding: 69px 51px 68px 52px;
`

export const HowItWorksBookButton = styled(BlueButton)`
    height: 78px;
    width: 366px;
    font-size: 30px;
`

export const ContactUsButton = styled(BlueButton)`
    height: 1em;
`

export const SignInButton = styled(WhiteButton)`
    font-size: 1.4em;
    width: 25vw;
`

export const CreateAccountButton = styled(BlueButton)`
    font-size: 1.4em;
    width: 25vw;
    height: 2.2em;
`

export const SaveAccountDetailsButton = styled(BlueButton)`
    width: auto;
    font-size: 42px;
`

export const UpdatePasswordButton = styled(WhiteButton)`
    width: auto;
    font-size: 35px;
`

export const EditPropertyButton = styled(WhiteButton)`
    width: 206px;
    border-color: rgba(0,0,0,1);
`

export const ViewQuoteButton = styled(WhiteButton)`
    width: 180px;
    color: rgba(0,45,81,1);
    border-color: rgba(0,45,81,1);
`

export const DeclineQuoteButton = styled(RedButton)`
    width: 180px;
`

export const AcceptQuoteButton = styled(GreenButton)`
    width: 180px;
`

export const GoButton = styled(GreenButton)`
    width: 5em;
    height: 2em;
    font-size: 1.7em;
    font-weight: 400;
    color: rgba(0,0,0,1);
    margin: 0 0 0 1em;
`

export const NewsletterButton = styled(GreenButton)`
    width: 6em;
    height: 3em;
    margin: 0 0 0 .5em;
    font-size: 1.2em;
`
