import React, { Component } from 'react'
import { BlueButton } from '../ButtonStyle'
import { FormStyled } from '../FormStyle'
import axios from 'axios'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';
import Time from './BookTime'




axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


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

class BookProperty extends Component {

    state = {
        users: [],
        properties: [],
        newProperty: {
            streetAddress: '',
            // streetAddress2: '',
            city: '',
            state: '',
            zipcode: '',
            user: ''
        }
    }

    componentDidMount() {
        this.getAllUserData()
    }

    getAllUserData = () => {
        const url = `/api/users/`
        axios.get(url).then(res => {
            this.setState({ users: res.data })
        })
    }

    handleChange = panel => (event, expanded) => {
        this.setState({
          expanded: expanded ? panel : false,
        });
      };

    handleChangeTwo = (event) => {
        event.preventDefault()
        const updatedNewProperty = { ...this.state.newProperty }
        updatedNewProperty[event.target.name] = event.target.value
        console.log(updatedNewProperty)
        this.setState({ newProperty: updatedNewProperty })
    }

    handleSubmit = (event) => {
        // const below was for testing post - remove
        event.preventDefault()
        const userId = 1
        const payload = {
            streetAddress: this.state.newProperty.streetAddress,
            city: this.state.newProperty.city,
            state: this.state.newProperty.state,
            zipcode: this.state.newProperty.zipcode,
            user: userId
        }
        axios.post(`/api/user/${this.state.userId}/properties/`, payload).then(res => {
            const newProperty = res.data
            const newUserProperty = [...this.state.properties, newProperty]
            this.setState({ properties: newUserProperty })
        })
    }


    render() {

        const { classes } = this.props;
        const { expanded } = this.state;

        return (
            <div>
            <FormStyled>
                <h1>Property</h1>
                <div className="form-container">
                    <form onSubmit={this.handleSubmit}>
                        <label>Street</label>
                        <input
                            onChange={this.handleChangeTwo}
                            value={this.state.newProperty.streetAddress}
                            type="text" name="streetAddress"
                            maxLength="120">
                        </input>
                        {/* <p>Street Address 2 (optional)</p>
                        <input
                        onChange={this.handleChange}
                        // value={this.state.newProperty.streetAddress2}
                        type="text" name="streetaddress2"
                        maxLength="120">
                        </input> */}
                        <label>City</label>
                        <input
                            onChange={this.handleChangeTwo}
                            value={this.state.newProperty.city}
                            type="text" name="city"
                            maxLength="120">
                        </input>
                        <div className="sub-form-container">
                            <div>
                                <label>State</label>
                                <input
                                    onChange={this.handleChangeTwo}
                                    value={this.state.newProperty.state}
                                    type="text" name="state"
                                    maxLength="120">
                                </input>
                            </div>
                            <div>
                                <label>Zip code</label>
                                <input
                                    onChange={this.handleChangeTwo}
                                    value={this.state.newProperty.zipcode}
                                    type="text" name="zipcode"
                                    maxLength="10">
                                </input>
                            </div>
                        </div>
                        <div className="submit-button">
                            <BlueButton>Next</BlueButton>
                        </div>
                    </form>
                </div>
            </FormStyled>
            <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>Time</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
         <Time{...this.state}{...this.props} />
            </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    </div>
        )
    }
}

export default withStyles(styles)(BookProperty)
