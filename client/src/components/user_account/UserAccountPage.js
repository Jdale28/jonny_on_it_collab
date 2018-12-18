import React, { Component } from 'react'
import styled from 'styled-components'
import UserNavBar from './UserNavBar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios'
import UserProperties from './UserProperties';
import UserPayment from './UserPayment';
import UserJobs from './UserJobs';



const Container = styled.div `
height: 80vh;
width: 100vw;
`
const NavBarAndComponent = styled.div `
height: 100vh;
width: 100vw;
display: flex;
`
const Name = styled.div`
color:  rgba(14,151,255,1);
font-size: 35px;
font-weight: bold;
margin: 20px;
margin-left: 361px;
margin-top: 15px;
`
class UserAccountPage extends Component {
    state = {
        user: {}
    }

    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`/api/users/${id}`).then(res => {
            this.setState({user: res.data})
            // const expandState = res.data
            // localStorage.setItem('user', JSON.stringify(expandState))
        })
    }
   
    render() {
        return (
            <Router>
            <Container>
            <Name> Hello, {this.state.user.name}!</Name>
            <NavBarAndComponent><UserNavBar {...this.state}/>
            <Switch>
            <Route exact path="/useraccountpage/:id/payments" component={UserPayment}/>
            <Route exact path="/useraccountpage/:id/properties" component={UserProperties}/>
            <Route exact path="/useraccountpage/:id/jobs" component={UserJobs}/>
            </Switch></NavBarAndComponent>
            </Container>
            </Router>
        );
    }
}

export default UserAccountPage;