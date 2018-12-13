import React, { Component } from 'react';
import styled from 'styled-components'
// import axios from 'axios'
// import {Link} from 'react-router-dom'
const Menuitems = styled.div `
border: solid;
height: 70px;
width: 300px;

`

class UserNavBar extends Component {
    render() {
        return (
            <div>
                <ul>
               <Menuitems> <div><li>My Jobs</li></div> </Menuitems>
               <Menuitems> <div><li>Inbox</li></div></Menuitems>
               <Menuitems> <div> <li>Invoice History</li></div> </Menuitems> 
               <Menuitems>   <div> <li> Preferred Providers</li></div></Menuitems> 
               <Menuitems> <div><li>Manage Properties</li></div> </Menuitems> 
               <Menuitems>   <div><li>Account Details</li></div> </Menuitems> 
               <Menuitems>    <div><li>Payment Methods</li></div></Menuitems> 
                </ul>
            </div>
        );
    }
}

export default UserNavBar;