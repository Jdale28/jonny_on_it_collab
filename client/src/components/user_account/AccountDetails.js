import React, { Component } from "react";
import styled from "styled-components";
import { FormStyled } from "../FormStyle";
import axios from "axios";
import { SaveAccountDetailsButton } from "../ButtonStyle";
import { UpdatePasswordButton } from "../ButtonStyle";


const PageStyle = styled.div`
  height: 70vh;
  width: 75vw;
  .header {
    margin-top: 3vh;
    font-size: 40px;
    margin-bottom: 5vh;
  }
  .deleteButton {
    margin-top: 5vw;
    font-size: 22px;
    width: 10vw;
  }
`;
const UserPhotoFormsFlex = styled.div`
  display: flex;
  justify-content: space-between;
  .photo {
    border: 1px solid black;
    height: 35vh;
    width: 20vw;
    border-radius: 50%;
    background-image: url(https://timedotcom.files.wordpress.com/2015/09/matt-damon3.jpg);
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .editUser {
    height: 35vh;
    width: 25vw;
  }
  .editPassword {
    height: 35vh;
    width: 25vw;
  }
  .form-container {
    width: 25vw;
  }
  .password-container {
    width: 20vw;
  }
`;

const EditUserSaveFlex = styled.div`
  display: flex;
  flex-direction: column;
  .saveButton {
    margin-left: 5vw;
    font-size: 25px;
    width: 12vw;
    height: 4vh;
  }
  .passwordButton {
    margin-left: 7vw;
    font-size: 21px;
    width: 12vw;
    height: 4vh;
  }
`;

class AccountDetails extends Component {
  state = {
    user: {},
    updatedUser: {
      name: "",
      email: "",
      phonenumber: "",
      password: "",
      oldPassword: '',
      newPassword: '',
      newPasswordTwo: ''
    }
  };

  componentDidMount() {
    this.getAllUserData()
}

getAllUserData = () => {
    const url = `/api/users/${this.props.match.params.id}`
    axios.get(url).then(res => {
        this.setState({ user: res.data })
    })
}

  handleChange = event => {
    event.preventDefault();
    const updatedNewUser = { ...this.state.updatedUser };
    updatedNewUser[event.target.name] = event.target.value;
    this.setState({ updatedUser: updatedNewUser });
  };

  handleSubmitUser = event => {
    event.preventDefault();
    const userId = this.props.match.params.id
    const payload = {
      name: this.state.updatedUser.name,
      email: this.state.updatedUser.email,
      phonenumber: this.state.updatedUser.phonenumber,
      password: this.state.user.password
    };
    axios.patch(`/api/users/${userId}/`, payload).then(res => {
      console.log(res)
      this.getAllUserData();
      console.log("Successful Patch")
    });
  };

  handleSubmitPassword = event => {
    event.preventDefault();
    const userId = this.props.match.params.id
    const payload = {
      name: this.state.user.name,
      email: this.state.user.email,
      phonenumber: this.state.user.phonenumber,
      password: this.state.updatedUser.newPasswordTwo
    };
    axios.patch(`/api/users/${userId}/`, payload).then(res => {
      console.log(res)
      this.getAllUserData();
      console.log("Successful Patch")
    });
  };

  handleDelete = (id) => {
    const userId = this.props.match.params.id
    axios.delete(`/api/users/${userId}`).then(() => {
      console.log("Successful Delete")
        // Redirect to the homepage
  })}

  render() {
    return (
      <PageStyle>
        <div className="header">ACCOUNT DETAILS</div>
        <UserPhotoFormsFlex>
          <div className="photo" />
          <EditUserSaveFlex>
            <FormStyled>
              <h2>Your Information</h2>
              {/* Name Input */}
              <form className="form-container">
                <form onSubmit={this.handleSubmitUser}>
                  <label>
                    Full Name<span className="span"> *</span>
                  </label>
                  <span className="right">* Required</span>
                  <input
                    onChange={this.handleChange}
                    value={this.state.updatedUser.name}
                    type="text"
                    name="name"
                    placeholder={this.state.user.name}
                    maxLength="30"
                  />
              </form>
              {/* Email Input */}
              <form className="form-container">
                  <label>
                    Email<span className="span"> *</span>
                  </label>
                  <span className="right">* Required</span>
                  <input
                    onChange={this.handleChange}
                    value={this.state.updatedUser.email}
                    type="email"
                    name="email"
                    placeholder={this.state.user.email}
                    maxLength="30"
                  />
                
              </form>
              {/* Phone Number */}
              <form className="form-container">
                  <label>
                    Phone Number<span className="span"> *</span>
                  </label>
                  <span className="right">* Required</span>
                  <input
                    onChange={this.handleChange}
                    value={this.state.updatedUser.phonenumber}
                    type="text"
                    name="phonenumber"
                    placeholder={this.state.user.phonenumber}
                    maxLength="30"
                  />
                </form>
              </form>
            </FormStyled>
              <SaveAccountDetailsButton onClick={this.handleSubmitUser} className="saveButton">Save Edits</SaveAccountDetailsButton>
          </EditUserSaveFlex>

          <div className="editPassword">
          <EditUserSaveFlex>
            <FormStyled>
              <h2>Update Your Password</h2>
              {/* Name Input */}
              <form className="form-container password-container">
                <form onSubmit={this.handleSubmitUser}>
                  <label>
                    Password<span className="span"> *</span>
                  </label>
                  <span className="right">* Required</span>
                  <input
                    onChange={this.handleChange}
                    value={this.state.updatedUser.oldPassword}
                    type="password"
                    name="oldPassword"
                    maxLength="30"
                  />
              </form>
              {/* Email Input */}
              <form className="form-container password-container">
                  <label>
                    New Password<span className="span"> *</span>
                  </label>
                  <span className="right">* Required</span>
                  <input
                    onChange={this.handleChange}
                    value={this.state.updatedUser.newPassword}
                    type="password"
                    name="newPassword"
                    maxLength="30"
                  />
                
              </form>
              {/* Phone Number */}
              <form className="form-container password-container">
                  <label>
                    Confirm New Password<span className="span"> *</span>
                  </label>
                  <span className="right">* Required</span>
                  <input
                    onChange={this.handleChange}
                    value={this.state.updatedUser.newPasswordTwo}
                    type="password"
                    name="newPasswordTwo"
                    maxLength="30"
                  />
                </form>
              </form>
            </FormStyled>
              <UpdatePasswordButton onClick={this.handleSubmitPassword} className="passwordButton">Update Password</UpdatePasswordButton>
          </EditUserSaveFlex>
          </div>
        </UserPhotoFormsFlex>
        <SaveAccountDetailsButton onClick={this.handleDelete} className='deleteButton'>Delete User</SaveAccountDetailsButton>
      </PageStyle>
    );
  }
}

export default AccountDetails;
