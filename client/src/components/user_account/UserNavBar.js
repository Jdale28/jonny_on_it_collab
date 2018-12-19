import React, { Component } from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const FullNavBar = styled.div`
  width: 23vw;
`;
const Menuitems = styled.div`
  height: 70px;
  width: 20vw;
  color: black;
  font-size: 18px;
  margin-top: 0px;
  list-style-type: none;
  :hover {
    background-color: rgba(19, 212, 171, 1);
  }
  :active {
    background-color: rgba(19, 212, 171, 1);
  }
  position: relative;
  font-family: "athletics", arial, sans-serif;
`;
const Menutitle = styled.h1`
  font-size: 30px;
`;
const Backgrounddiv = styled.div`
  background-color: whitesmoke;
  width: 20vw;
`;

class UserNavBar extends Component {
    render() {
        return (
            <FullNavBar>
               <Menutitle>MY ACCOUNT</Menutitle>
                <Backgrounddiv>
                    <Link to={`/useraccountpage/${this.props.user.id}/jobs`}><Menuitems> <div><li>MY JOBS</li></div> </Menuitems> </Link> 
                    {/* <Link to={`/useraccountpage/${this.props.user.id}/inbox`}> <Menuitems> <div><li>INBOX</li></div></Menuitems></Link> 
                    <Link to={`/useraccountpage/${this.props.user.id}/invoices`}> <Menuitems> <div> <li>INVOICE HISTORY</li></div> </Menuitems> </Link> 
                    <Link to={`/useraccountpage/${this.props.user.id}/providers`}> <Menuitems> <div> <li> PREFERRED PROVIDERS</li></div></Menuitems> </Link>  */}
                    <Link to={`/useraccountpage/${this.props.user.id}/properties`}><Menuitems> <div><li> MANAGE PROPERTIES</li></div> </Menuitems> </Link> 
                    <Link to={`/useraccountpage/${this.props.user.id}/details`}><Menuitems> <div><li> ACOUNT DETAILS</li></div> </Menuitems> </Link>    
                    <Link to={`/useraccountpage/${this.props.user.id}/payments`}><Menuitems> <div><li>PAYMENT METHOD</li></div></Menuitems> </Link> 
               </Backgrounddiv>
            </FullNavBar>
        );
    }
}

export default UserNavBar;