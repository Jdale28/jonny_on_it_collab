import React, { Component } from 'react'
import styled from 'styled-components'

const Center = styled.div`
    text-align: center;
    border: 1px solid black;
    width: 60vw;
`

class JobType extends Component {

    componentDidMount() {

    }

    render() {

        const electricianOptions = ["Replace Electrical Box", "Replace Switches", "Wiring", "Replace Fixtures"]

        const plumberOptions = ["Clogged Drain", "New Tap", "Cracked Pipe", "Slow or Clogged Drain", "Pipe Blocked", "Clogged Toilet", "Pipe Broken", "Air Locked", "Leaky Hose Bib", "Water Heater", "Sump Pump Failure", "Low Water Pressure", "Dripping Faucet"]

        const cleaningOptions = ["Routine Home Cleaning", "Home Clean Pre-/Post Move", "Home Deep Clean"]

        const pestTermiteOptions = ["Ants", "Termite Letter", "Termite Control", "Mosquito Control", "Vermin/Large Pests"]

        const painterOptions = ["Touch Up", "Trim", "Light Sheetrock/Mud"]

        const carpenterOptions = ["Trim", "Sheetrock", "Windows", "Doors", "Cabinets and Shelving"]

        const moldWaterBioOptions = ["Water Damage Remediation", "Mold Remediation", "BioHazard/Animal Waste Removal", "Other Mold, Water, Bio", "Radon Testing"]

        const rooferOptions = ["Roof Replacement", "Gutters", "Roof Repairs"]

        const heatAirOptions = ["Blocked Vents", "Faulty Thermostat", "AC not cooling", "Pressure Imbalance", "Compressor Failure", "nsulation"]

        const floorOptions = ["Hardwood Install & Repair", "Carpet Install & Repair", "Tile Install & Repair"]

        const otherChoice = "Other"

        const whichJob = ["ELECTRICIAN", "PLUMBING", "CLEANING", "ETC"]

            if (something === "ELECTRICIAN") {
                jobOption = electricianOptions
            } else if (something === "PLUMBING") {
                jobOption = plumberOptions
            } else if (something === "") {
                jobOption = cleaningOptions
            } else if (something === "") {
                jobOption = pestTermiteOptions
            } else if (something === "") {
                jobOption = painterOptions
            } else if (something === "") {
                jobOption = carpenterOptions
            } else if (something === "") {
                jobOption = moldWaterBioOptions
            } else if (something === "") {
                jobOption = rooferOptions
            } else if (something === "") {
                jobOption = heatAirOptions
            } else if (something === "") {
                jobOption = floorOptions
            } else {
                jobOption = otherChoice
            }

        return (
            <Center>
                <h1>Job Type</h1>
                {this.jobOption.map((jobOption, i) =>
                    <button>{jobOption}</button>
                )}
            </Center>
        )
    }
}

export default JobType