import React, { Component } from 'react'
import styled from 'styled-components'

const Guarantee = styled.div`
    margin: 4em 0 .4em 3em;
    color: rgba(112,112,112,1);
    h1 {
        color: rgba(14,151,255,1);
        font-size: 4em;
    }
    p {
        font-size: 2.5em;
        margin: 2em auto;
    }
`

class OurGuarantee extends Component {
    render() {
        return (
            <div>
                <Guarantee>
                    <h1>The Jonny On It Guarantee</h1>
                    <p>We want Jonny On It to be the quickest, most dependable way for homeowners and realtors to connect with service providers. All Jonny On It vendors have passed a comprehensive background check, have valid liability insurance and receive honest ratings/reviews. We guarantee that if you’re not completely satisfied with Jonny On It, we’ll work with you to make it right.</p>
                </Guarantee>
            </div>
        )
    }
}

export default OurGuarantee