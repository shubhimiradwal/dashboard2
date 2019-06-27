import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row} from 'reactstrap';
//import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Calendar from 'react-calendar';
 

class Buttons extends Component {
   
  constructor() {
    super();
    this.state = {
      input: false
    };
  }
  onChange=()=>
  {
    this.setState({input:true})
  };

  render() {
    if({input:false})
    return (
        <div className="animated fadeIn" style={{width:300,left:200}}>
            <div style={{width:800,left:200}}>
              <Button onClick={this.onChange}> on click!!</Button>
          </div>
        <Card>
          <CardHeader>
            <strong>Card</strong>
          </CardHeader>
          <CardBody>
            <Row className="align-items-center">
              <Col col="12" xl className="pa0">
                Date
              </Col>
            </Row>
            <Row className="align-items-center mt-3">
              <Col col="12" xl className="pa0">
                Profile
              </Col>
           </Row>
            <Row className="align-items-center mt-3">
              <Col col="12" xl className="pa0">
                Intern Name
              </Col>
           </Row>
        </CardBody>
        </Card>
      
         <Card>
          <CardHeader>
            <strong>Card</strong>
          </CardHeader>
          <CardBody>
            <Row className="align-items-center">
             <Col col="12" xl>
                Date
             </Col>
             </Row>
            <Row className="align-items-center mt-3">
              <Col col="12" xl >
                Profile
              </Col>
           </Row>
            <Row className="align-items-center mt-3">
              <Col col="12" xl >
                Intern Name
              </Col>
           </Row>
        </CardBody>

        </Card>
         <Card>
          <CardHeader>
            <strong>Card</strong>
          </CardHeader>
          <CardBody>
            <Row className="align-items-center">

              <Col col="12" xl>
                Date
             </Col>
            
           </Row>
            <Row className="align-items-center mt-3">
              <Col col="12" xl>
                Profile
              </Col>
           </Row>
            <Row className="align-items-center mt-3">
              <Col col="12" xl>
                Intern Name
              </Col>
           </Row>
        </CardBody>
        </Card>
        </div>
    );
  else{
    return(
      <div>
      <Calendar/>
      </div>
      );
  }
  }
}

export default Buttons;
