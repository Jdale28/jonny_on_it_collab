import React, { Component } from 'react';
import styled from 'styled-components'
import UserNavBar from './UserNavBar'
import UserDashboard from './UserDashboard'

const Container = styled.div `
border: solid;
height: 100vh ;
width: 100vw;
`



class UserAccountPage extends Component {
    render() {
        return (
            <Container>
            <div>
                <UserDashboard></UserDashboard>
               <UserNavBar></UserNavBar>
               
            </div>
            </Container>
        );
    }
}

export default UserAccountPage;