import React, { Component } from 'react'
import styled from 'styled-components'

const PaymentStyle = styled.div`
    margin: 0 auto;
`

class BookPayment extends Component {
    render() {
        return (
            <PaymentStyle>
                <h1>You are here</h1>
            </PaymentStyle>
        )
    }
}

export default BookPayment