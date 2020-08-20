import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Charts from './Charts'

class VisualLayout extends Component {
    render() {
        return (
           <Container>
               <Row>
                   <Col md="6">
                        <Charts/>
                   </Col>
               </Row>
           </Container>
        );
    }
}

export default VisualLayout;