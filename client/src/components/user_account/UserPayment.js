import React, { Component } from "react";
import styled from "styled-components";
import UserModal from "./UserModal";

import axios from "axios";

const Container = styled.div`
  border: none;
  height: 70vh;
  width: 75vw;
  border: 1px solid black;
`;

class UserPayment extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`/api/users/${id}`).then(res => {
      this.setState({ user: res.data });
    });
  }

  render() {
    return (
      <Container>
        <div>
          <UserModal {...this.state} />
        </div>
      </Container>
    );
  }
}

export default UserPayment;
