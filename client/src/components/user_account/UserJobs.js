import React, { Component } from 'react';
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


library.add(faStar)

const Rectangle = styled.div`
border: solid 1px rgba(112,112,112,1);
font-size: 15px;
width: 995px;
height: 150px;
opacity: 1;
background: rgba(255,255,255,1);
border-radius: 5px 5px 5px 5px;
margin-top: 30px;
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
const ViewQuoteButton = styled.button`
    width: 150px;
    height: 40px;
    color: rgba(0,45,81,1);
    border-color: rgba(0,45,81,1);
    margin-left: 840px;
    margin-top: -80%;
    border-radius: 5px;
`
const Title = styled.h1`
  margin-top: 80px;
  font-size: 25px;
`;
const Job = styled.div`
  font-size: 20px;
  margin-top: 20px;
  border: solid 1px rgba(112, 112, 112, 1);
  width: 400px;
  height: 50px;
  opacity: 1;
  background: rgba(255, 255, 255, 1);
  border-radius: 5px 5px 5px 5px;
  color: rgba(66, 66, 66, 1);
`;


class UserJobs extends Component {
    render() {
        return (
            <div>
                <Title> MY JOBS </Title>
              {/* <DropDown/> */}
              <Job> <p>ACTIVE </p> </Job>
                <Rectangle>
                <Smallrectangle> <p>Electric Box</p>  
                </Smallrectangle>
                It's Electric  <br/>
                Technician: Maya Jackson <br/>
                 <FontAwesomeIcon className='icon' icon="star" /> <FontAwesomeIcon className='icon' icon="star" />
                <FontAwesomeIcon className='icon' icon="star" /> < FontAwesomeIcon className='icon' icon="star" />
                 <div> <ViewQuoteButton> View Quote</ViewQuoteButton> </div>
                <p>View More Details</p>
                </Rectangle> 
                {/* UserQuotes IMPORTED HERE? */}
            </div>
        );
    }
}

export default UserJobs;