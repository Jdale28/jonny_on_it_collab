class Example extends React.Component {


    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
      const popover = (
        <Popover id="modal-popover" title="popover">
          very popover. such engagement
        </Popover>
      );
      const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
  
      return (
        <div>
          <p>Click to get the full Modal experience!</p>
  
          <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
            Launch demo modal
          </Button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
             
            <Container>
        <PageFlex>
          <PropertyFlex>
            <h1>Your List of Properties Below</h1>
            {/* <PropertyListFlex> */}
           
            {this.state.properties.map((property, i) => (
               <div className='property'>
               <div className='photo'>dkdkdk</div>
              <div key={i} className="OneProperty">
                <div>{property.streetAddress}</div>
                <div>
                  {property.city}, {property.state} {property.zipcode}
                </div>
              </div>
              </div>
            ))}
            {/* </PropertyListFlex> */}
           
            <FormAndGeoBox>
              
                
            <form onSubmit={this.handleSubmit}>
            <p>
            Street Address<span className="span">*</span>
            </p>
            <input
            class="streetAddressInput"
            type="text"
            onChange={this.handleChange}
            name="streetAddress"
            />
            <p>
            City<span className="span">*</span>
            </p>
            <input class="cityInput" type="text" onChange={this.handleChange} name="city" />
            <p>
            State<span className="span">*</span>
            </p>
            <input class="stateInput" type="text" onChange={this.handleChange} name="state" />
            <p>
            Zip Code<span className="span">*</span>
            </p>
            <input placeholder="Authenticate with zipcode" type="text" onChange={this.handleChange} name="zipcode" />
            <br />
            <div className="addProperty">
                <button type="submit">Add New Property</button>
            </div>
            </form>
            
            {/* <h1>My Google Map</h1> */}
            <GeoBox><h4>Find your USA-based address below and populate the form automatically!</h4>
            <Geosuggest onSuggestSelect={this.onSuggestSelect} /></GeoBox></FormAndGeoBox>
          </PropertyFlex>
        </PageFlex>
      </Container>
              
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
  
  render(<Example />);