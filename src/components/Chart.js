import React, { Component } from 'react';

import {Line} from 'react-chartjs-2';

class Chart extends Component {
    // state={
    //     data:[],
    //     totalConfirmed:[],
    //     date:[]
    // }
    // componentDidMount(){
    //     fetch('https://api.covid19india.org/data.json')
    //     .then(resp=>resp.json())
    //     .then(result=>{
    //         // console.log(result.cases_time_series)
    //         // let newArr = [];
    //         let totalConfirmedArr=[];
    //         let dateArr=[];
    //         result.cases_time_series.forEach(item=>{
    //             // const obj = {
    //             //     date:item.date,
    //             //     totalConfirmed:item.totalconfirmed,
    //             // }
    //             // newArr.push(obj);
    //             totalConfirmedArr.push(item.totalconfirmed)
    //             dateArr.push(item.date)
    //         })
    //         var slicedConfirmedArr = totalConfirmedArr.slice(-30);
    //         var slicedDateArr = dateArr.slice(-30)
    //         // console.log(dateArr);
    //         this.setState({
    //             // data:newArr,
    //             totalConfirmed:slicedConfirmedArr,
    //             date:slicedDateArr
    //         },()=>{
    //             console.log('totalConfirmed',this.state.totalConfirmed)
    //             console.log('date',this.state.date)
    //         })
    //     })
    // }
    
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
                yAxes:[{
                    ticks:{
                        min:this.props.min,
                        max: Math.max(...this.props.speData)+ (100-(Math.max(...this.props.speData)%100)),
                        stepSize: this.props.step
                    }
                }]
            }
            
        }

        return (
            <div>
                <Line 
                        options={options}
                        data={data}/>
            </div>
        )
    }
}

export default Chart;
