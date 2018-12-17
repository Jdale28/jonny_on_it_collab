import React, { Component } from 'react';
import styled from 'styled-components'
import UserJobs from './UserJobs'




const Container = styled.div `
border: none;
height: 90% ;
width: 70%;
margin-left: 25%;
margin-top: -5px;
position: absolute;
// margin-top: 10px;
`
const Title = styled.h1 `
margin-top: 80px;
font-size: 25px;
`
const Job = styled.div `
font-size: 20px;
margin-top: 20px;

border: solid 1px rgba(112,112,112,1);
width: 400px;
height: 50px;
opacity: 1;
background: rgba(255,255,255,1);
border-radius: 5px 5px 5px 5px;
color: rgba(66,66,66,1);
`


class UserDashboard extends Component {
 

    
  
    render() {
        return (
            <Container>
                
              <Title> MY JOBS </Title>
              {/* <DropDown/> */}
              <Job> <p>ACTIVE </p> </Job>
             
              <UserJobs/>
            </Container>
        );
    }
}

export default UserDashboard;