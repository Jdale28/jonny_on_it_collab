import React, { Component } from 'react';
import styled from 'styled-components'


const Container = styled.div `
border: solid;
height: 50px ;
width: 50px;
margin-left: 50%;
position: absolute;
margin-top: 50px;
// align-item: right;
// justify-content: right;
`



class UserDashboard extends Component {
    render() {
        return (
            <Container>
             Hello
            </Container>
        );
    }
}

export default UserDashboard;