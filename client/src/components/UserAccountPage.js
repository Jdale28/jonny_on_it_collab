import React, { Component } from 'react'
import styled from 'styled-components'
import UserNavBar from './UserNavBar'
import UserDashboard from './UserDashboard'
import axios from 'axios'


const Container = styled.div `
border: none;
height: 100vh;
width: 100vw;
`
const Name = styled.div`
margin: 20px;
margin-left: 370px;
`
class UserAccountPage extends Component {

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
            <Container>
            <div>
            <Name> Hello, {this.state.user.name} !</Name>
                <UserDashboard/>
          
             
          
               <UserNavBar/>

            </div>
            </Container>
        );
    }
}

export default UserAccountPage;