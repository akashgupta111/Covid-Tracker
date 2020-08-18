import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import numeral from 'numeral'

// const options={
//     legend:{
//         display:false,
//     },
//     elements:{
//         point:{
//             radius:0
//         },
//     },
//     maintainAspectRatio:false,
//     tooltips: {
//         mode: "index",
//         intersect: false,
//         callbacks: {
//           label: function (tooltipItem, data) {
//             return numeral(tooltipItem.value).format("+0,0");
//           },
//         },
//       },
//       scales: {
//         xAxes: [
//           {
//             type: "time",
//             time: {
//               format: "MM/DD/YY",
//               tooltipFormat: "ll",
//             },
//           },
//         ],
//         yAxes: [
//           {
//             gridLines: {
//               display: false,
//             },
//             ticks: {
//               // Include a dollar sign in the ticks
//               callback: function (value, index, values) {
//                 return numeral(value).format("0a");
//               },
//             },
//           },
//         ],
//       },

    
// }
class Charts extends Component {
    state={
        data:[],
        totalConfirmed:[],
        date:[]
    }
    componentDidMount(){
        fetch('https://api.covid19india.org/data.json')
        .then(resp=>resp.json())
        .then(result=>{
            // console.log(result.cases_time_series)
            // let newArr = [];
            let totalConfirmedArr=[];
            let dateArr=[];
            result.cases_time_series.forEach(item=>{
                // const obj = {
                //     date:item.date,
                //     totalConfirmed:item.totalconfirmed,
                // }
                // newArr.push(obj);
                totalConfirmedArr.push(item.totalconfirmed)
                dateArr.push(item.date)
            })
            var slicedConfirmedArr = totalConfirmedArr.slice(-30);
            var slicedDateArr = dateArr.slice(-30)
            // console.log(dateArr);
            this.setState({
                // data:newArr,
                totalConfirmed:slicedConfirmedArr,
                date:slicedDateArr
            },()=>{
                console.log('totalConfirmed',this.state.totalConfirmed)
                console.log('date',this.state.date)
            })
        })
    }
   
    render() {
        const data={
            labels:this.state.date,
            datasets:[{
                backgroundColor: "rgba(204,16,52,0.5)",
                borderColor: "#CC1034",
                label:'Corona Cases',
                data:this.state.totalConfirmed
            }]
        }
        const options = {
            title:{
                display :true,
                text:'Confirmed Cases'
            },
            scales:{
                yAxes:[{
                    ticks:{
                        min:1000000,
                        max:Number(this.state.totalConfirmed[this.state.totalConfirmed.length-1]),
                        stepSize:200000
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
        );
    }
}

export default Charts;