import React, { Component } from 'react'
import styled from 'styled-components'
import { GreenButton } from '../ButtonStyle'
import StepperforJob from './StepperforJob'
import { Button } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';
import Property from './BookProperty'

      const Center = styled.div`
      text-align: center;
      width: 60vw;
      `

const styles = theme => ({
    root: {
      width: '65%',
  
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  });

 class JobType extends Component {

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
        subcatagory: [],
        choice: '',
        expanded: null,
        activeStep: 1,
      };
      
      handleChange = panel => (event, expanded) => {
        this.setState({
          expanded: expanded ? panel : false,
        });
      };
      handleNext = () => {
        this.setState(state => ({
          activeStep: state.activeStep + 1,
        }));
      };
    
      handleBack = () => {
        this.setState(state => ({
          activeStep: state.activeStep - 1,
        }));
      };
    
      handleReset = () => {
        this.setState({
          activeStep: 0,
        });
      };

      checkOptions = (e,subcatagory) => {
          this.setState({
              subcatagory: subcatagory,
              job: this.props.jobype
          })
        console.log(subcatagory)
      }
        
       
  render() {
    let jobOptions = []
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
    console.log(jobOptions)

    const { classes } = this.props;
    const { expanded } = this.state;
  
  
    return (
        <div>
      <Center>
      {this.props.selected ? (jobOptions.map((subcatagory)=>{
        return(
          <Button
          variant="contained"
          style={{backgroundColor: '#13d4ab'}}
          onClick={(e) => {this.checkOptions(e,subcatagory); this.handleNext();}}
          // {console.log(jobOptions)}
          >{subcatagory}</Button>
        )
    })) : null }
      </Center>
      <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>Property</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          <Property{...this.state}{...this.props} />
            </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
      </div>
    )
  }
}
export default withStyles(styles)(JobType);