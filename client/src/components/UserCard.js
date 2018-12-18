import React, { Component } from 'react';
import styled from 'styled-components'

const Rectangle = styled.div`
border: solid 1px rgba(112,112,112,1);
font-size: 15px;
width: 995px;
height: 150px;
opacity: 1;
background: rgba(255,255,255,1);
border-radius: 5px 5px 5px 5px;
margin-top: 30px;
`
class UserCard extends Component {
    render() {
        return (
            <div>
                <Rectangle> CARD </Rectangle>
            </div>
        );
    }
}

export default UserCard;