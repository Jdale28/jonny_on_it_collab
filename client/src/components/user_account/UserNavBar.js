import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios'
import {Link} from 'react-router-dom'



const Menuitems = styled.div`

border:  none;
height: 70px;
width: 309px;
color: black;
font-size: 18px;
margin-top: 0px;
list-style-type: none;
:hover{
    background-color: rgba(19,212,171,1)
}
:active {
    background-color: rgba(19,212,171,1)
}

font-family: 'athletics', arial, sans-serif;
`
const Menutitle = styled.h1`
margin-top: 75px;
margin-left: 0px;
font-size: 30px;
`
const Backgrounddiv = styled.div`
background-color: whitesmoke;
width: 23%;
margin-left: 0px;
// position: relative;
// margin-top: -50px;

`

class UserNavBar extends Component {

    
    // state = {
    //     clicked: false
    // }
    // changeColor = () => {
    //    this.setState({clicked: !this.state.clicked})
    // }
    render() {
        // const clickedStyles = {
        //     backgroundColor: this.state.clicked ? 'rgba(19,212,171,1)' : 'white' 
        // }
      
        return (
            <div>
               <Menutitle>  MY ACCOUNT </Menutitle>
                <ul>
                  <Backgrounddiv>
            <Link {...this.props} to={`/useraccountpage/${this.props.id}/jobs`}><Menuitems> <div><li>MY JOBS</li></div> </Menuitems> </Link> 
            <Link {...this.props} to={`/useraccountpage/${this.props.id}/inbox`}> <Menuitems> <div><li>INBOX</li></div></Menuitems></Link> 
            <Link {...this.props} to={`/useraccountpage/${this.props.id}/invoices`}> <Menuitems> <div> <li>INVOICE HISTORY</li></div> </Menuitems> </Link> 
            <Link {...this.props} to={`/useraccountpage/${this.props.id}/providers`}> <Menuitems> <div> <li> PREFERRED PROVIDERS</li></div></Menuitems> </Link> 
            <Link {...this.props} to={`/useraccountpage/${this.props.id}/properties`}><Menuitems> <div><li> MANAGE PROPERTIES</li></div> </Menuitems> </Link> 
            <Link {...this.props} to={`/useraccountpage/${this.props.id}/details`}><Menuitems> <div><li> ACOUNT DETAILS</li></div> </Menuitems> </Link>    
            <Link {...this.props} to={`/useraccountpage/${this.props.id}/payments`}><Menuitems> <div><li>PAYMENT METHOD</li></div></Menuitems> </Link> 
               </Backgrounddiv>
                </ul>
            </div>
        );
    }
}

export default UserNavBar;