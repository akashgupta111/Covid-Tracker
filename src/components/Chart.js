import React, { Component } from 'react';

import {Line} from 'react-chartjs-2';

class Chart extends Component {
    
    
    render (){
        const data={
            labels:this.props.date,
            datasets:[{
                backgroundColor: this.props.bgColor,
                borderColor: this.props.bdColor,
                label:'Corona Cases',
                data:this.props.speData
            }]
        }
        const options = {
            title:{
                display :true,
                text: this.props.title
            },
            scales:{
                xAxes:[{
                    gridLines: {
                        drawOnChartArea: false,
                    }
                }],
                yAxes:[{
                    gridLines: {
                        drawOnChartArea: false,
                    },
                    ticks:{
                        min:this.props.min,
                        max: Math.max(...this.props.speData)+ (100-(Math.max(...this.props.speData)%100)),
                        stepSize: this.props.step
                    }
                }]
            }
            
        }

        return (
            <div style={{backgroundColor:this.props.bggColor,marginBottom:"50px",padding:"5px",borderRadius:"3px"}}>
                <Line 
                        options={options}
                        data={data}/>
            </div>
        )
    }
}

export default Chart;
