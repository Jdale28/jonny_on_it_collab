import React, { Component } from 'react';
import styled from 'styled-components'

const Rectangle = styled.div`
border: solid 1px rgba(112,112,112,1);
width: 977px;
height: 127px;
opacity: 1;
background: rgba(255,255,255,1);
border-radius: 5px 5px 5px 5px;
`

class UserJobs extends Component {
    render() {
        return (
            <div>
                <Rectangle></Rectangle> 
            </div>
        );
    }
}

export default UserJobs;