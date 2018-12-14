import React, { Component } from 'react';
import styled from 'styled-components'


const Container = styled.div `
border: solid;
height: 90% ;
width: 70%;
margin-left: 25%;
margin-top: -5px;
position: absolute;
// margin-top: 10px;
`
const Title = styled.h1 `
margin-top: 80px;
`



class UserDashboard extends Component {
    render() {
        return (
            <Container>
              <Title> MY JOBS </Title>
            </Container>
        );
    }
}

export default UserDashboard;