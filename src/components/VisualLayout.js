import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Charts from './Charts'
import Map from './Map';

class VisualLayout extends Component {
    render() {
        return (
           <Container fluid={true}>
               <Row>
                   <Col md='8'>
                        <Map/>
                   </Col>
                   <Col md="4">
                        <Charts/>
                   </Col>
                   
               </Row>
           </Container>
        );
    }
}

export default VisualLayout;