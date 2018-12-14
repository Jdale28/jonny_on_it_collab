import React, { Component } from 'react';
import styled from "styled-components";


const BannerImage = styled.div`
  width: 100%;
  height: 48vh;
  margin-bottom: 3vh;
  background-image: url("https://i.imgur.com/Wrc9gsZ.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
`;

// const ColumnPanel = styled.div`
//     width: 50vw;
//     display: flex;
//     flex-direction: column;
// `;

class SignIn extends Component {
    render() {
        return (
            <div>
                <BannerImage />
                Hello from Sign In Component
            </div>
        );
    }
}

export default SignIn;