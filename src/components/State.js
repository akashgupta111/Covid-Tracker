import React from 'react';
import { Container, Row,Col } from 'reactstrap';
import AppCard from './AppCard'
import BarChart from './BarChart'



const State = props => {
    
    return (
        
            <Container className="mt-5">
                <Row>
                    <Col md='5'>
                        <h1 style={{display:'inline-block',color:'red',backgroundColor:'rgba(255,7,58,.12549)'}}>{props.stateData.length?props.stateData[0].state:''}</h1>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md="3">
                        <AppCard 
                            heading="Confirmed" 
                            fontColor="red" 
                            backgroundColor="rgba(255,7,58,.12549)" 
                            cases ={props.stateData.length?props.stateData[0].confirmed:''} 
                            diff={props.stateData.length?props.stateData[0].deltaconfirmed:''} 
                            hoverClass="confirmed-hover"
                        />
                    </Col>
                    <Col md="3">
                        <AppCard 
                            heading="Active" 
                            fontColor="#037AFB" 
                            backgroundColor="rgba(0,123,255,.0627451)" 
                            cases = {props.stateData.length?props.stateData[0].active:''} 
                            diff={Number(props.stateData[0].deltaconfirmed) -
                            Number(props.stateData[0].deltarecovered)-
                            Number(props.stateData[0].deltadeaths)}
                            hoverClass="active-hover"
                        />
                    </Col>
                    <Col md="3">
                        <AppCard 
                            heading="Recovered" 
                            fontColor="#50A745" 
                            backgroundColor="rgba(40,167,69,.12549)" 
                            cases ={props.stateData.length?props.stateData[0].recovered:''} 
                            diff={props.stateData.length?props.stateData[0].deltarecovered:''} 
                            hoverClass="recovered-hover"
                        />
                    </Col>
                    <Col md="3">
                        <AppCard 
                            heading="Deaths" 
                            fontColor="gray" 
                            backgroundColor="rgba(108,117,125,.0627451)" 
                            cases ={props.stateData.length?props.stateData[0].deaths:''} 
                            diff={props.stateData.length?props.stateData[0].deltadeaths:''} 
                            hoverClass="death-hover"
                        />
                    </Col>
                </Row>
                
                    <BarChart
                        
                    />
                
            </Container>
           

        
    );
};



export default State;