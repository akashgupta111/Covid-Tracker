import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import Chart from './Chart';
import { Container, Row, Col } from 'reactstrap';
import { hexToRgb } from '@material-ui/core';

class Charts extends Component {
    state={
        data:[],
        totalConfirmed:[],
        date:[],
        totalActive: [],
        totalRecovered: [],
        totalDeaths: []
    }
    componentDidMount(){
        fetch('https://api.covid19india.org/data.json')
        .then(resp=>resp.json())
        .then(result=>{
            // console.log(result.cases_time_series)
            // let newArr = [];
            let totalConfirmedArr=[];
            let dateArr=[];
            let totalActiveArr=[];
            let totalRecoveredArr=[];
            let totalDeathsArr=[];
            result.cases_time_series.forEach(item=>{
                // const obj = {
                //     date:item.date,
                //     totalConfirmed:item.totalconfirmed,
                // }
                // newArr.push(obj);
                totalConfirmedArr.push(item.dailyconfirmed)
                dateArr.push(item.date)
                totalActiveArr.push(item.dailyconfirmed - item.dailyrecovered - item.dailydeceased)
                totalRecoveredArr.push(item.dailyrecovered)
                totalDeathsArr.push(item.dailydeceased)
            })
            var slicedConfirmedArr = totalConfirmedArr.slice(-30);
            var slicedDateArr = dateArr.slice(-30);
            var slicedRecovered = totalRecoveredArr.slice(-30);
            var slicedDeaths = totalDeathsArr.slice(-30);
            var slicedActive = totalActiveArr.slice(-30)
            // console.log(dateArr);
            this.setState({
                // data:newArr,
                totalConfirmed:slicedConfirmedArr,
                date:slicedDateArr,
                totalRecovered:slicedRecovered,
                totalDeaths:slicedDeaths,
                totalActive: slicedActive
            },()=>{
                console.log('totalConfirmed',this.state.totalConfirmed)
                console.log('date',this.state.date)
            })
        })
    }
   
    render() {
        
            
        
        return (
            <div>
                <Container>
                    <Row>
                        <Col md="12">
                            <Chart 
                                speData={this.state.totalConfirmed} 
                                date={this.state.date} 
                                min={0}
                                title='Confirmed Cases'
                                bdColor="#CC1034"
                                bgColor= "rgba(204,16,52,0.5)"
                                bggColor= "rgba(255, 179, 179,0.2)"
                                step={10000}/>
                            
                        </Col>
                        <Col md="12">
                            <Chart 
                                speData={this.state.totalRecovered} 
                                date={this.state.date} 
                                min={0}
                                title='Recovered'
                                bdColor='#43f906'
                                bgColor= "rgba(80, 166, 69,0.5)"
                                bggColor= "rgba(180, 253, 180,0.2)"
                                step={10000}/>

                        </Col>
                        <Col md="12">
                            <Chart 
                                speData={this.state.totalDeaths} 
                                date={this.state.date} 
                                min={0}
                                title='Deaths'
                                bdColor='#1a1a1a'
                                bgColor= "rgba(115, 115, 115,0.5)"
                                bggColor= "rgba(217, 217, 217,0.2)"
                                step={500}/>

                        </Col>
                        <Col md="12">

                            <Chart 
                            speData={this.state.totalActive} 
                            date={this.state.date} 
                            min={Math.min(...this.state.totalActive) - (1000+(Math.min(...this.state.totalActive)%1000))}
                            title='Active'
                            bdColor='#0577f6'
                            bgColor= "rgba(5 ,119 ,246 ,0.2)"
                            bggColor= "rgba(153, 187, 255,0.2)"
                            step={10000}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Charts;