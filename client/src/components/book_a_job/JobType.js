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

class JobType extends Component {
    state = {
        jobOption:[]
      };
    render() {

        const { classes } = this.props;

        const electricianOptions = ["Replace Electrical Box", "Replace Switches", "Wiring", "Replace Fixtures"]

        const plumberOptions = ["Clogged Drain", "New Tap", "Cracked Pipe", "Slow or Clogged Drain", "Pipe Blocked", "Clogged Toilet", "Pipe Broken", "Air Locked", "Leaky Hose Bib", "Water Heater", "Sump Pump Failure", "Low Water Pressure", "Dripping Faucet"]

        const cleaningOptions = ["Routine Home Cleaning", "Home Clean Pre-/Post Move", "Home Deep Clean"]

        const pestTermiteOptions = ["Ants", "Termite Letter", "Termite Control", "Mosquito Control", "Vermin/Large Pests"]

        const painterOptions = ["Touch Up", "Trim", "Light Sheetrock/Mud"]

        const carpenterOptions = ["Trim", "Sheetrock", "Windows", "Doors", "Cabinets and Shelving"]

        const rooferOptions = ["Roof Replacement", "Gutters", "Roof Repairs"]

        const heatAirOptions = ["Blocked Vents", "Faulty Thermostat", "AC not cooling", "Pressure Imbalance", "Compressor Failure", "nsulation"]

        const otherChoice = "Other"

        // LEAVE THESE COMMENTED OUT - WE ARE NOT USING THEM
        // const floorOptions = ["Hardwood Install & Repair", "Carpet Install & Repair", "Tile Install & Repair"]
        // const moldOptions = ["Water Damage Remediation", "Mold Remediation", "BioHazard/Animal Waste Removal", "Other Mold, Water, Bio", "Radon Testing"]

            
            if (this.props.jobtype === "ELECTRICIAN") {
                this.setState.jobOption = electricianOptions
            } else if (this.props.jobtype === "PLUMBING") {
                this.setState.jobOption = plumberOptions
            } else if (this.props.jobtype === "CLEANING") {
                this.setState.jobOption = cleaningOptions
            } else if (this.props.jobtype === "PEST") {
                this.setState.jobOption = pestTermiteOptions
            } else if (this.props.jobtype === "PAINTING") {
                this.setState.jobOption = painterOptions
            } else if (this.props.jobtype === "CARPENTRY") {
                this.setState.jobOption = carpenterOptions
            // } else if (this.props.jobtype === "MOLD") {
            //     this.setState.jobOption = moldOptions
            } else if (this.props.jobtype === "ROOFING") {
                this.setState.jobOption = rooferOptions
            } else if (this.props.jobtype === "HVAC") {
                this.setState.jobOption = heatAirOptions
            } else {
                this.setState.jobOption = otherChoice
            }

        return (
            <Center>
                <h1>Job Type</h1>
                {this.state.jobOption.map((jobOption) =>(
                    <h1>{jobOption}</h1>
                ))}
                <GreenButton type="submit">Next</GreenButton>
            </Center>
        )
    }
}

export default JobType