import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StepperforJob from "./StepperforJob"
import styled from  "styled-components"
import { Button } from '@material-ui/core';
import { IncomingMessage } from 'http';
import JobType from './JobType'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Paper from '@material-ui/core/Paper';

const Wrapper = styled.div`
display: flex;
justify-content: space-evenly; 
*{margin: 0};
`
const Center = styled.div`
    text-align: center;
    width: 60vw;
    `
const IconsBox = styled.div`
     display: grid;
  grid-template-columns: 100px 100px 100px 100px 100px;
  grid-template-rows: 100px 100px;
  grid-template-areas: ". . . . ." ". . . . .";
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
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
});

function getSteps() {
  return ['Book a Job', 'Job Type', 'Property', "Time", 'Payment'];
}

function getStepContent(step) {
  switch (step) {
    case 0:

    case 1:

    case 2:

    case 3:

    case 4:

    default:

  }
}
class JobSelection extends React.Component {
  state = {
    expanded: null,
    activeStep: 0,
    jobs: ["ELECTRICIAN", "PLUMBING", "CLEANING", "PEST", "PAINTING", "CARPENTRY", "ROOFING", "HVAC", "HANDYMAN"],
    jobtype: "",
    myJob:[],
    selected: false

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


  handleClick = (e, job) =>{
    this.setState({
      jobtype: job,
      myJob: job,
      selected: true
    })

  }
render() {
    const { classes } = this.props;
    const { expanded } = this.state;
    const steps = getSteps();
    const { activeStep } = this.state;
  
    return (
      <Wrapper>
        <div>
        <p>Which Job is it? {this.state.jobtype}</p>
        <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed </Typography>
          </Paper>
        )}
      </div>
      </div>
      <div className={classes.root}>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Book a Job</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <Center>
            <Typography>
            { this.state.jobs.map((job) => (
            <Button variant="contained"
                        name={job}
                        value={job}
                        style={{backgroundColor: '#13d4ab'}}
                        onClick={(e) => {this.handleClick(e ,job);this.handleNext();}}
                        className={classes.button}>{job}</Button>
            ))}
          </Typography>
          </Center>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>Job Type
            </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          <JobType {...this.state} />
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    </div>
      </Wrapper>
      );
  }
}
JobSelection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JobSelection);