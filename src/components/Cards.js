import React, { Component } from 'react';
import AppCard from './AppCard';
import { Container, Row, Col } from 'reactstrap';
import './cards.css';

class Cards extends Component {
    render() {
        return (
            <div>
                <Container className="cards-container">
                    <Row>
                        <Col md="3">
                            <AppCard heading="Confirmed" fontColor="red" backgroundColor="rgba(255,7,58,.12549)"/>
                        </Col>
                        <Col md="3">
                            <AppCard heading="Active" fontColor="#037AFB" backgroundColor="rgba(0,123,255,.0627451)"/>
                        </Col>
                        <Col md="3">
                            <AppCard heading="Recovered" fontColor="#50A745" backgroundColor="rgba(40,167,69,.12549)"/>
                        </Col>
                        <Col md="3">
                            <AppCard heading="Deceased" fontColor="gray" backgroundColor="rgba(108,117,125,.0627451)"/>
                        </Col>
                    </Row>
                </Container>
                
            </div>
        );
    }
}

export default Cards;