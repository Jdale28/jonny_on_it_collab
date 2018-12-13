import React, { Component } from 'react';
import styled from 'styled-components'
// import axios from 'axios'
// import {Link} from 'react-router-dom'

const Menuitems = styled.div`
border:  none;
height: 70px;
width: 309px;
color: black;
margin-top: 10px;
list-style-type: none;
&:active {
    background-color: rgba(19,212,171,1)
}
`
const Menutitle = styled.h1`
margin-top: 75px;
padding:
`

// import React from 'react';

// const Item = (props) => {
//     return (
//         <Menuitems> <div><li>{props.content}</li></div> </Menuitems>
//     );
// };

// export default Item;

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
                  
               <Menuitems> <div><li>MY JOBS</li></div> </Menuitems>
               <Menuitems> <div><li>INBOX</li></div></Menuitems>
               <Menuitems> <div> <li>INVOICE HISTORY</li></div> </Menuitems> 
               <Menuitems> <div> <li> PREFERRED PROVIDERS</li></div></Menuitems> 
               <Menuitems> <div><li> MANAGE PROPERTIES</li></div> </Menuitems> 
               <Menuitems> <div><li> ACOUNT DETAILS</li></div> </Menuitems> 
               <Menuitems> <div><li>PAYMENT METHOD</li></div></Menuitems> 
               
                </ul>
               
            </div>
         
        );
    }
}

export default UserNavBar;