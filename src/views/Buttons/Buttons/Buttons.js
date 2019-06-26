import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';



class Buttons extends Component {
   

  render() {
    return (
      
      <div className="animated fadeIn" style={{width:300,left:200}}>
       <div style={{width:800,left:200}}>      
      <Breadcrumb >
        <BreadcrumbItem active>Grid view</BreadcrumbItem>
        <Link to="/Calender">
        <BreadcrumbItem>Calender</BreadcrumbItem>
         </Link>
         </Breadcrumb>
        
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
  }
}

export default Buttons;
