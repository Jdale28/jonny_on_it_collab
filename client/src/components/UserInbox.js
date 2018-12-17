import React, { Component } from 'react'
import styled from 'styled-components'
import UserNavBar from './UserNavBar'
import axios from 'axios'



const Name = styled.div`
color:  rgba(14,151,255,1);
font-size: 35px;
font-weight: bold;
margin: 20px;
margin-left: 361px;
margin-top: 15px;
postion: fixed;
font-family: 'athletics', arial, sans-serif;
`
const Rectangle = styled.div`
border: solid 1px rgba(112,112,112,1);
font-size: 15px;
width: 995px;
height: 150px;                   
opacity: 1;
background: rgba(255,255,255,1);
border-radius: 5px 5px 5px 5px;

`
const Smallrectangle = styled.div`
font-size: 20px;
color: white;
width: 995px;
height: 35px;
opacity: 1;
background: rgba(0,45,81,1);
border-radius: 5px 5px 0px 0px;
`
class UserInbox extends Component {

    state = {
        user: {}
    }

    componentDidMount(){
        const id = this.props.match.params.id
        
        axios.get(`/api/users/${id}`).then(res => {
            console.log(res)
            this.setState({user: res.data})
        })

    }
   
    render() {
        return (
        
            <div>
            <UserNavBar/> 
            <Name> HELLO, {this.state.user.name} !</Name>
            <Rectangle>
                 <Smallrectangle></Smallrectangle>
             </Rectangle>
               
               

            </div>

        );
    }
}

export default UserInbox;