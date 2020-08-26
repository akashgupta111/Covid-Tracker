import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';


export default class Barchart extends Component {
    state= {
        states: [],
        stconfirmed: [],
        strecovered: [],
        stdeaths: [],
        stactive: []
    }


    componentDidMount(){
        fetch('https://api.covid19india.org/data.json')
        .then(resp=>resp.json())
        .then(result=>{
            console.log('rs', result)
            let stateArr= result.statewise.map(item=>{
                            return item.state
                        })
            let stateCon= result.statewise.map(item=>{
                return Number(item.confirmed)
            })

            let stateRec= result.statewise.map(item=>{
                return Number(item.recovered)
            })

            let stateDea= result.statewise.map(item=>{
                return Number(item.deaths)
            })

            let stateAct= result.statewise.map(item=>{
                return Number(item.active)
            })
                // console.log("map",mapArr);
                stateArr.shift();
                stateCon.shift();
                stateRec.shift();
                stateDea.shift();
                stateAct.shift();
                
                this.setState({
                    states:stateArr ,
                    stconfirmed: stateCon,
                    strecovered: stateRec,
                    stdeaths: stateDea,
                    stactive: stateAct
                },()=>{
                    console.log('sd', this.state.states);
                    console.log('st',this.state.stconfirmed);
                })
           
         })
    }

    render() {
        const dataCon = {
            labels: this.state.states,
            datasets: [
                {   
                    barPercentage: 1,
                    backgroundColor: '#CB0F33',
                    label:'State Cases',
                    data: this.state.stconfirmed
                }
            ]
        }

        const optionsCon= {
            title:{
                display :true,
                text: 'Confirmed',
                fontSize: 16,
                fontColor: '#CB0F33'
            },
            scales:{
                xAxes:[{
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    }
                }],
                yAxes:[{
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    },
                    ticks:{
                        min:0,
                        max:Math.max(...this.state.stconfirmed),
                        stepSize: 50000
                    }
                }]
            }
        }

        const dataAct = {
            labels: this.state.states,
            datasets: [
                {   
                    backgroundColor: '#1681F6',
                    label:'State Cases',
                    data: this.state.stactive
                }
            ]
        }

        const optionsAct= {
            title:{
                display :true,
                text: 'Active',
                fontSize: 16,
                fontColor: '#1681F6'
            },
            scales:{
                xAxes:[{
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    }
                }],
                yAxes:[{
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    },
                    ticks:{
                        min:0,
                        max:Math.max(...this.state.stactive),
                        stepSize: 20000
                    }
                }]
            }
        }

        const dataRec = {
            labels: this.state.states,
            datasets: [
                {   
                    backgroundColor: '#43F00A',
                    label:'State Cases',
                    data: this.state.strecovered
                }
            ]
        }

        const optionsRec= {
            title:{
                display :true,
                text: 'Recovered',
                fontSize: 16,
                fontColor: '#43F00A'
            },
            scales:{
                xAxes:[{
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    }
                }],
                yAxes:[{
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    },
                    ticks:{
                        min:0,
                        max: Math.max(...this.state.strecovered),
                        stepSize: 50000
                    }
                }]
            }
        }

        const dataDea = {
            labels: this.state.states,
            datasets: [
                {   
                    backgroundColor: 'gray',
                    label:'State Cases',
                    data: this.state.stdeaths
                }
            ]
        }

        const optionsDea= {
            title:{
                display :true,
                text: 'Deaths',
                fontSize: 16,
                fontColor: 'gray'
            },
            scales:{
                xAxes:[{
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    }
                }],
                yAxes:[{
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    },
                    ticks:{
                        min:0,
                        max: Math.max(...this.state.stdeaths),
                        stepSize: 2000
                    }
                }]
            }
        }
        return (
            <div>
                <Bar 
                data={dataCon}
                options={optionsCon}
                />
                <Bar
                    data={dataAct}
                    options={optionsAct}
                />
                <Bar 
                    data={dataRec}
                    options={optionsRec}
                />
                <Bar 
                    data={dataDea}
                    options={optionsDea}
                />
            </div>
            
        )
    }
}

