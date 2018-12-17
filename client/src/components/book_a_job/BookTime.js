import React, { Component } from 'react'
import styled from 'styled-components'
import { RedButton, GreenButton, BlueButton } from '../ButtonStyle'
import axios from 'axios'

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
        margin: 100px;
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
    /* .time-slot, p.hidden {
        display: none;
    } */
`

class BookTime extends Component {

    state = {
        property: {}
    }

    componentDidMount() {
        axios.get(`/api/properties/${this.props.match.params.propertyId}`).then((res) => {
            this.setState({ property: res.data })
        })
    }

    handleChange = (event) => {
        const updatedChangeProperty = { ...this.state.property }
        updatedChangeProperty[event.target.time] = event.target.value
        this.setState({ property: updatedChangeProperty })
    }

    handleUpdate = (event) => {
        event.preventDefault()
        axios.patch(`/api/properties/${this.props.match.params.propertyId}`, this.state.property).then(res => {
            this.props.history.push(`/bookpayment`)
            // /properties/${res.data._id}
        })
    }

    render() {

        // function showTimes() {
        //     var x = document.getElementByClass("time-slots");
        //     if (x.style.display === "none") {
        //       x.style.display = "block";
        //     } else {
        //       x.style.display = "none";
        //     }
        //   }

        // onClick={showTimes()}

        return (
            <TimeStyle>
                <h2>Time</h2>
                <div className="button-container">
                    <div classname="top-buttons">
                        <RedButton>TODAY</RedButton>
                        <GreenButton>SCHEDULE</GreenButton>
                    </div>
                    <div className="date-bar"></div>
                    <form onSubmit={this.handleUpdate}>
                        <div className="time-slots">
                            <form className="slots-content">
                                <div className="time-slot">
                                    <button
                                        onChange={this.handleChange}
                                        value="9 AM - 11 AM">X</button><p>9 AM - 11 AM</p>
                                </div>
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
                                <div className="bottom-button">
                                    <BlueButton type="submit">Next</BlueButton>
                                </div>
                            </form>
                        </div>
                        {/* {!this.state.isHidden && <Child />} */}
                    </form>
                </div>

            </TimeStyle>
        )
    }
}
// const Child = () => (
//                     <div className="time-slots">
//                         <form className="slots-content">
//                             <div className="time-slot">
//                                 <button>X</button><p>9 AM - 11 AM</p>
//                             </div>
//                             <div className="time-slot">
//                                 <button>X</button><p>11 AM - 1 PM</p>
//                             </div>
//                             <div className="time-slot">
//                                 <button>X</button><p>1 PM - 3 PM</p>
//                             </div>
//                             <div className="time-slot">
//                                 <button>X</button><p>3 PM - 5 PM</p>
//                             </div>
//                             <div className="time-slot">
//                                 <button>X</button><p>5 PM - 7 PM</p>
//                             </div>
//                             <div classname="bottom-button">
//                                 <BlueButton type="submit">Next</BlueButton>
//                             </div>
//                         </form>
//                     </div>
//                     )

// const app = document.getElementById('app')
export default BookTime