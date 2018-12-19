
    
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
        </ExpansionPanel>
      </div>
      </Wrapper>

    );
  }
}

