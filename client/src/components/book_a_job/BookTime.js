import React, { Component } from 'react'
import styled from 'styled-components'
import { RedButton, GreenButton, BlueButton } from '../ButtonStyle'

const TimeStyle = styled.div`
    font-size: .8em;
    text-align: center;
    width: 60vw;
    height: 60vh;
    margin: 3em auto;
    .button-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 20px;
        justify-content: space-between;
    }
    .topbuttons {
        display: flex;
        margin: 100px;
    }
    .time-slot {
        font-size: 1.2em;
        border: 1px solid rgba(114,114,114,1);
        border-radius: .6em;
        width: 20vw;
        margin: .2em;
        display: flex;
    }
    .time-slot button {
        width: 2em;
        height: 2em;
        border-radius: 50%;
    }
`

class BookTime extends Component {
    render() {
        return (
            <TimeStyle>
                <h2>Time</h2>
                <div className="button-container">
                    <div classname="topbuttons">
                        <RedButton>TODAY</RedButton>
                        <GreenButton>SCHEDULE</GreenButton>
                    </div>
                    <div className="time-slots">
                        <form>
                            <div className="time-slot">
                                <button>X</button><p>9 AM - 11 AM</p>
                            </div>
                            <div className="time-slot">
                                <button>X</button><p>11 AM - 1 PM</p>
                            </div>
                            <div className="time-slot">
                                <button>X</button><p>1 PM - 3 PM</p>
                            </div>
                            <div className="time-slot">
                                <button>X</button><p>3 PM - 5 PM</p>
                            </div>
                            <div className="time-slot">
                                <button>X</button><p>5 PM - 7 PM</p>
                            </div>
                            <div classname="bottom-button">
                                <BlueButton>Next</BlueButton>
                            </div>
                        </form>
                    </div>
                </div>
            </TimeStyle>
        )
    }
}

export default BookTime