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
        updatedChangeProperty[event.target.name] = event.target.value
        this.setState({ property: updatedChangeProperty })
    }

    handleUpdate = (event) => {
        event.preventDefault()
        axios.patch(`/api/properties/${this.props.match.params.propertyId}`, this.state.property).then(res => {
            this.props.history.push(`/properties/${res.data._id}/payment`)
        })
    }

    render() {

        // function myFunction() {
        //     var x = document.getElementBy("time-slots");
        //     if (x.style.display === "none") {
        //       x.style.display = "block";
        //     } else {
        //       x.style.display = "none";
        //     }
        //   }

        // onclick={myFunction()}

        return (
            <TimeStyle>
                <h2>Time</h2>
                <div className="button-container">
                    <div classname="topbuttons">
                        <RedButton>TODAY</RedButton>
                        <GreenButton>SCHEDULE</GreenButton>
                    </div>
                    <div className="date-bar"></div>
                    <div className="time-slots">
                        <form className="slots-content">
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
                                <BlueButton type="submit">Next</BlueButton>
                            </div>
                        </form>
                    </div>
                    {/* {!this.state.isHidden && <Child />} */}
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