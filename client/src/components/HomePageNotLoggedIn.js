import React, { Component } from 'react'
import styled from 'styled-components'
import {GoButton} from './ButtonStyle'

const HomeBanner = styled.div`
    background-color: rgba(0,0,0,1);
    /* background: url('./images/home-page-banner.jpg'); */
    width: 100vw;
    height: 50vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    .form-container {
        width: 100vw;
        height: 20vh;
        background-color: rgba(255,255,255,.5);
        display: flex;
        align-items: center;
    }
`

class HomePageNoLoggedIn extends Component {
    render() {
        return (
            <div>
                <HomeBanner>
                    <div className="form-container">
                        <h3>Tell us what you need</h3>
                        <form onSubmit={this.handleSubmit}>
                            <input placeholder="Housekeeping, Plumbing ...">
                            </input>
                            <GoButton>Go</GoButton>
                        </form>
                    </div>
                </HomeBanner>
            </div >
        )
    }
}

export default HomePageNoLoggedIn