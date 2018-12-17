import React, { Component } from 'react';
import styled from 'styled-components'





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
font-size: 30px;
`
const Paymentbutton = styled.div `
font-size: 23px;
margin-top: -40px;
margin-left: 700px
text-align: center;
width: 200px;
height: 50px;
opacity: 1;
background: rgba(19,212,171,1);
box-shadow: 0px 5px 8px 0px rgba(0,0,0,0.16);
border-radius: 10px;
color: white;
`


class UserPaymentDashboard extends Component {
 

    
  
    render() {
        return (
            <Container>
                 <div></div>
              <Title> PAYMENT METHODS </Title>
               <Paymentbutton> <p> Add New Card </p> </Paymentbutton>
             
           
              
             
          
            </Container>
        );
    }
}

export default UserPaymentDashboard;