import React, { Component } from 'react'
import styled from 'styled-components'
import { GreenButton } from '../ButtonStyle'
import StepperforJob from './StepperforJob'
// import { jobtype } from './JobSelection'

const Center = styled.div`
    text-align: center;
    border: 1px solid black;
    width: 60vw;
    `
 export default class JobType extends Component {
        state = {
            electricianOptions: ["Replace Electrical Box", "Replace Switches", "Wiring", "Replace Fixtures"],
            plumberOptions: ["Clogged Drain", "New Tap", "Cracked Pipe", "Slow or Clogged Drain", "Pipe Blocked", "Clogged Toilet", "Pipe Broken", "Air Locked", "Leaky Hose Bib", "Water Heater", "Sump Pump Failure", "Low Water Pressure", "Dripping Faucet"],
            cleaningOptions: ["Routine Home Cleaning", "Home Clean Pre-/Post Move", "Home Deep Clean"],
            pestTermiteOptions: ["Ants", "Termite Letter", "Termite Control", "Mosquito Control", "Vermin/Large Pests"],
            painterOptions: ["Touch Up", "Trim", "Light Sheetrock/Mud"],
            carpenterOptions: ["Trim", "Sheetrock", "Windows", "Doors", "Cabinets and Shelving"],
            rooferOptions: ["Roof Replacement", "Gutters", "Roof Repairs"],
            heatAirOptions: ["Blocked Vents", "Faulty Thermostat", "AC not cooling", "Pressure Imbalance", "Compressor Failure", "nsulation"],
            otherChoice: "Otherz",
            jobOption: [],
            choice: ''
          };


          checkOptions = () => {
            if (this.props.jobtype === "ELECTRICIAN") {
                console.log("Hello")
                console.log(this.state.electricianOptions)
            } else {
                console.log("Hello")
            }
          }
          
  render() {
      let jobOptions = " "
    if (this.props.jobtype === "ELECTRICIAN") {
        jobOptions = this.state.electricianOptions
     } else if (this.props.jobtype === "PLUMBING") {
         jobOptions = this.state.plumberOptions 
    } else if (this.props.jobtype === "CLEANING") {
        jobOptions = this.state.cleaningOptions
    } else if (this.props.jobtype === "PEST") {
        jobOptions = this.state.pestTermiteOptions
    } else if (this.props.jobtype === "PAINTING") {
        jobOptions = this.state.painterOptions
    } else if (this.props.jobtype === "CARPENTRY") {
        jobOptions = this.state.carpenterOptions
    // } else if (this.props.jobtype === "MOLD") {
    //     jobOptions = this.state.moldOptions
    } else if (this.props.jobtype === "ROOFING") {
        jobOptions = this.state.rooferOptions
    } else if (this.props.jobtype === "HVAC") {
        jobOptions = this.state.heatAirOptions
    } else {
        jobOptions = this.state.otherChoice
    }
      
    return (
      <div>
        <h2 onClick={this.checkOptions}>{jobOptions}</h2>
      </div>
    )
  }
}