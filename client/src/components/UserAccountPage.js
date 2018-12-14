import React, { Component } from 'react'
import styled from 'styled-components'
import UserNavBar from './UserNavBar'
import UserDashboard from './UserDashboard'
import UserActiveJobs from './UserActiveJobs'

import axios from 'axios'


const Container = styled.div `
border: solid;
height: 100vh;
width: 100vw;
`



class UserAccountPage extends Component {

    state = {
        user: {}
    }

    componentDidMount(){
        const id = this.props.match.params.id
        
        axios.get(`/api/users/${id}`).then(res => {
            this.setState({user: res.data})
        })

    }
   
    render() {
        return (
            <Container>
            <div>
                <UserDashboard/>
          
                <h1>{this.state.user.name}</h1>
          
               <UserNavBar/>

            </div>
            </Container>
        );
    }
}

export default UserAccountPage;