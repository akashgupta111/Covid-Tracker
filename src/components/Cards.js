import React, { Component } from 'react';
import AppCard from './AppCard';
import { Container, Row, Col } from 'reactstrap';
import style from './cards.module.css';
import ThemeContext from './ThemeContext'



class Cards extends Component {
    state={
        confirmed:0,
        active:0,
        recovered:0,
        diffConfirmed:0,
        diffActive:0,
        diffRecovered:0,
        diffDeath:0,
        isPlusSign:true
    }
    componentDidMount(){
        fetch('https://api.covid19india.org/data.json')
        .then(resp=>resp.json())
        .then(result=>{
            // console.log('confirmed',result.statewise[0].confirmed)
            // console.log('casetime',result.cases_time_series[result.cases_time_series.length-1])
            this.setState({
                confirmed:result.statewise[0].confirmed,
                active:result.statewise[0].active,
                recovered:result.statewise[0].confirmed - result.statewise[0].active - result.statewise[0].deaths,
                deaths:result.statewise[0].deaths,
                diffConfirmed:Number(result.cases_time_series[result.cases_time_series.length-1].dailyconfirmed),
                diffRecovered:Number(result.cases_time_series[result.cases_time_series.length-1].dailyrecovered),
                diffActive: Number(result.cases_time_series[result.cases_time_series.length-1].dailyconfirmed) - Number(result.cases_time_series[result.cases_time_series.length-1].dailyrecovered),
                diffDeath: Number(result.cases_time_series[result.cases_time_series.length-1].dailydeceased)
            },()=>{
                if(this.state.diffConfirmed<0){
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

        })
    }
    render() {
        return (
            <ThemeContext.Consumer>
                {(theme)=>(
                    <div>
                        <Container className={style.cards}>
                            <Row>
                                <Col md="3">
                                    <AppCard 
                                        heading="Confirmed" 
                                        fontColor="red" 
                                        backgroundColor="rgba(255,7,58,.12549)" 
                                        cases = {this.state.confirmed} 
                                        diffConfirmed={this.state.diffConfirmed} 
                                        sign={this.state.isPlusSign}
                                        hover={style.cardC}/>
                                </Col>
                                <Col md="3">
                                    <AppCard heading="Active" fontColor="#037AFB" backgroundColor="rgba(0,123,45,.0627451)" cases = {this.state.active} diffActive={this.state.diffActive} sign={this.state.isPlusSign}/>
                                </Col>
                                <Col md="3">
                                    <AppCard heading="Recovered" fontColor="#50A745" backgroundColor="rgba(40,167,69,.12549)" cases = {this.state.recovered} diffRecovered={this.state.diffRecovered} sign={this.state.isPlusSign}/>
                                </Col>
                                <Col md="3">
                                    <AppCard heading="Deaths" fontColor="gray" backgroundColor="rgba(108,117,125,.0627451)" cases = {this.state.deaths} diffDeath={this.state.diffDeath} sign={this.state.isPlusSign}/>
                                </Col>
                            </Row>
                        </Container>
                    
                     </div>
                )}
                

            </ThemeContext.Consumer>
        );
    }
}

export default Cards;