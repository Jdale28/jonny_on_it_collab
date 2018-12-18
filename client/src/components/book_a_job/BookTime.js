import React, { Component } from 'react'
import styled from 'styled-components'
import { RedButton, GreenButton, BlueButton } from '../ButtonStyle'
import Calendar from 'react-calendar'
import axios from 'axios'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

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
    .top-buttons {
        display: flex;
    }
    .slots-content.hidden {
        display: none;
    }
    .time-slot {
        font-size: 1.2em;
        border: 1px solid rgba(114,114,114,1);
        border-radius: .3em;
        width: 30vw;
        height: 2.4em;
        padding: .1em;
        margin: .4em;
        display: flex;
    }
    .time-slot button {
        width: 2em;
        height: 2em;
        border-radius: 50%;
    }
    .time-slot p {
        margin: 0 auto;
        display: flex;
        align-items: center;
    }
    /* .slots-content {
        display: none;
    } */
`

// function showTimes() {
//     var x = document.getElementsByClassName("slots-content");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }

class BookTime extends Component {

    state = {
        date: new Date(),
        showCalendar: false,
        showForm: false
    }

    componentDidMount() {
        axios.get(`/api/jobs/`).then((res) => {
            // ${this.props.match.params.propertyId}
            this.setState({ jobs: res.data })
        })
    }

    handleClick = (e, date) => {
        const today = new Date()
        console.log(today)
        this.setState({ date: date })
        this.toggleSlots()
    }

    onChange = date => {
        this.setState({ date })
        this.toggleSlots()
        console.log(date)
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    toggleCalendar = () => {
        this.setState({ showCalendar: !this.state.showCalendar })
    }

    toggleSlots = () => {
        this.setState({ showSlots: !this.state.showSlots })
    }

    render() {

        return (
            <TimeStyle>
                <h2>Time</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="button-container">
                        <div className="top-buttons">
                            <RedButton
                                type="datetime-local"
                                onClick={(e) => this.handleClick(e, this.value)}
                            >TODAY</RedButton>
                            <GreenButton
                                onClick={this.toggleCalendar}
                            >SCHEDULE</GreenButton>
                            {this.state.showCalendar ? <Calendar
                                value={this.state.date}
                                onChange={this.onChange} /> : null}
                        </div>

                        <div className="slots-content">
                            {this.state.showSlots ?
                                <div className="time-slots">
                                    <div className="time-slot">
                                        <button
                                            onChange={this.handleChange}
                                            value="11 AM - 1 PM">X</button><p>11 AM - 1 PM</p>
                                    </div>
                                    <div className="time-slot">
                                        <button
                                            onChange={this.handleChange}
                                            value="1 PM - 3 PM">X</button><p>1 PM - 3 PM</p>
                                    </div>
                                    <div className="time-slot">
                                        <button
                                            onChange={this.handleChange}
                                            value="3 PM - 5 PM">X</button><p>3 PM - 5 PM</p>
                                    </div>
                                    <div className="time-slot">
                                        <button
                                            onChange={this.handleChange}
                                            value="5 PM - 7 PM">X</button><p>5 PM - 7 PM</p>
                                    </div>
                                </div>
                                : null}
                            <div className="bottom-button">
                                <BlueButton type="submit">Next</BlueButton>
                            </div>
                        </div>
                    </div>
                </form>
            </TimeStyle>
        )
    }
}

export default BookTime