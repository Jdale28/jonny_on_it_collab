import React, { Component } from 'react'
import styled from 'styled-components'
// import { jobtype } from './JobSelection'

const Center = styled.div`
    text-align: center;
    border: 1px solid black;
    width: 60vw;
`

class JobType extends Component {

    render() {

        const electricianOptions = ["Replace Electrical Box", "Replace Switches", "Wiring", "Replace Fixtures"]

        const plumberOptions = ["Clogged Drain", "New Tap", "Cracked Pipe", "Slow or Clogged Drain", "Pipe Blocked", "Clogged Toilet", "Pipe Broken", "Air Locked", "Leaky Hose Bib", "Water Heater", "Sump Pump Failure", "Low Water Pressure", "Dripping Faucet"]

        const cleaningOptions = ["Routine Home Cleaning", "Home Clean Pre-/Post Move", "Home Deep Clean"]

        const pestTermiteOptions = ["Ants", "Termite Letter", "Termite Control", "Mosquito Control", "Vermin/Large Pests"]

        const painterOptions = ["Touch Up", "Trim", "Light Sheetrock/Mud"]

        const carpenterOptions = ["Trim", "Sheetrock", "Windows", "Doors", "Cabinets and Shelving"]

        const rooferOptions = ["Roof Replacement", "Gutters", "Roof Repairs"]

        const heatAirOptions = ["Blocked Vents", "Faulty Thermostat", "AC not cooling", "Pressure Imbalance", "Compressor Failure", "nsulation"]

        // const floorOptions = ["Hardwood Install & Repair", "Carpet Install & Repair", "Tile Install & Repair"]

        // const moldOptions = ["Water Damage Remediation", "Mold Remediation", "BioHazard/Animal Waste Removal", "Other Mold, Water, Bio", "Radon Testing"]

        const otherChoice = "Other"

        // console.log(jobtype, res.data)

            // if (this.props.jobtype === "ELECTRICIAN") {
            //     jobOption = electricianOptions
            // } else if (this.props.jobtype === "PLUMBING") {
            //     jobOption = plumberOptions
            // } else if (this.props.jobtype === "CLEANING") {
            //     jobOption = cleaningOptions
            // } else if (this.props.jobtype === "PEST") {
            //     jobOption = pestTermiteOptions
            // } else if (this.props.jobtype === "PAINTING") {
            //     jobOption = painterOptions
            // } else if (this.props.jobtype === "CARPENTRY") {
            //     jobOption = carpenterOptions
            // } else if (this.props.jobtype === "ROOFING") {
            //     jobOption = rooferOptions
            // } else if (this.props.jobtype === "HVAC") {
            //     jobOption = heatAirOptions
            // } else {
            //     jobOption = otherChoice
            // }

            // else if (this.props.jobtype === "MOLD") {
            //     jobOption = moldOptions
            // } else if (this.props.jobtype === "FLOOR") {
            //     jobOption = floorOptions
            // }

        return (
            <Center>
                <h1>Job Type</h1>
                {this.jobOption.map((jobOption, i) =>
                    <button>{jobOption}</button>
                )}
                <button type="submit">Next</button>
            </Center>
        )
    }
}

export default JobType