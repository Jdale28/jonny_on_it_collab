import React, { Component } from 'react';
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

library.add(faStar)

const Rectangle = styled.div`
border: solid 1px rgba(112,112,112,1);
width: 977px;
height: 150px;
opacity: 1;
background: rgba(255,255,255,1);
border-radius: 5px 5px 5px 5px;
margin-top: 30px;
`
const Smallrectangle = styled.div`
color: white;
width: 977px;
height: 35px;
opacity: 1;
background: rgba(0,45,81,1);
border-radius: 5px 5px 0px 0px;
`


class UserJobs extends Component {
    render() {
        return (
            <div>
               
                <Rectangle>
                <Smallrectangle> <p>Electric Box</p>  
                </Smallrectangle>
                It's Electric  <br/>
                Technician: Maya Jackson <br/>
                 <FontAwesomeIcon className='icon' icon="star" /> <FontAwesomeIcon className='icon' icon="star" />
                <FontAwesomeIcon className='icon' icon="star" /> < FontAwesomeIcon className='icon' icon="star" />
               
                <p>View More Details</p>
                </Rectangle> 
            </div>
        );
    }
}

export default UserJobs;