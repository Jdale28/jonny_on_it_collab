import React, { Component } from 'react';
import styled from 'styled-components'
import UserNavBar from './UserNavBar'

const Container = styled.div `
border: solid;
height: 1401px ;
width: 1920px;
`


class UserAccountPage extends Component {
    render() {
        return (
            <Container>
            <div>
               <UserNavBar></UserNavBar>
            </div>
            </Container>
        );
    }
}

export default UserAccountPage;