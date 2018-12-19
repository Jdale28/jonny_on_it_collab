import React, { Component } from 'react';
import styled from 'styled-components'


const Rectangle = styled.div`
border: solid 1px rgba(112,112,112,1);
font-size: 15px;
width: 850px;
height: 350px;
opacity: 1;
background: rgba(255,255,255,1);
border-radius: 5px 5px 5px 5px;
margin-top: 30px;
`
const Smallrectangle = styled.div`
font-size: 25px;
color: white;
width: 850px;
height: 55px;
opacity: 1;
background: rgba(0,45,81,1);
border-radius: 5px 5px 0px 0px;
`
const Smallt = styled.div`
font-size: 25px;
color: black;
width: 300px;
height: 155px;
border: solid;
margin-left: 250px;
`
const MiddlePanel = styled.div`
  .middle-bar {
    border: 1px solid black;
    width: 1px;
    height: 37vh;
    opacity: 0.5;
    margin-bottom: 3vh;
  }
`



class UserQuote extends Component {
    render() {
        return (
            <div>
               
                <Rectangle>
                <Smallrectangle> <p>Quote </p>  
                </Smallrectangle>
                {/* It'3s Electric  <br/>
                Technician: Maya Jackson <br/> */}
                 <Smallt>
                   <MiddlePanel> </MiddlePanel>
                      
                 </Smallt>
                 
                </Rectangle> 
            </div>
        );
    }
}
export default UserQuote;