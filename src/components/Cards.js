import React, { Component } from 'react';
import AppCard from './AppCard';
import { Container, Row, Col } from 'reactstrap';

import './cards.css';

class Cards extends Component {
    state={
        confirmed:0,
        active:0,
        recovered:0,
        diffConfirmed:0,
        diffActive:0,
        diffRecovered:0,
        diffDeath:0,
        isPlusSign: true
    }


    componentDidMount(){
        fetch('https://api.covid19india.org/data.json')
        .then(resp=>resp.json())
        .then(result=>{
            this.setState({
                confirmed:result.statewise[0].confirmed,
                active:result.statewise[0].active,
                recovered:result.statewise[0].confirmed - result.statewise[0].active - result.statewise[0].deaths,
                deaths:result.statewise[0].deaths,
                diffConfirmed:Number(result.cases_time_series[result.cases_time_series.length-1].dailyconfirmed),
                diffRecovered:Number(result.cases_time_series[result.cases_time_series.length-1].dailyrecovered),
                diffActive: Number(result.cases_time_series[result.cases_time_series.length-1].dailyconfirmed) - Number(result.cases_time_series[result.cases_time_series.length-1].dailyrecovered)-
                Number(result.cases_time_series[result.cases_time_series.length-1].dailydeceased),
                diffDeath: Number(result.cases_time_series[result.cases_time_series.length-1].dailydeceased)
            },()=>{
                if(this.state.diffActive<0 ){
                    this.setState({
                        isPlusSign:false
                    })
                }
                else{
                    this.setState({
                        isPlusSign:true
                    })
                }
            })

        }).catch((err)=>{
            console.log(err)
        })
    }
    render() {
        return (
            
                    <div>
                        <Container className='cards'>
                            <Row>
                                <Col md="3">

                                    <AppCard heading="Confirmed" fontColor="red" backgroundColor="rgba(255,7,58,.12549)" cases = {this.state.confirmed} diff={this.state.diffConfirmed} sign={this.state.isPlusSign} hoverClass='confirmed-hover'/>
                                </Col>
                                <Col md="3">
                                    <AppCard heading="Active" fontColor="#037AFB" backgroundColor="rgba(0,123,255,.0627451)" cases = {this.state.active} diff={this.state.diffActive} sign={this.state.isPlusSign} hoverClass="active-hover"/>

                                </Col>
                                <Col md="3">
                                    <AppCard heading="Recovered" fontColor="#50A745" backgroundColor="rgba(40,167,69,.12549)" cases = {this.state.recovered} diff={this.state.diffRecovered} sign={this.state.isPlusSign} hoverClass="recovered-hover"/>
                                </Col>
                                <Col md="3">
                                    <AppCard heading="Deaths" fontColor="gray" backgroundColor="rgba(108,117,125,.0627451)" cases = {this.state.deaths} diff={this.state.diffDeath} sign={this.state.isPlusSign} hoverClass="death-hover"/>
                                </Col>
                            </Row>
                        </Container>
                    
                     </div>
                )}
                

            
       
}

export default Cards;