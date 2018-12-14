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

const Wrapper = styled.div`
display: flex;
justify-content: space-evenly; 
*{margin: 0};
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
});

class JobSelection extends React.Component {
  state = {
    expanded: null,
    jobs: ["ELECTRICIAN", "PLUMBING","CLEANING","PEST","PAINTING","CARPENTRY","ROOFING","HVAC","HANDYMAN"],
    jobtype:''
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };
  
//   handleClick = (event) =>{
//     this.setState({
//     jobtype: jobtype
//   });
//  };


  render() {
    const { classes } = this.props;
    const { expanded } = this.state;



    return (
      <Wrapper>
        <div>
      <StepperforJob/>
      </div>
      <div className={classes.root}>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Book a Job</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            { this.state.jobs.map((job) => (
          <IconsBox>
            <Button handleClick>{job}</Button>
            </IconsBox>
            ))}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        {/* <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Job Type
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            <JobType />
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Property</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              This is where you would edit your property information
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Time</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
             Here is where you will be able to select the date for your job. Two buttons, Today will be red and represent booking a job ASAP.
          Schedule will pull up a calendar and allow you to pull up a date.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel5'} onChange={this.handleChange('panel5')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Payment</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Here is where you would pay for your job.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel> */}
      </div>
      </Wrapper>
    );
  }
}

JobSelection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JobSelection);